import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// components
import { Navbar, Footer, FormBox } from '../../components';
// styles
import { Container } from './styles';
// mocks
import sensibilizacao from '../../mocks/sensibilizacao';
// notification
import Notification from '../../notification';

const Form = () => {
    const [errors, setErrors] = useState({});

    const location = useLocation();

    const areaIsValid = () => {
        const [area] = location.pathname.split('/').slice(-1);

        return [
            'plataforma_e_produtos',
            'fluxo_de_avanco_do_desenvolvedor',
            'devrel_evangelismo_e_advocacia',
            'monitoramento'
        ].includes(area);
    }

    const handleErrors = (error) => {
        setErrors(oldErrors => ({ ...oldErrors, [error.box]: error.value }));
    }

    const hasNoErrors = () => {
        const errorsValues = Object.values(errors);

        return errorsValues.every(value => value === null);
    }

    const handleSubmit = () => {
        if (hasNoErrors()) {
            // TODO
        } else {
            handleErrorNotification(Object.values(errors));
        }
    }

    const handleErrorNotification = (errorsValues) => {
        const errorsValuesWithText = errorsValues.filter(value => value !== null);
        const errorsAmount = errorsValuesWithText.length;

        if (errorsAmount === errorsValues.length) {
            Notification.show('error', 'Nenhuma resposta foi selecionada');
        } else if (errorsAmount === 1) {
            Notification.show('error', `Nenhuma resposta foi selecionada na seção ${errorsValuesWithText[0]}`);
        } else if (errorsAmount === 2) {
            const text = errorsValuesWithText.join(';').replace(';', ' e ');
            Notification.show('error', `Nenhuma resposta foi selecionada nas seções ${text}`);
        } else {
            const lastError = errorsValuesWithText.splice(errorsAmount-1, 1);
            const text = errorsValuesWithText.join(';').replace(';', ', ');
            Notification.show('error', `Nenhuma resposta foi selecionada nas seções ${text} e ${lastError}`);
        }
    }

    if (!areaIsValid()) {
        return (
            <h1>Área de foco inválida</h1>
        );
    }

    return (
        <>
            <Navbar />
            <Container>
                <FormBox
                    title="objetivo"
                    questions={sensibilizacao.content.plataforma_e_produtos.content.objetivo.content}
                    handleErrors={error => handleErrors(error)}
                />

                <FormBox
                    title="componente"
                    questions={sensibilizacao.content.plataforma_e_produtos.content.componente.content}
                    handleErrors={error => handleErrors(error)}
                />
                
                <button type="button" onClick={() => handleSubmit()}>Salvar</button>
            </Container>
            <Footer />
        </>
    );
}

export default Form;