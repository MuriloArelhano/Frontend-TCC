import React from 'react';
// styles
import { AccountInfoArea, AccountTable } from './styles';

const AdminPanel = () => {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                        <td>13/09/1990</td>
                        <td className="user-active">Ativo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                        <td>13/09/1990</td>
                        <td className="user-pendent">Pendente</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                        <td>13/09/1990</td>
                        <td className="user-blocked">Bloqueado</td>
                    </tr>
                </tbody>
            </AccountTable>
        </AccountInfoArea>
    );
}

export default AdminPanel;
