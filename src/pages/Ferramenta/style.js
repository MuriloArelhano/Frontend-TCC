import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  //   border: 1px solid red;
  display: flex;
  //   justify-content: center
  margin: 0 auto;
  margin-bottom: 50px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Descricao = styled.div`
  display: flex;
  padding: 15px;
  margin: 30px 30px;
  justify-content: center;
  border-radius: 5px;
  background-color: black;

  h3 {
    color: orange;
    letter-spacing: 2px;
  }
`;

export const ModeloWrapper = styled.div`
  display: flex;
  position: relative;
  width: 820px;
  // border: 1px solid blue;
  flex-direction: column;
`;
export const VerticalText = styled.div`
  display: flex;
  position: absolute;
  bottom: 400px;
  right: -274px;
  // border: 1px solid blue;
  width: 550px;
  transform: rotate(270deg);
  z-index: 2;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: red;
  }
`;

export const Guideline = styled.div`
    height: 100%;
    width 23px;
    position: absolute;
    top: 0;
    right: -12px;
    border: 2px dashed black;
    background: white;
    z-index: 1;

    

    span.arrowUp {
        width:0;
        height:0;
        border: 15px solid transparent;
        display: block;
        border-bottom-color:#000;
        position: absolute;
        top: -30px;
        left: -5px;
    }

    span.arrowDown {
        width:0;
        height:0;
        border: 15px solid transparent;
        display: block;
        border-top-color:#000;
        position: absolute;
        bottom: -30px;
        left: -5px;
    }
`;

export const AreaDeFocoWrapper = styled.div`
  background-color: #fef6e1;
  border: 2px solid #d29a08;
  box-shadow: 0px 2px 4px 0px black;
  border-radius: 12px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
`;
export const ImgLoop = styled.div`
  position: absolute;
  bottom: -45px;
  left: 10px;
  z-index: 1;

  img {
    width: 60px;
  }
`;

export const Title = styled.h2`
  color: black;
  display: flex;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Content = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

export const MiniCard = styled.div`
  min-width: 100px;
  // height: ${({ monitoramento }) => (monitoramento ? "120px" : "100px")};
  min-height: ${({ monitoramento }) => (monitoramento ? "100px" : "100px")};
  display: flex;
  margin: ${({ monitoramento }) => (monitoramento ? "0px" : "5px")};
  padding: ${({ monitoramento }) => (monitoramento ? "5px" : "0px")};
  margin-bottom: 5px;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid red; */
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  div.lessons {
    background-color: orange;
    padding: 4px;
    font-weight: bold;
    font-size: 14px;
    margin-top: 2px;
    width: 80px;
    text-align: center;
  }
`;
export const MiniCardIMG = styled.div`
  width: 80px;
  height: 100px;
  // border: 1px solid blue;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    text-align: center;
  }

  div {
    border-radius: 50%;
    background-color: lightgreen;
  }
`;
export const MiniCardSubtitle = styled.div`
  font-weight: bold;
  text-align: center;
  min-width: 80px;
  // margin-top: ${({ margin }) => (margin ? "" : "5px")};

  span {
    font-size: 14px;
    color: ${({ color }) => (color ? "black" : "green")};
  }
`;
export const Card = styled.div`
  border: 2px dotted red;
  margin: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CardTitle = styled.div`
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.03);
  }
  span {
    display: block;
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid blue; */
`;

export const LegendaWrapper = styled.div`
  width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ElementFigure = styled.div`
  div.estagio {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: lightgreen;
  }

  div.fase {
    width: 55px;
    height: 35px;
    border-radius: 5px;
    border: 2px dotted red;
  }

  div.licoes {
    background-color: orange;
    padding: 5px;
    font-weight: bold;
  }

  div.repositorio,
  div.feedback {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
    }
  }
`;
export const ElementText = styled.div`
  max-width: 150px;
  margin-left: 5px;
`;
