import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// context
import { Context } from '../../contexts/global';
// auth api
import AuthAPI from '../../api/Auth';
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

    const [menuItemActive, setMenuItemActive] = React.useState(0);

    const renderInfo = () => {
        if (menuItemActive === 0) {
            return <Profile />;
        } else if (menuItemActive === 1) {
            return <ChangePassword />
        } else {
            return <AdminPanel />
        }
    }

    const logout = () => {
        AuthAPI.signOut();
        context.removeUser();
        history.push('/');
    }

    return (
        <>
            <Navbar position/>

            <AccountContainer>
                <AccountContent>
                    <AccountContentMenu>
                        <ul>
                            <li
                                className={`${menuItemActive === 0 ? 'active' : ''}`}
                                onClick={() => setMenuItemActive(0)}
                            >
                                Meu perfil
                                <FaRegUser />
                            </li>
                            <li
                                className={`${menuItemActive === 1 ? 'active' : ''}`}
                                onClick={() => setMenuItemActive(1)}
                            >
                                Alterar senha
                                <BsShieldLock />
                            </li>
                            {context.userIsAdmin && (
                                <li
                                    className={`${menuItemActive === 2 ? 'active' : ''}`}
                                    onClick={() => setMenuItemActive(2)}
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
