import React, { memo, useCallback, useState } from 'react';
import { CSVLink } from 'react-csv';
// icons
import { FiDownload } from 'react-icons/fi';
// components
import { Tabs } from '../../components';
// styles
import { AccountInfoArea, AccountTable } from './styles';

const AdminPanel = ({ users, formAnswers, handleUserAccess }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleStatusColor = useCallback((status) => {
        const classes = {
            'ATIVO': 'user-active',
            'PENDENTE': 'user-pendent',
            'SUSPENSO': 'user-suspend',
        }

        return classes[status];
    }, []);

    const csvHeaders = [
        { label: 'Estágio', key: 'answer.stage' },
        { label: 'Área de foco', key: 'answer.focusArea' },
        { label: 'Identificador', key: 'answer.id' },
        { label: 'Resposta', key: 'answer.text' },
    ];

    const renderUserTable = () => {
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

    const handleCSVData = (answers, stage, focusArea) => {
        if (answers.length === 1) {
            let formattedAnswers = Object.values(answers[0]);
            formattedAnswers = formattedAnswers.map(answer => {
                return {
                    answer: {
                        stage,
                        focusArea,
                        id: answer.id,
                        text: answer.text
                    }
                }
            });
            
            return formattedAnswers;
        } else {
            // TODO: lidar com várias respostas
            const data = [
                {
                    answer: {
                        stage,
                        focusArea,
                        id: 'some_id',
                        text: 'some_answer',
                    }
                },
            ];

            return data;
        }
    }

    const renderFormAnswers = () => {
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
                                <CSVLink
                                    data={handleCSVData(formAnswer.answers, formAnswer.stageName, formAnswer.focus_area)}
                                    headers={csvHeaders}
                                    filename={`${formAnswer.stageName}-${formAnswer.focus_area}-respostas.csv`}
                                    className="btn-download"
                                    target="_blank"
                                >
                                    Baixar CSV <FiDownload />
                                </CSVLink>
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
