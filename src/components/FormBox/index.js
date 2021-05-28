import React, { memo, useCallback, useEffect, useState } from 'react';
// componennts
import { Accordion } from '..';
// styles
import { CheckboxContainer, SubAreaContainer } from './styles';

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

const FormBox = memo(({ title, questions: questionsOrSubAreas , handleErrors }) => {
    const [boxQuestions, setBoxQuestions] = useState([]);
    const [boxSubAreas, setBoxSubAreas] = useState([]);

    useEffect(() => {
        if (Object.keys(questionsOrSubAreas[0]).includes('id')) {
            setBoxQuestions(questionsOrSubAreas.map(question => ({
                ...question,
                selected: false
            })));
        } else {
            setBoxSubAreas(questionsOrSubAreas.map(subArea => {
                subArea[1] = subArea[1].map(question => ({
                    ...question,
                    selected: false
                }));

                return subArea;
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const hasErrorOnQuestions = boxQuestions.filter(question => question.selected).length === 0;
        // TODO: Validar erros das subareas

        if (hasErrorOnQuestions) {
            handleErrors({ box: title, value: `${String(title).toUpperCase()}` });
        } else {
            handleErrors({ box: title, value: null });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boxQuestions]);

    const handleCheckboxChange = useCallback((type, questionId, questionSelected) => {
        if (type === 'question') {
            setBoxQuestions(oldQuestions => oldQuestions.map(oldQuestion => {
                if (oldQuestion.id === questionId) return {...oldQuestion, selected: !questionSelected};
                else return {...oldQuestion};
            }));
        } else {
            setBoxSubAreas(oldSubAreas => oldSubAreas.map(oldSubArea => {
                oldSubArea[1] = oldSubArea[1].map(oldQuestion => {
                    if (oldQuestion.id === questionId) return {...oldQuestion, selected: !questionSelected};
                    else return {...oldQuestion};
                });
                return oldSubArea;
            }));
        }
    }, []);

    return (
        <Accordion title={title}>
            {boxQuestions.map(question => (
                <CheckBox
                    key={question.id}
                    id={question.id}
                    text={question.text}
                    onChange={() => handleCheckboxChange('question', question.id, question.selected)}
                    checked={question.selected}
                />
            ))}
            {boxSubAreas.map((subArea, index) => (
                <SubAreaContainer key={index}>
                    <span>{String(subArea[0]).toUpperCase()}</span>

                    <div className="content">
                        {subArea[1].map(question => (
                            <CheckBox
                                key={question.id}
                                id={question.id}
                                text={question.text}
                                onChange={() => handleCheckboxChange('subarea', question.id, question.selected)}
                                checked={question.selected}
                            />
                        ))}
                    </div>
                </SubAreaContainer>
            ))}
        </Accordion>
    )
})

export default FormBox;