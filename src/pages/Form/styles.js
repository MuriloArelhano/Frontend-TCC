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
    }

    .default-box {
        padding: 8px 12px;
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

export const StageContainer = styled.div`
    max-width: 80%;
    width: 100%;
    padding: 16px;
    margin-bottom: 80px;
    background-color: #1890FF;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .stage-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        cursor: pointer;

        .img-container {
            width: 88px;
            height: 88px;
            padding: 8px;
            border-radius: 50%;
            background-color: #F8FDFF;
            object-fit: cover;
            border: 1px solid #222222;

            > img {
                max-width: 100%;
                transition: transform ease-in-out .2s;
            }
        }

        > span {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 0.875rem;
            margin-top: 8px;
        }

        &:hover {
            img {
                transform: scale(1.05);
            }
        }
    }
`;

export const StageBox = styled.div`
    max-width: 60%;
    width: 100%;
    border: 1px solid #1890ff;
    margin-bottom: 64px;

    .box-header {
        width: 100%;
        padding: 8px;
        background-color: #1890ff;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 0.8px;
        color: #ffffff;
        cursor: default;
    }

    .box-body {
        width: 100%;
        background-color: #F8FDFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 24px;

        .box-info {
            max-width: 80%;
            text-align: center;
        }

        .focus-area-container {
            max-width: 80%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 24px;
            margin-top: 32px;

            .focus-area {
                flex-basis: 180px;
                word-wrap: break-word;
                text-align: center;
                cursor: pointer;
            }
        }
    }
`;