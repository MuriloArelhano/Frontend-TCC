import React, { memo, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
// components
import { Navbar, Footer } from '../../components';
import Stage from './Stage';
// api
import StageAPI from '../../api/Stage';
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
    { id: 'SE', image: sensibilityImg },
    { id: 'EN', image: entranceImg },
    { id: 'A', image: activationImg },
    { id: 'RET', image: retentionImg },
    { id: 'REC', image: rewardImg },
    { id: 'REF', image: referenceImg }
]

const Form = memo(() => {
    const [selectedStage, selectStage] = useState(null);
    const [stages, setStages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getStagesFromAPI();
    }, []);

    const getStagesFromAPI = async () => {
        setLoading(true);
        const stagesResponse = await StageAPI.getStages();

        if (stagesResponse.status === 200) {
            setStages(stagesResponse.data.map(stage => ({
                ...stage,
                image: getStageImage(stage.id)
            })));
            setLoading(false);
        }
    }

    const getStageImage = (stageId) => {
        const [stage] = stagesImage.filter(stage => stage.id === stageId);

        if (stage) return stage.image;
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