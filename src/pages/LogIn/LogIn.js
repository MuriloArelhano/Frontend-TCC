import React from "react";
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
} from "./style"

const Login = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <NavIcon />
          </Logo>
          <Title>
            <h1>Log in em DevGo</h1>
          </Title>
          <PersonalInfoWrapper>
            <Form>
              <label htmlFor="login_field">Usuário ou endereço de email</label>
              <input 
                type="text" 
                name="login" 
                id="login_field" 
                autoFocus="autofocus"
                autoCapitalize="off"
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
              <Button>Criar uma conta</Button>
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
