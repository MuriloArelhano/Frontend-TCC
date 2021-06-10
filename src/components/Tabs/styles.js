import styled from "styled-components";

export const TabContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`

export const LabelsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const Label = styled.span`
  color: #666666;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all linear .2s;

  &.active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }

  &:hover {
    color: #1890ff;
  }
`

export const ContentContainer = styled.div`
  margin-top: 16px;
`