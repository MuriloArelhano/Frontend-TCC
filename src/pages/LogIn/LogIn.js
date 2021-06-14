import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading'; 
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
// api
import { AuthAPI } from "../../api";
// context
import { Context } from '../../contexts/global';
// notification
import Notification from '../../notification';

const Login = () => {
  const context = useContext(Context);

  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const response = await AuthAPI.signIn(authData);
      setLoading(false);
      
      if (response.status === 200) {
        setAuthData({ email: '', password: '' });
        context.setUser(response.data.user);
        context.setUserIsLogged(true);
        
        Notification.show('success', `Bem vindo de volta ${response.data.user.name}`);
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
            <h1>Log in em Go DevRel</h1>
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
              <label htmlFor="password">Senha</label>
              <input 
                type="password" 
                name="password" 
                id="password"
                required
                value={authData.password}
                onChange={(event) => handleInputChange('password', event.target.value)}
              />
              <Button className="submit" type="submit">
                {loading ? (
                  <ReactLoading type="spokes" color="#ffffff" height={20} width={20} />
                ) : 'Entrar'}
              </Button>
            </Form>
          </PersonalInfoWrapper>
          <NewAccount>
            <p>
              Novo em Go DevRel?{" "}
              <Link to="/cadastro"><Button>Criar uma conta</Button></Link>
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
                <Button className="lastChild">Contactar Go DevRel</Button>
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
