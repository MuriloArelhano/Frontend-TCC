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
} from "../style";

function Devrel_evangelismo_e_advocacia() {
  const figura19 = React.useRef();
  const Evangelismo_e_advocacia = React.useRef();

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles ref={Evangelismo_e_advocacia}>
            <h2>Devrel (Evangelismo e advocacia)</h2>
          </Titles>
          <p>
            🔍 Esta área de foco tem como objetivo ajudar a incorporar contribuições com potencial
            (ou seja, produtos complementares, serviços e inovações) que surgem dos desenvolvedores
            para a plataforma do ecossistema na área de foco da Plataforma e Produtos. Isto ajuda a
            manter o equilíbrio entre as expectativas dos desenvolvedores e as necessidades da
            organização central. Incluindo o balanceamento entre o roadmap interno da organização
            com as necessidades dos desenvolvedores.
          </p>
          <p>
            Esta área é composta por evangelismo e advocacia. A parte de advocacia trabalha
            com desenvolvedores existentes, ou seja, com o ganho de interesse e a fidelização de
            potenciais desenvolvedores. Isto se dá por meio de conteúdo de qualidade e específico para
            esses desenvolvedores. A parte de advocacia está relacionada aos estágios de retenção,
            reconhecimento e referência dentro do DevGo. O evangelismo foca na divulgação da
            “palavra” da organização, ou seja, na prospecção de desenvolvedores, na influência de
            desenvolvedores externos. A parte de evangelismo está associada aos estágios de
            sensibilização, entrada e ativação do DevGo. Como característica comum, tanto advocacia
            quanto o evangelismo devem construir confiança entre os setores da organização central e
            os desenvolvedores.
          </p>
          <p>
            Nesta área de foco são fornecidos os recursos apropriados, como componentes e
            ferramentas de código aberto, para dar suporte aos desenvolvedores, dividindo as metas de
            uma organização de acordo com vários públicos-alvo. Estes recursos e ferramentas são
            desenvolvidos com base em diretrizes organizacionais que incluem especificação de
            plataforma, ideias emergentes, melhores práticas, tecnologias, ferramentas de
            desenvolvimento e marketing, critérios de qualidade e projeto de interface com o usuário. Os
            objetos de transferência de valor que são consumidos e providos por esta área de foco são
              apresentados na <a href="/#" onClick={() => scrollToSection(figura19)}>Figura 19</a>.
          </p>

          <AlignCenter>
            <ImageWrapper ref={figura19}>
              <Img alt="" src={require("../../../images/Figura19.png").default} />
            </ImageWrapper>
            <span>
              Figura 19. Objetos de transferência de valor - DevRel (Evangelismo e Advocacia).
            </span>
          </AlignCenter>

          <SwitchPages>
            <span>
              <a href="/modelo/Plataforma_e_produtos">
                <i>&lt; Plataforma e produtos</i>
              </a>
            </span>
            <span>
              <a href="/modelo/Fluxo_de_avanco_do_desenvolvedor">
                <i>Fluxo de avanço do desenvolvedor &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Evangelismo_e_advocacia)}>
                Devrel (Evangelismo e Advocacia
            </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Devrel_evangelismo_e_advocacia;
