import React, { memo, useCallback, useEffect, useState } from 'react';
// componennts
import { Accordion } from '..';
// styles
import { CheckboxContainer } from './styles';

const CheckBox = memo(({ id, text, checked, ...rest }) => {
    return (
        <CheckboxContainer>
            <input
                type="checkbox"
                name={`checkbox-${id}`}
                id={`checkbox-${id}`}
                checked={checked}
                {...rest}
            />
            <label htmlFor={`checkbox-${id}`}>{text}</label>
        </CheckboxContainer>
    )
})

const FormBox = memo(({ title, questions, handleErrors }) => {
    const [boxQuestions, setBoxQuestions] = useState(questions.map(question => ({
        ...question,
        selected: false
    })));

    useEffect(() => {
        if (boxQuestions.filter(question => question.selected).length === 0) {
            handleErrors({ box: title, value: `${String(title).toUpperCase()}` });
        } else {
            handleErrors({ box: title, value: null });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boxQuestions]);

    const handleCheckboxChange = useCallback((questionId, questionSelected) => {
        setBoxQuestions(oldQuestions => oldQuestions.map(oldQuestion => {
            if (oldQuestion.id === questionId) return {...oldQuestion, selected: !questionSelected};
            else return {...oldQuestion};
        }));
    }, []);

    return (
        <Accordion title={title}>
            {boxQuestions.map(question => (
                <CheckBox
                    key={question.id}
                    id={question.id}
                    text={question.text}
                    onChange={() => handleCheckboxChange(question.id, question.selected)}
                    checked={question.selected}
                />
            ))}
        </Accordion>
    )
})

export default FormBox;