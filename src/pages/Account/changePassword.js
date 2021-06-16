import React, { memo, useState, useCallback } from 'react';
import ReactLoading from 'react-loading';
// api
import { UserAPI } from '../../api';
// styles
import { AccountInfoArea, AccountForm, InputControl, Error } from './styles';
// notification
import Notification from '../../notification';

const ChangePassword = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
    });
    const [updateLoading, setUpdateLoading] = useState(false);
    const [passwordError] = useState(null);

    const handleInputChange = useCallback((inputName, text) => {
        const clonedPasswordData = {
            ...passwordData,
            [inputName]: text,
        };

        setPasswordData(clonedPasswordData);
    }, [passwordData]);

    const clearData = () => {
        setPasswordData({
            currentPassword: '',
            newPassword: '',
            newPasswordConfirmation: ''
        });
    }

    const handleSave = useCallback(async (event) => {
        event.preventDefault();

        const requiredFields = {
            currentPassword: passwordData.currentPassword,
            newPassword: passwordData.newPassword,
            newPasswordConfirmation: passwordData.newPasswordConfirmation
        };

        let hasError = false;

        Object.keys(requiredFields).forEach((key) => {
            if (requiredFields[key] === '') {
                hasError = true;
            }
        });

        if (!hasError) {
            setUpdateLoading(true);
            const response = await UserAPI.changePassword(passwordData);

            if (response.status === 200) {
                setUpdateLoading(false);
                clearData();
                Notification.show('success', response.data.message);
            } else {
                setUpdateLoading(false);
                Notification.show('error', response.error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passwordData]);

    return (
        <AccountInfoArea>
            <h1>Alterar senha</h1>

            <AccountForm maxWidth={25} onSubmit={handleSave} autoComplete="off">
                <InputControl>
                    <label htmlFor="current-password">Senha atual</label>
                    <input
                        type="password"
                        id="current-password"
                        value={passwordData.currentPassword}
                        onChange={(event) => handleInputChange('currentPassword', event.target.value)}
                        required
                    />
                </InputControl>

                <InputControl>
                    <label htmlFor="new-password">Nova senha</label>
                    <input
                        type="password"
                        id="new-password"
                        value={passwordData.newPassword}
                        onChange={(event) => handleInputChange('newPassword', event.target.value)}
                        required
                    />
                </InputControl>

                <InputControl>
                    <label htmlFor="confirm-password">Confirme a nova senha</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={passwordData.newPasswordConfirmation}
                        onChange={(event) => handleInputChange('newPasswordConfirmation', event.target.value)}
                        required
                    />
                </InputControl>

                <button type="submit">
                    {updateLoading ? (
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ReactLoading type="spokes" color="#ffffff" height={20} width={20} />
                        </div>
                    ) : 'Alterar'}
                </button>
            </AccountForm>
            {passwordError && (
                <Error>
                    <p>{passwordError.message}</p>
                </Error>
            )}
        </AccountInfoArea>
    );
}

export default memo(ChangePassword);
