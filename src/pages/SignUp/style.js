import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  margin: 40px 0;

  * {
    font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;
    line-height: 21px;
  }

  a {
    color: #0366d6;
    text-decoration: none;
  }

`
export const Wrapper = styled.div`
  width: 620px;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

export const Title = styled.div`
  text-align: center;

  span {
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 14px;
    color: #6a737d;
    font-weight: 400;
    margin-bottom: 16px;
    display: block;
  }

  h1 {
    font-size: 48px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: 24292e;
    font-weight: 500;
    line-height: 48px;
  }
`
export const PersonalInfoWrapper = styled.div`
  width: 100%;
  // border: 1px solid red;
  margin-top: 40px;
  padding: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: black;
    font-weight: 600;
    text-align: left;
  }

  input {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    background-color: #fafbfc;
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

  span.passwordWarning {
    font-size: 12px;
    line-height: 18px;
    color: #586069;
    font-weight: 400;
    margin-bottom: 8px;

    span {
      color: #22863a;
    }
  }

  input.inputPassword {
    margin-bottom: 5px;
  }

  button {
    display: flex;
    justify-content: center;
    padding: 8px 24px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    user-select: none;
    background-color: #3076df;
    border: 1px solid #3076df;
    border-radius: 6px;
    transition: filter linear .2s;
    appearance: none;
    margin-top: 40px;
    cursor: pointer;

    &:hover {
      filter: brightness(90%);
    }
  }
`