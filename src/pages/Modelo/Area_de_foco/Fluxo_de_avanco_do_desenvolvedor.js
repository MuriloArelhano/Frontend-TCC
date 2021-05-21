/*eslint eqeqeq:0*/
import React from "react";
import { scrollToSection } from "../../../functions/Functions";
import Layout from "../Layout";
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

function Fluxo_de_avanco_do_desenvolvedor() {
  const figura20 = React.useRef();
  const Fluxo_de_avanco_do_desenvolvedor = React.useRef();

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles>
            <h2 ref={Fluxo_de_avanco_do_desenvolvedor}>Fluxo de avanço do desenvolvedor</h2>
          </Titles>

          <p>
            🔍 Esta área de foco tem como objetivo apoiar no acompanhamento e análise do
            avanço dos desenvolvedores dentro do ecossistema. Entender como os desenvolvedores
            estão se movimentando e gerando contribuições dentro do ecossistema é importante para
            uma organização direcionar suas estratégias de atuação para governá-los. De fato, se há
            muitos desenvolvedores com problemas para a entrada no ecossistema, a organização
            passará por problemas de ativação e retenção, por exemplo, estágios necessários para a
            geração de contribuições com qualidade.
            </p>
          <p>
            A <Button onClick={() => scrollToSection(figura20)}>Figura 20</Button> apresenta os objetos que ajudam na transferência de valor nesta área
            de foco (os consumidos e os providos pela área).
          </p>

          <AlignCenter>
            <ImageWrapper ref={figura20}>
              <Img alt="" src={require("../../../images/Figura20.png").default} />
            </ImageWrapper>
            <span>
              Figura 20. Objetos de transferência de valor - Fluxo de Avanço do Desenvolvedor.
            </span>
          </AlignCenter>

          <p>
            Especificamente nesta área há um conjunto de fases, como explicado na estrutura do modelo (<a href="/modelo/Introducao/#figura16">Figura 16</a>), e que são descritos mais a frente. Há três fases para apoiar o progresso do desenvolvedor, essas fases consideram modelos de negócio e de gerenciamento de parceria. Tem-se, desta forma, as seguintes fases: <i>Início</i>, <i>Crescimento</i> e <i>Maturidade</i>.
          </p>

          <SwitchPages>
            <span>
              <a href="/modelo/devrel-evangelismo-e-advocacia">
                <i>&lt; Devrel (evangelismo e advocacia)</i>
              </a>
            </span>
            <span>
              <a href="/modelo/monitoramento">
                <i>Monitoramento &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Fluxo_de_avanco_do_desenvolvedor)}>
                Fluxo de avanço do desenvolvedor
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Fluxo_de_avanco_do_desenvolvedor;
