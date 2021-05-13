import styled from "styled-components";
import { FaMagento } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  * {
    font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;
  }

  a {
    color: #0366d6;
    text-decoration: none;
  }

  button {
    color: #0366d6;
  }
`
export const Wrapper = styled.div`
  width: 310px;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`
export const NavIcon = styled(FaMagento)`
  margin-bottom: 15px;
`;

export const Logo = styled.div`
  font-size: 3rem;
`

export const Title = styled.div`
  
  h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
    color: #24292e;
  }
`
export const PersonalInfoWrapper = styled.div`
  border-radius: 5px;
  background-color: #f6f8fa;
  border: 1px solid #eaecef;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: black;
    font-weight: 600;
    margin-bottom: 5px;
    text-align: left;
  }

  input {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    background-color: #fff;
    border-radius: 6px;
    outline: none;
    border: 1px solid #e1e4e8;
    vertical-align: middle;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  input.submit {
    background-color: #2EA44F;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  input:focus {
    border-color: #0366d6;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }

  a.label-link {
    float: right;
    font-size: 12px;
  }
`

export const Error = styled.div`
  border-radius: 5px;
  background-color: #ffcdd2;
  border: 1px solid #b71c1c;
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
`

export const NewAccount = styled.div`
  width: 100%;
  padding: 15px 20px;
  text-align: center;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  font-size: 14px;
  line-height: 21px;

  button {
    font-size: 16px;
  }

  button:hover {
    text-decoration: underline;
  }
`
export const Footer = styled.div`
  width: 100%;
  margin-top: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 15px;
  }

  button {
    font-size: 12px;
  }

  button:hover {
    text-decoration: underline;
  }

  button.lastChild {
    color: black;
  }

  button.lastChild:hover {
    color: #0366d6;
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  &:hover {

  }

  &.label-link{
    float: right;
    font-size: 12px;
  }
`