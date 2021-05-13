import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 45px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  * {
    font-family: "Inconsolata", monospace;
  }
`;

export const MainPageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 20px;
  padding: 5px 10px 0 40px;
  line-height: 30px;
  letter-spacing: .2px;

  p {
    margin: 40px 0;
  }

  a, button {
    color: #1890ff;
  }

  a:hover, button:hover {
    transition: all 0.8 ease;
    color: #4da5f7;
  }

  h2 {
    font-size: 32px;
    margin: 25px 0;
  }

  h2:first-child {
    margin: 0;
  }
`;

export const AuxiliarBar = styled.div`
  width: 300px;
  padding-right: 5px;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const AuxiliarBarSticky = styled.div`
  position: sticky;
  top: 0;
  padding-top: 30px;
`;

export const AuxiliarUl = styled.ul`
  list-style: none;
  border-left: 1px solid lightgrey;
  text-decoration: underline;
  
`;


export const AuxiliarLink = styled.button`
  color: #1890ff;
  cursor: pointer;
  background: white;
  padding: 7px 5px 7px 15px;
  font-size: 15px;
  font-weight: 600;
  display: inline-block;
  text-align: left;
  border: none;
  outline: none;

  &:hover {
    transition: all 0.8 ease;
    color: blue;
  }
`;

export const Titles = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    /* padding-top: 1.5px; */
    margin-right: 5px;
  }
`;

export const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    padding: 30px 0;
    font-weight: bold;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 25px;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const SwitchPages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px dotted lightgrey;
  margin-top: 60px;
  padding: 30px 0;

  a:hover {
    border-bottom: 1px solid #4da5f7;
  }
`;


export const LinkPostion = styled.div`
  display: flex;
  justify-content: ${({ linkPosition }) => (linkPosition ? "flex-start" : "flex-end")};
  width: 100%;

`;

export const UlInsights = styled.div`
  padding-left: 30px;
  list-style: none;

  li::before {
    content: "📌";
    display: inline-block;
    margin-right: 0.2rem;
  }

  li {
    padding: 20px 0;

    p {
      display: inline;
    }
  }
`
export const Marco = styled.div`
  border-left: 5px solid black;

  P {
    background: #e6f7ff;
    margin: 40px 0;
    margin-left: 10px;
    padding: 10px;
    font-style: italic;
  }
`

export const LicoesAprendidas = styled.div`
  margin-bottom: 50px;

  p.Destaque {
    text-align: center;
    background-color: rgb(31, 165, 31);
    padding: 10px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    margin: 0;

    &:hover {
      background: green;
      cursor: pointer;
    }

    span {
      font-size: 28px;
      vertical-align: middle;
    }
  }

  ul {
    transition: max-height 1s cubic-bezier(0.42, 0, 0.13, 1.25);
    overflow: hidden;
    max-height: 0px;
    border-radius: 15px;
    background-color: #fffbfb;

    li {
      padding: 20px 20px 20px 40px;
      margin: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`

export const UlConclusao = styled.ul`
  list-style: decimal;
  padding-left: 80px;
`

export const Button = styled.button`
  border: none;
  text-decoration: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
`