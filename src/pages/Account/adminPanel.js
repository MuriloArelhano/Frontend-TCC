import React, { memo, useCallback, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import ReactLoading from 'react-loading';
// icons
import { FiDownload } from 'react-icons/fi';
// components
import { Tabs, CsvPopup } from '../../components';
// styles
import { AccountInfoArea, AccountTable } from './styles';

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
            <AccountTable>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Data de nascimento</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.birthDate}</td>
                            <td className={handleStatusColor(user.status)}>{user.status}</td>
                            <td>
                                {user.status === 'ATIVO' && (
                                    <button
                                        className="btn-suspend"
                                        onClick={() => handleUserAccess('suspend', user.email)}
                                    >
                                        Suspender
                                    </button>
                                )}
                                {user.status === 'SUSPENSO' && (
                                    <button
                                        className="btn-active"
                                        onClick={() => handleUserAccess('approve', user.email)}
                                    >
                                        Ativar
                                    </button>
                                )}
                                {user.status === 'PENDENTE' && (
                                    <>
                                        <button
                                            className="btn-active"
                                            onClick={() => handleUserAccess('approve', user.email)}
                                        >
                                            Ativar
                                        </button>
                                        <button
                                            className="btn-suspend"
                                            onClick={() => handleUserAccess('suspend', user.email)}
                                        >
                                            Suspender
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </AccountTable>
        )
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
                        key={answer.id}
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
            <AccountTable>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Estágio</th>
                        <th>Área de foco</th>
                        <th>N° de respostas</th>
                        <th>Respondido em</th>
                        <th>Baixar respostas</th>
                    </tr>
                </thead>
                <tbody>
                    {formAnswers.map(formAnswer => (
                        <tr>
                            <td>{formAnswer.userEmail}</td>
                            <td>{formAnswer.stageName}</td>
                            <td>{formAnswer.focus_area}</td>
                            <td>{formAnswer.answersAmount}</td>
                            <td>{new Date(formAnswer.updatedAt).toLocaleDateString()}</td>
                            <td>
                                {formAnswer.answersAmount === 1 ? (
                                    <CSVLink
                                        data={
                                            handleSingleCSVData(
                                                formAnswer.answers,
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
                                                formAnswer.answers,
                                                formAnswer.stageName,
                                                formAnswer.focus_area,
                                                formAnswer.userEmail
                                            )
                                        }
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </AccountTable>
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
