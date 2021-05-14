import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// context
import { Context } from '../../contexts/global';
// auth api
import { AuthAPI, UserAPI } from '../../api';
// components
import { Navbar } from '../../components';
import Profile from './profile';
import ChangePassword from './changePassword';
import AdminPanel from './adminPanel';
// styles
import {
    AccountContainer,
    AccountContent,
    AccountContentMenu,
    AccountContentInfo
} from './styles';
// icons
import { MdPowerSettingsNew } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { BsShieldLock } from 'react-icons/bs';
import { RiAdminLine } from 'react-icons/ri';

const Account = () => {
    const context = useContext(Context);
    const history = useHistory();
    const location = useLocation();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsersInfo();
    });

    const loadUsersInfo = useCallback(async () => {
        const usersResponse = await UserAPI.getUsers('onlyBase');

        if (usersResponse && typeof usersResponse === 'object') {
            setUsers(usersResponse.map(user => ({
                ...user,
                birthDate: user.birthDate ? UserAPI.formatBirthDate(user.birthDate) : '-'
            })));
        }
    }, []);

    const handleUserAccess = useCallback(async (type, userEmail) => {
        const response = await UserAPI.manageUserAccess(type, userEmail);

        if (response.status === 200) loadUsersInfo();
    }, [loadUsersInfo]);

    const renderInfo = useCallback(() => {
        if (location.pathname === '/account' || location.pathname === '/account/') {
            return <Profile />;
        } else if (location.pathname === '/account/change-password') {
            return <ChangePassword />
        } else if (location.pathname === '/account/admin') {
            return <AdminPanel users={users} handleUserAccess={handleUserAccess} />
        }
    }, [location, users, handleUserAccess]);

    const logout = useCallback(() => {
        AuthAPI.signOut();
        context.removeUser();
        history.push('/');
    }, [context, history]);

    const navigateTo = useCallback((route) => {
        history.push(`/account${route}`);
    }, [history]);

    const isActive = useCallback((route) => {
        if (typeof route === 'object')
            return route.filter(item => location.pathname === `/account${item}`).length > 0;
        else
            return location.pathname === `/account${route}`;
    }, [location]);

    return (
        <>
            <Navbar position/>

            <AccountContainer>
                <AccountContent>
                    <AccountContentMenu>
                        <ul>
                            <li
                                className={`${isActive(['', '/']) ? 'active' : ''}`}
                                onClick={() => navigateTo('')}
                            >
                                Meu perfil
                                <FaRegUser />
                            </li>
                            <li
                                className={`${isActive('/change-password') ? 'active' : ''}`}
                                onClick={() => navigateTo('/change-password')}
                            >
                                Alterar senha
                                <BsShieldLock />
                            </li>
                            {context.userIsAdmin && (
                                <li
                                    className={`${isActive('/admin') ? 'active' : ''}`}
                                    onClick={() => navigateTo('/admin')}
                                >
                                    Painel administrativo
                                    <RiAdminLine />
                                </li>
                            )}
                            <li onClick={() => logout()}>
                                Sair
                                <MdPowerSettingsNew />
                            </li>
                        </ul>
                    </AccountContentMenu>
                    <AccountContentInfo>
                        {renderInfo()}
                    </AccountContentInfo>
                </AccountContent>
            </AccountContainer>
        </>
    );
}

export default Account;
