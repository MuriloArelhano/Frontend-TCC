import React from 'react';
// components
import { Navbar, Footer } from '../../components';
// styles
import { Container } from './styles';

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

                <div className="select-message">
                    <p>Selecione abaixo um dos seguintes estágios</p>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Form;