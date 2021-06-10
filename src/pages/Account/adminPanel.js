import React, { memo, useCallback } from 'react';
import { useState } from 'react';
// icons
import { FiDownload } from 'react-icons/fi';
// components
import { Tabs } from '../../components';
// styles
import { AccountInfoArea, AccountTable } from './styles';

const AdminPanel = ({ users, handleUserAccess }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleStatusColor = useCallback((status) => {
        const classes = {
            'ATIVO': 'user-active',
            'PENDENTE': 'user-pendent',
            'SUSPENSO': 'user-suspend',
        }

        return classes[status];
    }, []);

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

    const renderFormAnswers = () => {
        return (
            <AccountTable>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Estágio</th>
                        <th>Área de foco</th>
                        <th style={{ textAlign: 'center' }}>Baixar respostas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>john.doe@gmail.com</td>
                        <td>Sensibilização</td>
                        <td>Plataforma e Produtos</td>
                        <td style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                className="btn-download"
                                onClick={() => {}}
                            >
                                Baixar CSV <FiDownload />
                            </button>
                        </td>
                    </tr>
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
