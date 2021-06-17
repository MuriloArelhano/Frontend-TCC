import styled from 'styled-components';

export const TableContainer = styled.table`
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

  .btn-download {
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
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid #2EA44F;
    color: #2EA44F;

    &:hover {
      background-color: #2EA44F;
      color: #ffffff;
    }
  }
`;
