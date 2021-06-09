import React, { memo, useCallback, useEffect, useState } from 'react';
// componennts
import { Accordion } from '..';
// styles
import { CheckboxContainer, SubAreaContainer, Notice } from './styles';

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

const FormBox = memo(({ title, questions: questionsOrSubAreas, handleErrors, handleSelectedQuestions }) => {
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

                subArea[2] = { atLeastOneSelected: 0 };

                return subArea;
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // verifica alterações nas seções sem subarea
    useEffect(() => {
        const boxKey = String(title).replaceAll(' ', '')
                                    .replaceAll('ê', 'e')
                                    .replaceAll('á', 'a')
                                    .replaceAll('ã', 'a')
                                    .replace('-', '');

        if (noQuestionSelected(boxQuestions)) {
            handleErrors({ box: boxKey, value: `${String(title).toUpperCase()}` });
        } else {
            handleErrors({ box: boxKey, value: null });
            handleSelectedQuestions(boxQuestions);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boxQuestions]);

    // verifica alterações nas seções com subarea
    useEffect(() => {
        const boxKey = String(title).replaceAll(' ', '')
                                    .replaceAll('ê', 'e')
                                    .replaceAll('á', 'a')
                                    .replaceAll('ã', 'a')
                                    .replace('-', '');
        
        if (noQuestionSelected(boxSubAreas, true)) {
            handleErrors({ box: boxKey, value: `${String(title).toUpperCase()}` });
        } else {
            handleErrors({ box: boxKey, value: null });
            handleSelectedQuestions(boxSubAreas, true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boxSubAreas]);

    const handleCheckboxChange = useCallback((type, questionId, questionSelected) => {
        if (type === 'question') {
            setBoxQuestions(oldQuestions => oldQuestions.map(oldQuestion => {
                return oldQuestion.id === questionId ? { ...oldQuestion, selected: !questionSelected } : { ...oldQuestion };
            }));
        } else {
            setBoxSubAreas(oldSubAreas => oldSubAreas.map(oldSubArea => {
                oldSubArea[1] = oldSubArea[1].map(oldQuestion => {
                    if (oldQuestion.id === questionId) {
                        oldSubArea[2].atLeastOneSelected = !questionSelected ?
                        oldSubArea[2].atLeastOneSelected + 1 :
                        oldSubArea[2].atLeastOneSelected - 1;
                    }

                    return oldQuestion.id === questionId ? { ...oldQuestion, selected: !questionSelected } : { ...oldQuestion };
                });
            
                return oldSubArea;
            }));
        }
    }, []);

    const noQuestionSelected = (questionsOrSubAreas, hasSubArea = false) => {
        if (hasSubArea) {
            let notSelected = true;
            let selectedAmount = 0;

            questionsOrSubAreas.forEach(item => {
                if (item[2].atLeastOneSelected > 0) selectedAmount++;
            });
            
            if (selectedAmount === questionsOrSubAreas.length) notSelected = false;

            return notSelected;
        } else {
            return questionsOrSubAreas.filter(question => question.selected).length === 0;
        }
    }

    return (
        <Accordion title={title}>
            <div className="content">
                {boxQuestions.length > 0 && (
                    <Notice>
                        <span>Selecione ao menos uma resposta</span>
                    </Notice>
                )}

                {boxQuestions.map(question => (
                    <CheckBox
                        key={question.id}
                        id={question.id}
                        text={question.text}
                        onChange={() => handleCheckboxChange('question', question.id, question.selected)}
                        checked={question.selected}
                    />
                ))}
            </div>
            {boxSubAreas.map((subArea, index) => (
                <SubAreaContainer key={index}>
                    <span>{String(subArea[0]).toUpperCase()}</span>

                    <div className="content">
                        <Notice>
                            <span>Selecione ao menos uma resposta</span>
                        </Notice>

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