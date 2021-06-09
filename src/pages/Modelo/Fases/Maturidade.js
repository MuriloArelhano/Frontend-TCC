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
  SwitchPages,
  Marco,
  LicoesAprendidas
} from "../style";
function Maturidade() {
  const Fase_de_maturidade
    = React.useRef();
  const Estagio_de_reconhecimento = React.useRef();
  const Estagio_de_referencia = React.useRef();

  const styles = {
    showLessons: {
      maxHeight: "3000px"
    },
    hideLessons: {
      maxHeight: "0px"
    }
  }

  const [showLessons, setShowLessons] = React.useState(false)
  const [showLessons1, setShowLessons1] = React.useState(false)

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles>
            <h2 ref={Fase_de_maturidade
            }>Fase de maturidade</h2>
          </Titles>
          <p>
            🔍 Nesta fase o desenvolvedor precisa se manter atualizado, compartilhar experiências,
            estabelecer confiança com a organização central e a comunidade de desenvolvedores. É
            ainda importante que o desenvolvedor seja reconhecido pelas contribuições e seja
            preparado para movimentar a comunidade atuando assim como uma extensão da equipe de
            DevRel.
          </p>

          <p>
            Um desenvolvedor nesta fase é referência para os outros desenvolvedores do
            ecossistema e precisa de uma ligação direta com a organização central por meio da equipe
            de DevRel. Esta fase compreende um estágio de reconhecimento do desenvolvedor
            (Estágio de reconhecimento) e um estágio que ajuda a identificar e preparar
            desenvolvedores que são referência para o ecossistema (Estágio de referência), como
            segue.
          </p>

          <Titles>
            <h2 ref={Estagio_de_reconhecimento}>Estágio de reconhecimento</h2>
          </Titles>
          <p>
            Uma organização deve perceber e destacar dentro do ecossistema seus melhores
            desenvolvedores em aspectos que demonstrem contribuições impactantes no ecossistema,
            por exemplo, histórias de sucesso de desenvolvedores, extensões como ferramentas,
            relatórios de correções da plataforma e aplicações móveis que se destacam na loja. Os
            seguintes facilitadores ajudam o profissional de DevRel dentro deste estágio: programas de
            apoio ao desenvolvedor, benefícios de marketing, incentivos para inovação, meritocracia e
            colaboração social.
          </p>

          <p>
            🎯 <b>Objetivos:</b> Levar interações positivas e relacionamentos mais próximos; Suportar o
            reconhecimento de desenvolvedores por usuários, organização e comunidade; Identificar os
            líderes da comunidade; Construir e obter feedback sobre os produtos; Comunicar os
            impactos reais do trabalho dos desenvolvedores.
          </p>

          <Marco>
            <p>
              O marco que indica que o desenvolvedor já passou por este estágio é quando um
              desenvolvedor está com uma contribuição publicada (exemplo: aplicação móvel,
              funcionalidade em projeto open-source, artigo técnico) em algum dos repositórios do
              SECO.
            </p>
          </Marco>

          <LicoesAprendidas
            onClick={() => setShowLessons(!showLessons)}
          >
            <p className="Destaque">
              <span>{showLessons ? "-" : "+"}</span>{" "}
              Para este estágio há um conjunto de 11 lições aprendidas:
            </p>
            <ul style={showLessons ? styles.showLessons : styles.hideLessons}>
              <li>
                <p>
                  <b><i>LA41.</i></b> Trabalhe diretamente com os vencedores do prêmio em hackathons,
                  promovendo os projetos através de blogs usando a contribuição como material
                  promocional, se isso fizer sentido;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA42.</i></b> Promova as contribuições dos desenvolvedores como, por exemplo, as
                  aplicações móveis. Impulsionar os downloads de aplicações móveis criará muito
                  valor em termos de relações com desenvolvedores e também ajudará a vender
                  sua plataforma;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA43.</i></b> Elogie alguns desenvolvedores específicos em seus canais oficiais. Isto pode
                  ser um grande impulso para o reconhecimento público e negócios do
                  desenvolvedor;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA44.</i></b> Conecte desenvolvedores em potencial da comunidade aos colegas de
                  setores organizacionais. É importante, também, ter uma variedade de programas
                  para conectar os desenvolvedores diretamente aos clientes de pequenas e
                  médias empresas;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA45.</i></b> Ajude os desenvolvedores a ajudar a sua área de DevRel. Seminários,
                  eventos, seminários on-line, demonstrações - o que você estiver fazendo para
                  chamar a atenção da sua plataforma para o mundo, convide alguns
                  desenvolvedores para compartilhar conhecimento e experiências;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA46.</i></b> Ajude a criar status e identificar líderes na comunidade. Os desenvolvedores
                  querem construir seu status social, ganhar reputação e compartilhar seus
                  conhecimentos com outros desenvolvedores;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA47.</i></b> Invista na capacitação de líderes de comunidade. Esses líderes poderão
                  trabalhar como extensão da equipe de DevRel recrutando, treinando e
                  capacitando os desenvolvedores do ecossistema;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA48.</i></b> Dar reputação às pessoas certas, demonstrar apreço e recompensar os mais
                  ativos. Quando feito corretamente, as pessoas criam palestras, escrevem livros,
                  ajudam a desenvolver a comunidade junto com você. Quando os
                  desenvolvedores podem aumentar seu valor, seu alcance e seu reconhecimento
                  construindo sua plataforma e aumentando seu público-alvo, eles serão muito
                  mais dedicados a você e sua marca;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA49.</i></b> Ofereça treinamento 1:1 em vários níveis como recompensa - em vez de se
                  cansar treinando todos, tenha materiais de auto treinamento que os
                  desenvolvedores possam usar para chegar ao próximo nível;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA50.</i></b> Ter um código de conduta definido para os líderes e para as comunidades -
                  sua reputação também está em jogo quando um dos membros da sua
                  comunidade “sai da linha”;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA51.</i></b> Conecte sua equipe de aquisição de Talentos aos desenvolvedores, instrua
                  essa equipe sobre como a comunidade está funcionando. Isto ajuda na
                  identificação de comunidades e os influenciadores podem fazer parceria para
                  criar conteúdo incrível para a área de DevRel.
                    </p>
              </li>
            </ul>
          </LicoesAprendidas>

          <Titles>
            <h2 ref={Estagio_de_referencia}>Estágio de referência</h2>
          </Titles>

          <p>
            Neste estágio o foco é fazer com que um desenvolvedor, identificado como líder no
            estágio anterior, seja capacitado para influenciar a comunidade e atuar na sensibilização de
            novos desenvolvedores. O influenciador conta a outros sobre a plataforma (neste cenário,
            relacionamentos são compromissos bidirecionais e representam um investimento do
            desenvolvedor). Como facilitadores para este estágio se tem: suporte técnico, suporte de
            Marketing e rede de influenciadores.
          </p>
          <p>
            🎯 <b>Objetivos:</b> Estabelecer e apoiar uma rede de influenciadores especializados para
            dimensionar as atividades do ecossistema; Liderar parcerias estratégicas; Capacitar os
            principais desenvolvedores e principais colaboradores como influenciadores.
          </p>

          <Marco>
            <p>
              Especificamente neste estágio não há um marco de mudança do fluxo de avanço do
              desenvolvedor. Por ser um estágio de referência, o desenvolvedor se potencializa como
              um influenciador e no trabalho aproximado com os profissionais de DevRel.
            </p>
          </Marco>

          <LicoesAprendidas
            onClick={() => setShowLessons1(!showLessons1)}
          >
            <p className="Destaque">
              <span>{showLessons1 ? "-" : "+"}</span>{" "}
              Para este estágio há um conjunto de 11 lições aprendidas:
              </p>
            <ul style={showLessons1 ? styles.showLessons : styles.hideLessons}>
              <li>
                <p>
                  <b><i>LA52.</i></b> Estabeleça um forte relacionamento com desenvolvedores influentes locais
                  chamados de influenciadores. Estas são as pessoas que se levantarão durante
                  uma reunião e proporão seu produto como a solução para o problema que estão
                  tentando resolver. Eles fazem parte do meu sistema de apoio. Um influenciador é
                  alguém com quem você criou um relacionamento especialmente profundo e
                  significativo, que você delegou para sair, agir em seu nome e aumentar seu
                  alcance;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA53.</i></b> Invista em eventos, preferencialmente organizados pelos influenciadores,
                  garantindo eles compreendam que afetam os objetivos da empresa e o que eles
                  podem fazer para causar impacto positivo. Mantenha sua equipe de
                  influenciadores informadas os eventos que você está planejando;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA54.</i></b> Construa uma rede forte entre os diferentes influenciadores da comunidade,
                  uma comunidade de influenciadores. Então, reconheça-as como comunidades
                  oficiais de especialistas e conceda-lhes privilégios expandidos. Isso ajudará a
                  aumentar a comunidade e diminuir a carga nas equipes DevRel;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA55.</i></b> Apresente a sua comunidade de influenciadores aos desenvolvedores e
                  empresas parceiras. Informe aos diversos setores de sua organização sobre
                  seus influenciadores - este é o passo final para transformar os voluntários em
                  colegas;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA56.</i></b> Defina um manual de eventos – como o influenciador de alguma forma fala do
                  nome da sua empresa usando seus materiais, eles também devem ter metas a
                  serem alcançadas;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA57.</i></b> Peça aos influenciadores para submeter palestras para conferências técnicas
                  para que eles entreguem palestras técnicas e ajudem na divulgação do
                  ecossistema;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA58.</i></b> Envolva os influenciadores na codificação de demonstrações técnicas de produtos do ecossistema. Isto ajuda na capacitação do influenciador;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA59.</i></b> Ensine os influenciadores a criar artigos técnicos que informam, convencem e/ou estabelecem a credibilidade do autor;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA60.</i></b> Peça aos influenciadores que planejem e realizem reuniões com as comunidades locais, além de analisar os resultados do engajamento de encontro;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA61.</i></b> Oriente os influenciadores para serem ativos em sites como o GitHub, o Medium e o YouTube;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA62.</i></b> Direcione o influenciador a coletar feedback sobre as tendências de seus produtos.
                    </p>
              </li>
            </ul>
          </LicoesAprendidas>

          <SwitchPages>
            <span>
              <a href="/modelo/crescimento">
                <i>&lt; Fase de crescimento</i>
              </a>
            </span>
            <span>
              <a href="/modelo/conclusao">
                <i>Conclusão &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Fase_de_maturidade
              )}>
                Fase de maturidade
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(Estagio_de_reconhecimento)}>
                Estágio de reconhecimento
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(Estagio_de_referencia)}>
                Estágio de referência
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Maturidade;
