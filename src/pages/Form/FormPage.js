import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// components
import { Navbar, Footer, FormBox } from '../../components';
// styles
import { Container } from './styles';
// notification
import Notification from '../../notification';
// mocks
import { getFocusArea } from '../../mocks';

const Form = memo(() => {
    const location = useLocation();

    const [errors, setErrors] = useState({});
    const [data, setData] = useState(null);
    const [areaIsValid, setSetAreaIsValid] = useState(false);
    const [stageName, setStageName] = useState('');

    useEffect(() => {
        const { pathname, state } = location;
        const [stage] = pathname.split('/').slice(-2);
        const [area] = pathname.split('/').slice(-1);

        const focusArea = getFocusArea(stage, area);
        if (focusArea) setData(focusArea);

        handleArea(area);
        setStageName(state.stage);
    }, [location]);

    const handleArea = (area) => {
        const result = [
            'plataforma_e_produtos',
            'fluxo_de_avanco_do_desenvolvedor',
            'devrel_evangelismo_e_advocacia',
            'monitoramento'
        ].includes(area);

        setSetAreaIsValid(result);
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
            const lastError = errorsValuesWithText.splice(errorsAmount - 1, 1);
            const text = errorsValuesWithText.join(';').replace(';', ', ');
            Notification.show('error', `Nenhuma resposta foi selecionada nas seções ${text} e ${lastError}`);
        }
    }

    const renderQuestions = (content) => {
        if (Array.isArray(content)) {
            return content;
        } else {
            // TODO: lidar com as subareas
            const subAreasEntries = Object.entries(content);
            
            const subAreas = subAreasEntries.map(entry => {
                const name = entry[0].replace('subarea_', '');
                entry[0] = name.replace(name.charAt(0), name.charAt(0).toLocaleUpperCase());
                entry[1] = entry[1].content;

                return entry;
            });

            // console.log(subAreas);
            return subAreas;
        }
    }

    if (!areaIsValid) {
        return (
            <h1>Área de foco inválida</h1>
        );
    }

    return (
        <>
            <Navbar />
            <Container>
                <div className="default-box select-message">
                    <p>Marque os elementos visando {stageName === 'Reconhecimento' ? 'o' : 'a'}
                        <strong> {String(stageName).toLowerCase()} de desenvolvedores</strong></p>
                </div>

                {Object.values(data.content).map(item => (
                    <FormBox
                        key={item.id}
                        title={item.name}
                        questions={renderQuestions(item.content)}
                        handleErrors={error => handleErrors(error)}
                    />
                ))}

                <button type="button" onClick={() => handleSubmit()}>Submeter formulário</button>
            </Container>
            <Footer />
        </>
    );
})

export default Form;