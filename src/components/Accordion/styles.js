import styled from "styled-components";

export const AccordionContainer = styled.div`
    width: 100%;
    border: 1px solid #1890ff;
    border-radius: 5px;
`

export const AccordionHeader = styled.div`
    width: 100%;
    padding: 4px;
    background-color: #1890ff;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: #ffffff;
    cursor: pointer;
    outline: none;
`

export const AccordionBody = styled.div`
    width: 100%;
    max-height: ${(props) => props.maxHeight ? props.maxHeight : '0px'};
    background-color: #E6F7FF;
    border-radius: 0 0 5px 5px;
    overflow-y: hidden;
    transition: max-height 0.4s ease;

    > .content {
        width: 100%;
        height: 100%;
        padding: 16px;
    }
`