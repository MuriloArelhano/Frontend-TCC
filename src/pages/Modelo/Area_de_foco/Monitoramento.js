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
  UlInsights,
  Button
} from "../style";

function Monitoramento() {
  const figura21 = React.useRef();
  const tabela25 = React.useRef();
  const tabela26 = React.useRef();
  const Monitoramento = React.useRef();

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles>
            <h2 ref={Monitoramento}>Monitoramento</h2>
          </Titles>
          <p>
            🔍 Esta área de foco tem como objetivo servir como uma estratégia para monitorar o
            engajamento do desenvolvedor, dando suporte à transparência tanto para a organização
            quanto para os desenvolvedores. Desta forma é possível garantir que todos tenham a
            chance de entender e fornecer feedback. Além disso, apresenta mecanismos para
            armazenar dados sobre as contribuições e interações dos desenvolvedores. Isto ajuda a
            promover o ciclo de feedback para adaptar as estratégias de governança do desenvolvedor
            na área de foco da Plataforma e Produtos e na DevRel (Evangelismo e Advocacia).
          </p>
          <p>
            Na <Button onClick={() => scrollToSection(tabela25)}>Tabela 25</Button>, são apresentadas as categorias, descrição e exemplo de repositórios
              que podem ser utilizados, pelos profissionais de DevRel, dentro da área de foco de
              monitoramento.
          </p>

          <AlignCenter>
            <ImageWrapper ref={tabela25}>
              <Img src={require("../../../images/Tabela25.png").default} />
            </ImageWrapper>
            <span>
              Tabela 25. Categorias de Repositórios.
            </span>
          </AlignCenter>

          <p>
            Já na <Button onClick={() => scrollToSection(tabela26)}>Tabela 26</Button> são apresentadas as principais motivações para o uso das categorias de repositórios.
          </p>
          <p>
            Os repositórios (p.ex.: Loja de Apps, Questões e Respostas, Relatórios de Defeitos e
            Projeto de Software) armazenam dados gerados a partir do uso de recursos e objetivos
            fornecidos por uma organização central para ajudar na expansão do ecossistema. Esta área
            de foco permite com que o DevGo possua um canal de comunicação bidirecional,
            fornecendo informações sobre conhecimento e experiência a partir das direções bottom-up e
            top-down (alimentando todas as áreas de foco). Os repositórios suportam o alinhamento
            entre os ecossistemas locais (p.ex.: uma comunidade específica na África do Sul) e o
            ecossistema global de desenvolvedores.
        </p>

          <AlignCenter>
            <ImageWrapper ref={tabela26}>
              <Img src={require("../../../images/Tabela26.png").default} />
            </ImageWrapper>
            <span>
              Tabela 26. Repositório de Motivações.
            </span>
          </AlignCenter>

          <p>
            Os objetos de transferência de valor para esta área de foco, que consume e provê valor para todas outras áreas de foco, são descritos na <Button onClick={() => scrollToSection(figura21)}>Figura 21</Button>.
          </p>

          <AlignCenter>
            <ImageWrapper ref={figura21}>
              <Img src={require("../../../images/Figura21.png").default} />
            </ImageWrapper>
            <span>
              Figura 21. Objeto de transferência de valor - Monitoramento.
            </span>
          </AlignCenter>

          <p>
            Especificamente, nesta tese, analisamos um repositório da categoria Perguntas e
            Repostas, o Stack Overflow, como forma de obter insights para o monitoramento a partir
            desta categoria. Esta análise de insights é baseadaa em
            mineração de repositórios de software como forma de obter informações que ajudem na
            governança de desenvolvedores. Os insights são os seguintes:
          </p>

          <UlInsights>
            <li>
              <p>
                <b><i>Insight #1</i></b>: os tópicos podem indicar as barreiras mais frequentes
                    enfrentadas por desenvolvedores dispostos a participar de um MSECO. Esse
                    cenário pode servir como uma estratégia de monitoramento para apoiar a
                    organização central no recrutamento e no treinamento de desenvolvedores.
                    Do ponto de vista do custo operacional, de manutenção e a competividades,
                    os tópicos comuns: vinculação de dados, programação de UI e infraestrutura
                    de desenvolvimento, ajudam na análise;
                </p>
            </li>
            <li>
              <p>
                <b><i>Insight #2</i></b>: as emoções primárias além de serem úteis pra obter a satisfação
                    do desenvolvedor, também cobrem, aspectos de custo, competitividade e
                    manutenção de produtos. A tristeza se relaciona a produtos como os
                    emuladores e dispositivos, assim como, a manipulação de elementos de UI. A
                    raiva está associada a indisponibilidade de recursos. E a alegria, pode
                    impactar na competitividade do produto, pois há relação com as melhores
                    práticas para gerar uma contribuição e a implementação de recursos
                    avançados;
                </p>
            </li>
            <li>
              <p>
                <b><i>Insight #3</i></b>: é importante explorar como a falta de interseção de interesses
                    impulsiona a troca de informações entre desenvolvedores trabalhando em
                    mais de um MSECO. A pequena interseção mostra que as estratégias
                    tomadas em nível gerencial podem afetar as interações e motivações dos
                    desenvolvedores;
                </p>
            </li>
            <li>
              <p>
                <b><i>Insight #4</i></b>: os tópicos mais visualizados, bem como os tópicos em que os
                    desenvolvedores estão mais empenhados em responder, podem indicar uma
                    comunidade de especialistas que pode ajudar a reduzir as barreiras
                    frequentes à participação no MSECO. Isto favorece o crescimento da
                    comunidade e o aumento da satisfação dos desenvolvedores;
                </p>
            </li>
            <li>
              <p>
                <b><i>Insight #5</i></b>: as perguntas postadas em um repositório de perguntas e
                    respostas em períodos próximos a anúncios oficiais de um MSECO podem
                    ajudar a definir estratégias para adicionar novos recursos do MSECO (por
                    exemplo, plataformas, SDKs, APIs, linguagens de programação). Quando
                    essas novas tecnologias são lançadas no mercado, uma organização central
                    deve ser capaz de gerenciá-las facilmente;
                </p>
            </li>
            <li>
              <p>
                <b><i>Insight #6</i></b>: as medalhas podem ajudar a organização central no
                    gerenciamento de estratégias relacionadas a exploração de recurso técnico,
                    desenvolvedores ativos na comunidade e o controle da comunidade por meio
                    do cultivo de relacionamentos com desenvolvedores que se destacam dentro
                    do ecossistema. Isto pode ajudar a reduzir custos operacionais para a
                    governança de desenvolvedores.
                </p>
            </li>
          </UlInsights>

          <SwitchPages>
            <span>
              <a href="/modelo/Fluxo_de_avanco_do_desenvolvedor">
                <i>&lt; Fluxo de avanço do desenvolvedor</i>
              </a>
            </span>
            <span>
              <a href="/modelo/Fases_estagios_facilitadores">
                <i>Fases, estágios e facilitadores &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Monitoramento)}>
                Monitoramento
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Monitoramento;
