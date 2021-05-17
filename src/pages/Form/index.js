import React from 'react';
// components
import { Navbar, Footer } from '../../components';
import Stage from './Stage';
// styles
import { Container, StageContainer } from './styles';
// images
import sensibilityImg from '../../images/speaker.png';
import entranceImg from '../../images/rocket.png';
import activationImg from '../../images/box.png';
import retentionImg from '../../images/tool.png';
import rewardImg from '../../images/reward.png';
import referenceImg from '../../images/reference.png';

const Form = () => {
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
                    <div className="stage-item">
                        <div className="img-container">
                            <img src={sensibilityImg} alt="Sensibilização" />
                        </div>
                        <span>Sensibilização</span>
                    </div>
                    <div className="stage-item">
                        <div className="img-container">
                            <img src={entranceImg} alt="Entrada" />
                        </div>
                        <span>Entrada</span>
                    </div>
                    <div className="stage-item">
                        <div className="img-container">
                            <img src={activationImg} alt="Ativação" />
                        </div>
                        <span>Ativação</span>
                    </div>
                    <div className="stage-item">
                        <div className="img-container">
                            <img src={retentionImg} alt="Retenção" />
                        </div>
                        <span>Retenção</span>
                    </div>
                    <div className="stage-item">
                        <div className="img-container">
                            <img src={rewardImg} alt="Reconhecimento" />
                        </div>
                        <span>Reconhecimento</span>
                    </div>
                    <div className="stage-item">
                        <div className="img-container">
                            <img src={referenceImg} alt="Referência" />
                        </div>
                        <span>Referência</span>
                    </div>
                </StageContainer>

                <Stage />
            </Container>
            <Footer />
        </>
    );
}

export default Form;