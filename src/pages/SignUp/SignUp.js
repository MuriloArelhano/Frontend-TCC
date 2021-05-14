import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Navbar, Footer, PasswordStrength } from "../../components";
// notification
import Notification from '../../notification';
import {
  Container,
  Wrapper,
  Title,
  PersonalInfoWrapper,
  Form
} from "./style";
// auth api
import AuthAPI from '../../api/Auth';

const Signup = () => {
  const history = useHistory();

  const [authData, setAuthData] = useState({
    name: '',
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
      name: authData.name,
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
      const response = await AuthAPI.signUp(authData);

      if (response === 200) {
        setAuthData({ name: '', email: '', password: '' });

        setTimeout(() => {
          history.push('/');
          Notification.show('success', 'Cadastro realizado com sucesso, aguarde a aprovação de um moderador');
        }, 500);
      } else {
        Notification.show('error', response.error);
      }
    }
  };
  
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>
            <span>Faça parte do DevGo</span>
            <h1>Crie sua conta</h1>
          </Title>
          <PersonalInfoWrapper>
            <Form onSubmit={handleSubmit}>
              <label
                name="user[login]"
                autoCapitalize="off"
                htmlFor="user_login"
              >Nome de usuário</label>
              <input
                type="text"
                name="user[login]"
                id="user_login"
                autoFocus
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
                value={authData.name}
                onChange={(event) => handleInputChange('name', event.target.value)}
              />
              <label
                type="text"
                name="user[email]"
                htmlFor="user_email"
                autoCapitalize="off"
              >Endereço de email</label>
              <input
                type="email"
                name="user[email]"
                id="user_email"
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
                value={authData.email}
                onChange={(event) => handleInputChange('email', event.target.value)}
              />
              <label
                name="user[password]"
                autoComplete="new-password"
                htmlFor="user_password"
              >Senha</label>
              <input
                className="inputPassword"
                type="password"
                name="user[password]"
                id="user_password"
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
                value={authData.password}
                onChange={(event) => handleInputChange('password', event.target.value)}
              />

              <PasswordStrength password={authData.password} />

              <span className="passwordWarning">
                A senha<span> precisa ter pelo menos 6 caracteres</span> e recomendamos utilizar letras minúsculas e maiúsculas,
                números e caracteres especiais.
              </span>

              <button>
                Criar conta
              </button>
            </Form>
          </PersonalInfoWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
