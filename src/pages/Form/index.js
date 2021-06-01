import React, { memo, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
// components
import { Navbar, Footer } from '../../components';
import Stage from './Stage';
// api
import { StageAPI, StorageAPI } from '../../api';
// styles
import { Container, StageContainer } from './styles';
// images
import sensibilityImg from '../../images/speaker.png';
import entranceImg from '../../images/rocket.png';
import activationImg from '../../images/box.png';
import retentionImg from '../../images/tool.png';
import rewardImg from '../../images/reward.png';
import referenceImg from '../../images/reference.png';

const stagesImage = [
    { id: 'SE', image: sensibilityImg, order: 1 },
    { id: 'EN', image: entranceImg, order: 2 },
    { id: 'A', image: activationImg, order: 3 },
    { id: 'RET', image: retentionImg, order: 4 },
    { id: 'REC', image: rewardImg, order: 5 },
    { id: 'REF', image: referenceImg, order: 6 }
]

const Form = memo(() => {
    const [selectedStage, selectStage] = useState(null);
    const [stages, setStages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getStagesFromAPI();
        if (StorageAPI.getItem('@devgo-form-route')) {
            StorageAPI.removeItem('@devgo-form-route');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getStagesFromAPI = async () => {
        setLoading(true);
        const stagesResponse = await StageAPI.getStages();

        if (stagesResponse.status === 200) {
            const formattedStages = stagesResponse.data.map(stage => ({
                ...stage,
                image: getStageImage(stage.id),
                order: getStageOrder(stage.id)
            }));
            
            setStages(formattedStages.sort(compareOrder));
            setLoading(false);
        }
    }

    const getStageImage = (stageId) => {
        const [stage] = stagesImage.filter(stage => stage.id === stageId);

        if (stage) return stage.image;
    }
    
    const getStageOrder = (stageId) => {
        const [stage] = stagesImage.filter(stage => stage.id === stageId);

        if (stage) return stage.order;
    }

    const compareOrder = (stageA, stageB) => {
        if (stageA.order < stageB.order) {
          return -1;
        }

        if (stageA.order > stageB.order) {
          return 1;
        }
        return 0;
      }

    const renderContent = () => {
        return (
            <Stage
                areas={JSON.parse(selectedStage.content)}
                sectionName={selectedStage.name}
                stageId={selectedStage.id}
            />
        );
    }

    return (
        <>
            <Navbar />
            <Container>
                <h1>Seção de Formulários</h1>

                <p>
                    Ajude-nos a melhorar o modelo através do preenchimento dos formulários,
                    dessa forma você estará contribuindo com o avanço de nossa pesquisa e ficará
                    por dentro das mais novas atualizações, podendo usufruir do modelo para a
                    melhoria de processos dentro da sua empresa.
                </p>

                {
                    loading ? (
                        <div style={{ marginTop: 60 }}>
                            <ReactLoading type="spokes" color="#1890FF" height={50} width={50} />
                        </div>
                    ) : (
                        <>
                            <div className="default-box select-message">
                                <p>Selecione abaixo um dos seguintes estágios</p>
                            </div>

                            <StageContainer>
                                {stages.map(stage => (
                                    <div className="stage-item" key={stage.id} onClick={() => selectStage(stage)}>
                                        <div className={`img-container ${selectedStage && selectedStage.id === stage.id && 'active'}`}>
                                            <img src={stage.image} alt={stage.name} />
                                        </div>
                                        <span>{stage.name}</span>
                                    </div>
                                ))}
                            </StageContainer>
                        </>
                    )
                }

                {selectedStage && renderContent()}
            </Container>
            <Footer />
        </>
    );
})

export default Form;