import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  gap: 2px;
  margin: 8px 0;

  .stage {
    flex: 1;
    height: 100%;
    background-color: #dddddd;
    border-radius: 4px;
  }

  .weak {
    background-color: #b71c1c;
    transition: background-color linear 0.2s;
  }

  .regular {
    background-color: #BCA50F;
    transition: background-color linear 0.2s;
  }

  .good {
    background-color: #2EA44F;
    transition: background-color linear 0.2s;
  }

  .strong {
    background-color: #2EA44F;
    transition: background-color linear 0.2s;
  }
`