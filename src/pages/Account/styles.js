import styled from 'styled-components';

export const AccountContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    padding: 0 32px 32px;

    * {
        font-family: "Inconsolata", monospace;
    }
`;

export const AccountContent = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
`;

export const AccountContentMenu = styled.div`
    flex: 0.4;
    padding-right: 16px;

    > ul {
        list-style: none;

        > li {
            height: 48px;
            background-color: #FFFFFF;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;

            font-size: 1.2rem;
            font-weight: 500;
            color: #333333;

            cursor: pointer;
            transition: all linear 0.2s;

            > svg {
                font-size: 1.1rem;
            }

            &:last-child {
                color: #E13A0F;

                &:hover {
                    color: #E13A0F;
                }
            }

            &:hover {
                color: #1890ff;
            }
        }

        > li.active {
            border-right: 4px solid #1890ff;
            color: #1890ff;
            background-color: #e6f7ff;
        }

        > li + li {
            margin-top: 16px;
        }
    }
`;

export const AccountContentInfo = styled.div`
    flex: 1;
    padding-left: 16px;
    padding-bottom: 16px;
    margin-left: 32px;
`;

export const AccountInfoArea = styled.div`
    > h1 {
        font-size: 1.8rem;
        line-height: 1.8rem;
        font-weight: 500;
        color: #333333;
    }

    > h2 {
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: 500;
        color: #333333;
        margin-top: 32px;
    }
`;

export const AccountTable = styled.table`
    width: 100%;
    margin-top: 16px;
    border-spacing: 0;
    border-collapse: collapse;

    td, th {
        text-align: left;
        height: 40px;
        padding: 8px;
    }

    th {
        background-color: #e6f7ff;
        color: #1890ff;
    }

    tr {
        transition: background-color linear 0.2s;

        &:hover {
            background-color: #f0f0fa;
        }
    }

    .user-active {
        color: #2EA44F;
    }

    .user-pendent {
        color: #BCA50F;
    }

    .user-suspend {
        color: #b71c1c;
    }

    button {
        border: 0;
        background-color: transparent;
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
        outline: 0;

        font-size: 0.750rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        transition: all linear 0.2s;
    }

    button + button {
        margin-left: 16px;
    }

    .btn-active {
        border: 1px solid #2EA44F;
        color: #2EA44F;

        &:hover {
            background-color: #2EA44F;
            color: #ffffff;
        }
    }

    .btn-suspend {
        border: 1px solid #b71c1c;
        color: #b71c1c;

        &:hover {
            background-color: #b71c1c;
            color: #ffffff;
        }
    }
`;

export const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  max-width: ${(props) => props.maxWidth}vw;

  label {
    font-size: 14px;
    color: black;
    font-weight: 600;
    margin-bottom: 5px;
    text-align: left;
  }

  input, select {
    height: 40px;
    padding: 5px 12px;
    font-size: 1rem;
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

  select {
    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
    -moz-appearance: none; /* Remove estilo padrão do FireFox */
    appearance: none; /* Remove estilo padrão do FireFox*/
    padding: 0 4px;
}

  a.label-link {
    float: right;
    font-size: 12px;
  }

  button {
    margin-top: 16px;
    border: 0;
    outline: 0;
    /* font-family: var(--secondary-font); */
    font-weight: 600;
    font-size: 1rem;
    color: #FFFFFF;
    background-color: #1890ff;
    width: 140px;
    height: 45px;
    border-radius: 4px;
    box-shadow: 0 0 5px 2px #00000029;
    cursor: pointer;
    transition: filter linear 0.2s;

    &:hover {
        filter: brightness(85%);
    }
}
`;

export const PersonalInfoWrapper = styled.div`
  border-radius: 5px;
  background-color: #f6f8fa;
  border: 1px solid #eaecef;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const InLine = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 415px) {
        flex-direction: column;
    }
`;

export const InputControl = styled.div`
    width: 100%;
    flex: ${(props) => props.flex ? props.flex : 1};
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    margin-left: ${(props) => props.marginLeft}px;

    @media (max-width: 415px) {
        margin-left: 0;
    }
`;

export const Error = styled.div`
  border-radius: 5px;
  background-color: #ffcdd2;
  border: 1px solid #b71c1c;
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
`;
