import React, { memo } from 'react';
// styles
import { AccountInfoArea, AccountForm, InputControl } from './styles';

const ChangePassword = () => {
    return (
        <AccountInfoArea>
            <h1>Alterar senha</h1>

            <AccountForm maxWidth={25} onSubmit={e => e.preventDefault()} autoComplete="off">
                <InputControl>
                    <label htmlFor="current-password">Senha atual</label>
                    <input type="password" id="current-password" />
                </InputControl>

                <InputControl>
                    <label htmlFor="new-password">Nova senha</label>
                    <input type="password" id="new-password" />
                </InputControl>

                <InputControl>
                    <label htmlFor="confirm-password">Confirme a nova senha</label>
                    <input type="password" id="confirm-password" />
                </InputControl>

                <button type="submit">Alterar</button>
            </AccountForm>
        </AccountInfoArea>
    );
}

export default memo(ChangePassword);
