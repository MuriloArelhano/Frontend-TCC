import React, { memo, useEffect, useState } from 'react';
// components
import { Navbar, Footer } from '../../components';
import Stage from './Stage';
// api
import StageAPI from '../../api/Stage';
// styles
import { Container, StageContainer } from './styles';

const Form = memo(() => {
    const [selectedStage, selectStage] = useState(null);
    const [stages, setStages] = useState([]);

    useEffect(() => {
        getStagesFromAPI();
        // setStages(getStages());
    }, []);

    const getStagesFromAPI = async () => {
        const stagesResponse = await StageAPI.getStages();

        if (stagesResponse.status === 200) {
            setStages(stagesResponse.data);
        }
    }

    const renderContent = () => {
        const defaultName = String(selectedStage.name).replace('ã', 'a').replace('ç', 'c').replace('ê', 'e');

        return (
            <Stage
                areas={JSON.parse(JSON.parse(selectedStage.content))}
                sectionName={selectedStage.name}
                defaultName={defaultName.toLowerCase()}
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

                {selectedStage && renderContent()}
            </Container>
            <Footer />
        </>
    );
})

export default Form;