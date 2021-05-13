import React from "react";
import { Navbar, Footer } from "../../components";
import {
  Container,
  Wrapper,
  Title,
  PersonalInfoWrapper,
  Form
} from "./style"

const Signup = () => {
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
            <Form>
              <label
                name="user[login]"
                autoCapitalize="off"
                autoFocus="autofocus"
                required="required"
                htmlFor="user_login"
              >Nome de usuário</label>
              <input
                type="text"
                name="user[login]"
                id="user_login"
                autoFocus="autofocus"
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
              />
              <label
                type="text"
                name="user[email]"
                htmlFor="user_email"
                required = "required"
                autoCapitalize="off"
              >Endereço de email</label>
              <input
                type="email"
                name="user[email]"
                id="user_email"
                required = "required"
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"

              />
              <label
                name="user[password]"
                autoComplete="new-password"
                required="required"
                htmlFor="user_password"
              >Senha</label>
              <input
                className="inputPassword"
                type="password"
                name="user[password]"
                id="user_password"
                autoFocus="autofocus"
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
              />

              <span className="passwordWarning">
                A senha<span> precisa ter 15 caracteres</span> OU pelo menos 8 caracteres incluindo um número e uma letra
                maiúscula.
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
