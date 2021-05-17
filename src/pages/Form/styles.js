import styled from 'styled-components';

export const Container = styled.div`
    max-width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;

    > h1 {
        font-size: 2rem;
        font-weight: 500;
    }

    > p {
        margin-top: 24px;
        max-width: 75%;
        text-align: center;
        color: #484646;
        line-height: 1.4rem;
    }

    .select-message {
        margin: 64px 0;
        padding: 8px;
        background-color: #E6F7FF;
        border: 1px solid #1890ff;
        border-radius: 10px;
    }

    button {
        width: 100%;
        margin-top: 16px;
        border: 0;
        outline: 0;
        font-weight: 600;
        font-size: 1rem;
        color: #FFFFFF;
        background-color: #3DBB11;
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