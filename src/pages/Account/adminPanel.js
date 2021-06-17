import React, { memo, useCallback, useEffect, useState, useMemo } from 'react';
import { CSVLink } from 'react-csv';
import ReactLoading from 'react-loading';
// icons
import { FiDownload } from 'react-icons/fi';
// components
import { Tabs, CsvPopup, Table } from '../../components';
// styles
import { AccountInfoArea } from './styles';

const csvHeaders = [
    { label: 'Usuário', key: 'answer.userEmail' },
    { label: 'Estágio', key: 'answer.stage' },
    { label: 'Área de foco', key: 'answer.focusArea' },
    { label: 'Identificador', key: 'answer.id' },
    { label: 'Resposta', key: 'answer.text' },
];

const AdminPanel = ({ users, formAnswers, handleUserAccess }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [formAnswersLoading, setFormAnswersLoading] = useState(true);
    const [usersDataLoading, setUsersDataLoading] = useState(true);

    useEffect(() => {
        if (formAnswers.length > 0) {
            setFormAnswersLoading(false);
        }
    }, [formAnswers]);

    useEffect(() => {
        if (users.length > 0) {
            setUsersDataLoading(false);
        }
    }, [users]);

    const userData = useMemo(() => users, [users]);

    const userColumns = React.useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'name',
            },
            {
                Header: 'E-mail',
                accessor: 'email',
            },
            {
                Header: 'Data de nascimento',
                accessor: 'birthDate',
            },
            {
                Header: 'Status',
                accessor: 'status',
            }
        ],
        []
    );

    const answersData = useMemo(() => formAnswers, [formAnswers]);

    const answersColumns = React.useMemo(
        () => [
            {
                Header: 'Usuário',
                accessor: 'userEmail',
            },
            {
                Header: 'Estágio',
                accessor: 'stageName'
            },
            {
                Header: 'Área de foco',
                accessor: 'focus_area',
            },
            {
                Header: 'N° de respostas',
                accessor: 'answersAmount',
            },
            {
                Header: 'Respondido em',
                accessor: 'updatedAt',
            }
        ],
        []
    );

    const renderUserActions = (userStatus, userEmail) => {
        return (
            <>
                {userStatus === 'ATIVO' && (
                    <button
                        className="btn-suspend"
                        onClick={() => handleUserAccess('suspend', userEmail)}
                    >
                        Suspender
                    </button>
                )}
                {userStatus === 'SUSPENSO' && (
                    <button
                        className="btn-active"
                        onClick={() => handleUserAccess('approve', userEmail)}
                    >
                        Ativar
                    </button>
                )}
                {userStatus === 'PENDENTE' && (
                    <>
                        <button
                            className="btn-active"
                            onClick={() => handleUserAccess('approve', userEmail)}
                        >
                            Ativar
                        </button>
                        <button
                            className="btn-suspend"
                            onClick={() => handleUserAccess('suspend', userEmail)}
                        >
                            Suspender
                        </button>
                    </>
                )}
            </>
        );
    }

    const handleStatusColor = useCallback((status) => {
        const classes = {
            'ATIVO': 'user-active',
            'PENDENTE': 'user-pendent',
            'SUSPENSO': 'user-suspend',
        }

        return classes[status];
    }, []);

    const renderUserTable = () => {
        if (usersDataLoading) {
            return (
                <div style={{ marginTop: 32 }}>
                    <ReactLoading type="spokes" color="#1890FF" height={32} width={32} />
                </div>
            );
        }

        return (
            <Table
                data={userData}
                columns={userColumns}
                actions={renderUserActions}
                statusColor={handleStatusColor}
                type="user"
            />
        )
    }

    const getAnswers = (userEmail, stageName, focus_area) => {
        let answers = [];
        formAnswers.forEach(item => {
            if (item.userEmail === userEmail && item.stageName === stageName && item.focus_area === focus_area) {
                answers = item.answers;
            }
        });
        return answers;
    }

    const renderAnswersAction = (formAnswer) => {
        return (
            <>
                {formAnswer.answersAmount === 1 ? (
                    <CSVLink
                        data={
                            handleSingleCSVData(
                                getAnswers(formAnswer.userEmail, formAnswer.stageName, formAnswer.focus_area),
                                formAnswer.stageName,
                                formAnswer.focus_area,
                                formAnswer.userEmail
                            )
                        }
                        headers={csvHeaders}
                        filename={`Respostas-${formAnswer.stageName}-${formAnswer.focus_area}.csv`}
                        className="btn-download"
                        target="_blank"
                    >
                        Baixar CSV <FiDownload />
                    </CSVLink>
                ) : (
                    <CsvPopup
                        content={
                            renderCsvPopupContent(
                                getAnswers(formAnswer.userEmail, formAnswer.stageName, formAnswer.focus_area),
                                formAnswer.stageName,
                                formAnswer.focus_area,
                                formAnswer.userEmail
                            )
                        }
                    />
                )}
            </>
        );
    }

    const handleSingleCSVData = (answers, stage, focusArea, userEmail) => {
        let formattedAnswers = Object.values(answers[0]);
        formattedAnswers = formattedAnswers.map(answer => {
            return {
                answer: {
                    userEmail,
                    stage,
                    focusArea,
                    id: answer.id,
                    text: answer.text
                }
            }
        });

        return formattedAnswers;
    }

    const renderCsvPopupContent = (answers, stageName, focusArea, userEmail) => {
        return (
            <>
                {answers.map((answer, index) => (
                    <CSVLink
                        key={`${answer.id}-${index}`}
                        data={
                            handleSingleCSVData(
                                [answers[index]],
                                stageName,
                                focusArea,
                                userEmail
                            )
                        }
                        headers={csvHeaders}
                        filename={`Respostas-${stageName}-${focusArea}-${index + 1}.csv`}
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 8,
                            color: '#ffffff',
                            margin: '16px 0'
                        }}
                        target="_blank"
                    >
                        {`Baixar resposta ${index + 1}`} <FiDownload />
                    </CSVLink>
                ))}
            </>
        );
    }

    const renderFormAnswers = () => {
        if (formAnswersLoading) {
            return (
                <div style={{ marginTop: 32 }}>
                    <ReactLoading type="spokes" color="#1890FF" height={32} width={32} />
                </div>
            );
        }

        return (
            <Table
                data={answersData}
                columns={answersColumns}
                actions={renderAnswersAction}
                statusColor={handleStatusColor}
                type="answer"
            />
        )
    }

    return (
        <AccountInfoArea>
            <h1>Painel administrativo</h1>

            <Tabs
                labels={[
                    { name: 'Usuários', action: (tab) => setCurrentTab(tab) },
                    { name: 'Respostas do Formulário', action: (tab) => setCurrentTab(tab) }
                ]}
                content={[renderUserTable, renderFormAnswers]}
                currentTab={currentTab}
            />
        </AccountInfoArea>
    );
}

export default memo(AdminPanel);
