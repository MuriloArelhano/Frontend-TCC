import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
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
        max-width: 60%;
        text-align: center;
        color: #484646;
        line-height: 1.4rem;
    }

    .select-message {
        margin-top: 64px;
        padding: 8px;
        background-color: #E6F7FF;
        border: 1px solid #1890ff;
        border-radius: 10px;
    }
`;