import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  border-right: 1px solid lightgrey;
  min-width: 180px;
  max-width: 325px;
  position: sticky;
  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Sticky = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`

export const SidebarList = styled.ul`
  padding-left: 0;
`

export const SidebarItem = styled.div`
  width: 100%;
  /* background-color: lightblue; */
  /* padding: 20px; */
`

export const SidebarLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 10px 20px 30px;

  &:hover {
    transition: all .6s ease;
    color: #1890ff;
  }


  &.active {
    background-color: #e6f7ff;
  }

  &:active::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border: 2px solid var(--link-color);
  }

  i {
    font-size: 16px;
  }
`;