import React, { memo, useCallback } from 'react';
// styles
import { AccountInfoArea, AccountTable } from './styles';

const AdminPanel = ({ users, handleUserAccess }) => {

    const handleStatusColor = useCallback((status) => {
        const classes = {
            'ATIVO': 'user-active',
            'PENDENTE': 'user-pendent',
            'SUSPENSO': 'user-suspend',
        }

        return classes[status];
    }, []);

    return (
        <AccountInfoArea>
            <h1>Painel administrativo</h1>

            <h2>Usuários</h2>

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
        </AccountInfoArea>
    );
}

export default memo(AdminPanel);
