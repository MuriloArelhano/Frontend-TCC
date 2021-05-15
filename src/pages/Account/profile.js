import React, { useState, useContext, useEffect, memo, useCallback } from 'react';
// context
import { Context } from '../../contexts/global';
// styles
import { AccountInfoArea, AccountForm, InLine, InputControl, Error } from './styles';

const Profile = () => {
    const context = useContext(Context);

    const [accountData, setAccountData] = useState({
        name: '',
        email: '',
        birthDate: ''
    });

    const [accountError] = useState(null);

    useEffect(() => {
        if (context.user) {
            setAccountData({
                name: context.user.name,
                email: context.user.email
            });
        }
    }, [context.user]);

    const handleInputChange = useCallback((inputName, text) => {
        const clonedAccountData = {
            ...accountData,
            [inputName]: text,
        };

        setAccountData(clonedAccountData);
    }, [accountData]);

    const handleSave = useCallback(async (event) => {
        event.preventDefault();

        const requiredFields = {
            name: accountData.name,
            email: accountData.email
        };

        let hasError = false;

        Object.keys(requiredFields).forEach((key) => {
            if (requiredFields[key] === '') {
                hasError = true;
            }
        });

        if (!hasError) {
            // TODO
        }
    }, [accountData]);

    return (
        <AccountInfoArea>
            <h1>Meu perfil</h1>

            <AccountForm onSubmit={handleSave} autoComplete="off">
                <InLine>
                    <InputControl>
                        <label htmlFor="name">Nome completo</label>
                        <input
                            type="text"
                            id="name"
                            value={accountData.name}
                            onChange={(event) => handleInputChange('name', event.target.value)}
                        />
                    </InputControl>

                    <InputControl marginLeft={16}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={accountData.email}
                            onChange={(event) => handleInputChange('email', event.target.value)}
                        />
                    </InputControl>
                </InLine>

                <InputControl>
                    <label htmlFor="birth_date">Data de nascimento</label>
                    <input
                        type="date"
                        id="birth_date"
                        value={accountData.birthDate}
                        onChange={(event) => handleInputChange('birthDate', event.target.value)}
                        style={{ width: '30%' }}
                    />
                </InputControl>

                <button type="submit">Salvar</button>
            </AccountForm>
            {accountError && (
                <Error>
                    <p>{accountError.message}</p>
                </Error>
            )}
        </AccountInfoArea>
    );
}

export default memo(Profile);
