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
`;