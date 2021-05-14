import React, { useState, useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import { 
  Container, 
  Wrapper, 
  NavIcon,
  Logo,
  Title, 
  PersonalInfoWrapper, 
  NewAccount, 
  Footer,
  Form,
  Button
} from "./style";
// auth api
import AuthAPI from '../../api/Auth';
// context
import { Context } from '../../contexts/global';
// notification
import Notification from '../../notification';

const Login = () => {
  const context = useContext(Context);
  const history = useHistory();

  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (inputName, text) => {
    const clonedAuthData = {
      ...authData,
      [inputName]: text,
    };

    setAuthData(clonedAuthData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requiredFields = {
      email: authData.email,
      password: authData.password,
    };

    let hasError = false;

    Object.keys(requiredFields).forEach((key) => {
      if (requiredFields[key] === '') {
        hasError = true;
      }
    });

    if (!hasError) {
      const response = await AuthAPI.signIn(authData);
      
      if (response.status === 200) {
        setAuthData({ email: '', password: '' });
        context.setUser(response.data.user);
        
        Notification.show('success', `Bem vindo de volta ${response.data.user.name}`);

        setTimeout(() => {
          history.push('/');
        }, 500);
      } else {
        Notification.show('error', response.error);
      }
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" title="Página inicial">
            <Logo>
              <NavIcon />
            </Logo>
          </Link>
          <Title>
            <h1>Log in em DevGo</h1>
          </Title>
          <PersonalInfoWrapper>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="login_field">Endereço de email</label>
              <input 
                type="email" 
                name="login" 
                id="login_field" 
                autoFocus
                required
                autoCapitalize="off"
                value={authData.email}
                onChange={(event) => handleInputChange('email', event.target.value)}
              />
              <label htmlFor="password">
                Senha
                <Button className="label-link">
                  Esqueceu a senha?
                </Button>
              </label>
              <input 
                type="password" 
                name="password" 
                id="password"
                required
                value={authData.password}
                onChange={(event) => handleInputChange('password', event.target.value)}
              />
              <input 
                className="submit" 
                type="submit" 
                name="commit" 
                value="Sign in"
              />
            </Form>
          </PersonalInfoWrapper>
          <NewAccount>
            <p>
              Novo em DevGo?{" "}
              <Link to="/sign-up"><Button>Criar uma conta</Button></Link>
              .
            </p>
          </NewAccount>
          <Footer>
            <ul>
              <li>
                <Button>Termos</Button>
              </li>
              <li>
                <Button>Privacidade</Button>
              </li>
              <li>
                <Button>Segurança</Button>
              </li>
              <li>
                <Button className="lastChild">Contactar Devgo</Button>
                {/* <a className="lastChild">Contactar DevGo</a> */}
              </li>
            </ul>
          </Footer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
