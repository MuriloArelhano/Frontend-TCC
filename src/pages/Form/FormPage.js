import React, { memo, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useLocation, useHistory } from 'react-router-dom';
// icons
import { IoReturnUpBackOutline } from 'react-icons/io5'
// components
import { Navbar, Footer, FormBox } from '../../components';
// api
import StageAPI from '../../api/Stage';
// styles
import { Container } from './styles';
// notification
import Notification from '../../notification';

const Form = memo(() => {
    const location = useLocation();
    const history = useHistory();

    const [errors, setErrors] = useState({});
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [data, setData] = useState(null);
    const [areaIsValid, setSetAreaIsValid] = useState(false);
    const [stageName, setStageName] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const { pathname, state } = location;
        const [stageId] = pathname.split('/').slice(-2);
        const [area] = pathname.split('/').slice(-1);

        getFocusAreaFromAPI(stageId, area);

        handleArea(area);
        setStageName(state.stage);
    }, [location]);

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

    const handleSubmit = () => {
        if (hasNoErrors()) {
            // TODO: criar lógica do envio do formulário
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

                                <button type="button" onClick={() => handleSubmit()}>Submeter formulário</button>
                            </>
                        )
                }
            </Container>
            <Footer />
        </>
    );
})

export default Form;