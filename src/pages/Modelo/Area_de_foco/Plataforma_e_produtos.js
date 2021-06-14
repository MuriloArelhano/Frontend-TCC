import React from "react";
import Layout from "../Layout";
import { scrollToSection } from "../../../functions/Functions";
import {
  MainPageWrapper,
  AuxiliarBar,
  AuxiliarBarSticky,
  AuxiliarUl,
  AuxiliarLink,
  Titles,
  AlignCenter,
  ImageWrapper,
  Img,
  SwitchPages,
  Button
} from "../style";

function Plataforma_e_produtos() {
  const figura18 = React.useRef();
  const Plataforma_e_produtos = React.useRef();

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles ref={Plataforma_e_produtos}>
            <h2>Plataforma e produtos</h2>
          </Titles>

          <p>
            🔍 Esta área de foco tem como objetivo fornecer informações e recursos que apoiem as
            metas de uma organização em relação à produtividade, criação de nicho e qualidade das
            contribuições. Compreende a plataforma, infraestrutura, orçamento, produtos (p.ex.: APIs,
            SDKs, IDEs) e serviços da organização central, uma vez que uma organização investe em
            um ecossistema com o objetivo de atrair usuários para consumir seus produtos. A visão e os
            incentivos da organização central podem ser armazenados em repositórios proprietários,
            como as lojas de aplicações móveis e portais de apoio aos desenvolvedores (por exemplo,
            <a href="https://developer.android.com/" target="blank"> Android Developers</a>). Assim como, podem fazer uso de repositórios de código aberto para
            favorecer um ambiente social de codificação. Na <Button onClick={() => scrollToSection(figura18)}>Figura 18</Button>, são apresentados os objetos de
            transferência de valor que são consumidos e providos por esta área de foco.
          </p>

          <AlignCenter>
            <ImageWrapper ref={figura18}>
              <Img src={require("../../../images/Figura18.png").default} />
            </ImageWrapper>
            <span>
              Figura 18. Objetos de transferência de valor - Plataforma e Produtos.
            </span>
          </AlignCenter>

          <p>
            Como exemplo de ações dentro desta área de foco, podem ser destacados os
            portais de apoio aos desenvolvedores da Google e da Apple, que possuem informações
            sobre ferramentas, recursos disponíveis que apoiam o desenvolvimento e produtos focados
            nos usuários de dispositivos da plataforma. É importante deixar claro que esta área está
            fortemente direcionada ao que a organização tem como visão em relação aos seus
            negócios.
          </p>

          <SwitchPages>
            <span>
              <a href="/modelo/introducao">
                <i>&lt; Introdução</i>
              </a>
            </span>
            <span>
              <a href="/modelo/devrel-evangelismo-e-advocacia">
                <i>Devrel (evangelismo e advocacia) &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Plataforma_e_produtos)}>
                Plataforma e Produtos
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Plataforma_e_produtos;
