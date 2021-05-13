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
  LinkPostion,
  Button
} from "../style";

const Introducao = () => {
  const deOndeSurgiuREF = React.useRef();
  const estruturaDevGo = React.useRef();
  const oModelo = React.useRef();
  const figura16 = React.useRef();
  const figura17 = React.useRef();

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles ref={deOndeSurgiuREF}>
            <span>🧐</span>
            <h2>De onde surgiu?</h2>
          </Titles>

          <p>
            O <Button onClick={() => scrollToSection(oModelo)}>modelo</Button> surge como
            forma de ajudar na identificação da estrutura que apoia a Governança
            de Desenvolvedores em um Ecosistema de Software Móvel e estágios do
            fluxo dos desenvolvedores.
          </p>

          <Titles ref={estruturaDevGo}>
            <span>✨</span>
            <h2 id="estrutura-do-devgo">Estrutura do DEVGO</h2>
          </Titles>

          <p>
            🔍 <i>O DevGo (do inglês, Developer Governance)</i> consiste em um
            modelo composto elementos estruturais e por um conjunto de lições
            aprendidas para a criação e manutenção de um{" "}
            <i>MSECO (Mobile Software Ecosystem)</i> próspero para a organização
            central e para os desenvolvedores. As organizações centrais em MSECO
            podem se beneficiar do DevGo para saber quais elementos da estrutura
            do modelo têm sido abordados, ajudando a identificar lições
            aprendidas e favorecendo a colaboração e a competitividade. Dessa
            forma, elas poderão obter uma visão sobre a adequação do seu modelo
            de governança de desenvolvedores.
          </p>

          <p>
            <Button onClick={() => scrollToSection(figura16)}>Na Figura 16</Button>, é
            apresentada a estrutura do modelo de DEVGO e um conjunto de lições
            aprendidas baseadas na experiência de profissionais de{" "}
            <a
              href="https://www.forbes.com/sites/justinwarren/2019/08/14/what-is-developer-relations/"
              target="blank"
            >
              DevRel (Developer Relations)
            </a>
            . O modelo DevGo, com exceção do conjunto de{" "}
            <i>lições aprendidas</i> e os <i>marcos</i> que são descritos de
            forma textual, é apresentado na{" "}
            <Button onClick={() => scrollToSection(figura17)}>Figura 17</Button>Figura 17. A
            descrição dos elementos que compõem o modelo é abordada mais a
            frente
          </p>

          <AlignCenter>
            <ImageWrapper ref={figura16}>
              <Img alt="" src={require("../../../images/figura16.png").default} />
            </ImageWrapper>
            <span>
              Figura 16. Estrutura do modelo DevGo.
            </span>
          </AlignCenter>

          <Titles ref={oModelo}>
            <span>📦</span>
            <h2 id="o-modelo">O Modelo</h2>
          </Titles>

          <p>
            O DevGo, como indicado na{" "}
            <Button onClick={() => scrollToSection(figura17)}>Figura 17</Button>, é
            composto por <b>áreas de foco</b>, que indicam as áreas que uma
            organização central precisa cuidar para governar desenvolvedores e
            manter padrões. Cada área de foco possui, pelo menos, um{" "}
            <i>objetivo organizacional</i>. Uma área de foco pode ser composta
            por <b>fases</b>. Cada uma destas fases está relacionada à mudança
            no fluxo de avanço do desenvolvedor dentro do ecossistema que é
            impulsionada por um conjunto de passos a serem dados.
          </p>

          <AlignCenter>
            <ImageWrapper ref={figura17}>
              <Img alt="" src={require("../../../images/figura17.png").default} />
            </ImageWrapper>
            <span>
              Figura 17. DevGo - modelo para governança de desenvolvedores.
            </span>
          </AlignCenter>

          <p>
            <span>🌟</span> Cada uma das <i>fases</i> é
            composta por <b>estágios</b>, que compreendem um período de
            desenvolvimento do desenvolvedor. Um estágio é formado por: um{" "}
            <i>objetivo</i>, um <i>conjunto de facilitadores</i> que permitem a
            relação com o desenvolvedor, um <i>marco</i> do estágio que
            representa quando o desenvolvedor poderá sair daquele estágio e um{" "}
            <i>conjunto de lições aprendidas</i>.
          </p>

          <p>
            <span>🌟</span> O modelo compreende Quatro
            áreas de foco: <b>Plataforma e Produtos</b>,{" "}
            <b>DevRel (Evangelismo e Advocacia)</b>,{" "}
            <b>Fluxo de Avanço do Desenvolvedor</b> e, por fim,
            <b>Monitoramento</b>. Estas áreas de foco ajudam a suportar uma
            abordagem estruturada e/ou descentralizada (orgânica) para governar
            desenvolvedores. A seguir, cada área de foco será descrita,
            juntamente com o seu objetivo.
          </p>

          <p>
            <span>🌟</span> O{" "}
            <b>
              conjunto de setas no modelo representam objetos de transferência
              de valor
            </b>
            entre as <i>áreas de foco</i>. Para cada <i>área de foco</i>, que
            são descritas nas próximas seções, são apresentados{" "}
            <i>mapas mentais</i> onde é possível identificar alguns desses
            objetos de transferência entre as <i>áreas de foco</i>. Os{" "}
            <i>objetos de transferência de valor</i> são mecanismos de criação
            de valor para gerar e distribuir valor para todo o ecossistema
            baseando-se em inovação, investimentos e compartilhamento de custos.
          </p>

          <SwitchPages>
            <LinkPostion linkPosition={false}>
              <span>
                <a href="/modelo/Plataforma_e_produtos">
                  <i>Plataforma e produtos &gt; </i>
                </a>
              </span>
            </LinkPostion>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(deOndeSurgiuREF)}>
                De onde surgiu
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(estruturaDevGo)}>
                Estrutura do Devgo
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(oModelo)}>
                O modelo
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
};

export default Introducao;
