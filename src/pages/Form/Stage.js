import React, { memo, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';
// api
import { FormAPI } from '../../api';
// icons
import { RiCheckboxCircleFill } from 'react-icons/ri';
// styles
import { StageBox } from './styles';

const Stage = memo(({ areas, sectionName, stageId }) => {
    const history = useHistory();
    const [formattedAreas, setFormattedAreas] = useState([]);
    const [areasLoading, setAreasLoading] = useState(true);

    useEffect(() => {
        setAreasLoading(true);
        Promise.all(
            Object.keys(areas).map(async (key) => {
                const area = await handleFocusAreaAnswered(key);

                return {
                    ...areas[key],
                    answersAmount: area ? area.answersAmount : 0,
                    key
                }
            })
        ).then(result => {
            setFormattedAreas(result);
            setAreasLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [areas]);

    const handleClickArea = (area, focusArea) => {
        history.push(`/formulario/${stageId}/${area}`, { stage: sectionName, focusArea });
    }

    const handleFocusAreaAnswered = useCallback(async (focusArea) => {
        const response = await FormAPI.getAnswersAmount(stageId, focusArea);

        if (response.status === 200) {
            return response.data;
        }

        return null;
    }, [stageId]);

    const checkStageIsCompleted = (areas) => {
        let completedAmount = 0;

        areas.forEach(area => {
            if (area.answersAmount > 0) completedAmount++;
        });

        return completedAmount === areas.length;
    }

    const renderFocusAreas = () => {
        const stageIsCompleted = checkStageIsCompleted(formattedAreas);

        if (areasLoading) {
            return (
                <div style={{ marginTop: 32 }}>
                    <ReactLoading type="spokes" color="#1890FF" height={32} width={32} />
                </div>
            );
        }

        return (
            <>
                <div
                    style={{
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: stageIsCompleted ? '#3DBB11' : '#ef6c00',
                        borderRadius: 5,
                        padding: '8px 16px',
                        marginTop: 28
                    }}
                >
                    {stageIsCompleted ? (
                        <span>Todos os formulários foram respondidos</span>
                    ) : (
                        <span>Por favor preencha todos os formulários deste estágio</span>
                    )}
                </div>

                <div className="focus-area-container">
                    {formattedAreas.map(area => (
                        <div
                            key={area.id}
                            className="default-box focus-area"
                            style={{
                                borderColor: area.answersAmount > 0 ? '#3DBB11' : '#ef6c00'
                            }}
                            onClick={() => handleClickArea(area.key, area.name)}
                        >
                            {area.answersAmount > 0 && (
                                <div
                                    className="info"
                                    title={
                                        `Esse formulário possui ${area.answersAmount} ${area.answersAmount === 1 ? 'resposta' : 'respostas'}`
                                    }
                                >
                                    <RiCheckboxCircleFill className="success" />
                                </div>
                            )}
                            <div className="text">
                                <p>{area.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    return (
        <StageBox>
            <div className="box-header">Estágio de {sectionName}</div>
            <div className="box-body">
                <div className="default-box-3 box-info">
                    <p>
                        Os formulários que seguem tem como objetivo a seleção de elementos para cada <strong>área de foco </strong>
                        visando {sectionName === 'Reconhecimento' ? 'o' : 'a'}
                        <strong> {String(sectionName || '').toLowerCase()} de desenvolvedores</strong>
                    </p>
                </div>
                {renderFocusAreas()}
            </div>
        </StageBox>
    );
})

export default Stage;