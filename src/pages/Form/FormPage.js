import React, { memo, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useLocation, useHistory } from 'react-router-dom';
// icons
import { IoReturnUpBackOutline } from 'react-icons/io5'
// components
import { Navbar, Footer, FormBox } from '../../components';
// api
import { StageAPI, FormAPI } from '../../api';
// styles
import { Container } from './styles';
// notification
import Notification from '../../notification';

const Form = memo(() => {
    const location = useLocation();
    const { pathname, state } = location;

    const history = useHistory();

    const [errors, setErrors] = useState({});
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [data, setData] = useState(null);
    const [areaIsValid, setSetAreaIsValid] = useState(false);
    const [stageName, setStageName] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    useEffect(() => {
        const [stageId] = pathname.split('/').slice(-2);
        const [area] = pathname.split('/').slice(-1);

        getFocusAreaFromAPI(stageId, area);

        handleArea(area);
        setStageName(state.stage);
    }, [location, pathname, state]);

    const getFocusAreaFromAPI = async (stageId, area) => {
        setLoading(true);
        const focusAreaResponse = await StageAPI.getFocusArea(stageId, area);

        if (focusAreaResponse.status === 200) {
            setData(focusAreaResponse.data);
            setLoading(false);
        }
    }

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
        return Object.values(errors).every(value => value === null);
    }

    const handleSelectedQuestions = (questionsOrSubArea, hasSubArea = false) => {
        if (hasSubArea) {
            // lidar com as subareas
            questionsOrSubArea.forEach(subArea => {
                subArea[1].forEach(question => {
                    const questionNotSelected = selectedQuestions.filter(selectedQuestion => selectedQuestion.id === question.id).length === 0;

                    if (questionNotSelected && !!question.selected) {
                        setSelectedQuestions(oldSelectedQuestions => ([...oldSelectedQuestions, question]));
                    } else {
                        const questionsToRemove = selectedQuestions.filter(selectedQuestion => selectedQuestion.id === question.id && !!!question.selected);

                        questionsToRemove.forEach(item => {
                            const clonedSelectedQuestions = JSON.parse(JSON.stringify(selectedQuestions));
                            const position = getPositionOf(clonedSelectedQuestions, item);

                            if (position !== -1) {
                                clonedSelectedQuestions.splice(position, 1);
                                setSelectedQuestions([...clonedSelectedQuestions]);
                            }
                        });
                    }
                });
            });
        } else {
            questionsOrSubArea.forEach(question => {
                const questionNotSelected = selectedQuestions.filter(selectedQuestion => selectedQuestion.id === question.id).length === 0;

                if (questionNotSelected && !!question.selected) {
                    setSelectedQuestions(oldSelectedQuestions => ([...oldSelectedQuestions, question]));
                } else {
                    const questionsToRemove = selectedQuestions.filter(selectedQuestion => selectedQuestion.id === question.id && !!!question.selected);

                    questionsToRemove.forEach(item => {
                        const clonedSelectedQuestions = JSON.parse(JSON.stringify(selectedQuestions));
                        const position = getPositionOf(clonedSelectedQuestions, item);

                        if (position !== -1) {
                            clonedSelectedQuestions.splice(position, 1);
                            setSelectedQuestions([...clonedSelectedQuestions]);
                        }
                    });
                }
            });
        }
    }

    const handleSubmit = async () => {
        if (hasNoErrors()) {
            const [stageId] = pathname.split('/').slice(-2);
            const [area] = pathname.split('/').slice(-1);
            let answers = {};

            selectedQuestions.forEach((question, index) => {
                answers = {
                    ...answers,
                    [`answer${index + 1}`]: {
                        id: question.id,
                        text: question.text
                    }
                }
            });

            setLoadingSubmit(true);

            const response = await FormAPI.sendAnswers(stageId, area, answers);

            if (response.status === 200) {
                setLoadingSubmit(false);
                Notification.show('success', 'Formulário enviado com sucesso!');
                history.goBack();
            } else {
                Notification.show('error', response.error);
            }
        } else {
            handleErrorNotification(Object.values(errors));
        }
    }

    const handleErrorNotification = (errorsValues) => {
        if (errorsValues.length > 0) {
            Notification.show('error', 'Selecione todos os campos obrigatórios!');
        }
    }

    const getPositionOf = (questions, question) => {
        let position = -1;

        questions.forEach((item, index) => {
            if (item.id === question.id) position = index;
        });

        return position;
    }

    const renderQuestions = (content) => {
        if (Array.isArray(content)) {
            return content;
        } else {
            const subAreasEntries = Object.entries(content);

            const subAreas = subAreasEntries.map(entry => {
                const name = entry[0].replace('subarea_', '').replaceAll('_', ' ');
                entry[0] = name.replace(name.charAt(0), name.charAt(0).toLocaleUpperCase());

                return entry;
            });

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
                <button className="back-container" onClick={() => history.goBack()}>
                    <IoReturnUpBackOutline />
                    <span>Voltar para o formulário</span>
                </button>

                <div className="default-box select-message">
                    <p>Marque os elementos visando {stageName === 'Reconhecimento' ? 'o' : 'a'}
                        <strong> {String(stageName).toLowerCase()} de desenvolvedores</strong></p>
                </div>

                {
                    loading ? (
                        <div style={{ marginTop: 60 }}>
                            <ReactLoading type="spokes" color="#1890FF" height={50} width={50} />
                        </div>
                    ) :
                        (
                            <>
                                {data && Object.values(data.content).map(item => (
                                    <FormBox
                                        key={item.id}
                                        title={item.name}
                                        questions={renderQuestions(item.content)}
                                        handleErrors={error => handleErrors(error)}
                                        handleSelectedQuestions={(questionsOrSubArea, hasSubArea) => handleSelectedQuestions(questionsOrSubArea, hasSubArea)}
                                    />
                                ))}

                                <button type="button" onClick={() => handleSubmit()}>
                                    {loading ? (
                                        <ReactLoading type="spokes" color="#ffffff" height={20} width={20} />
                                    ) : 'Submter formulário'}
                                </button>
                            </>
                        )
                }
            </Container>
            <Footer />
        </>
    );
})

export default Form;