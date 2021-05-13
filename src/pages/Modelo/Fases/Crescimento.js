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
function Crescimento() {
  const Fase_de_crescimento
    = React.useRef();
  const Estagio_de_ativacao = React.useRef();
  const Estagio_de_retencao = React.useRef();

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
            <h2 ref={Fase_de_crescimento
            }>Fase de crescimento</h2>
          </Titles>
          <p>
            🔍 Nesta fase o desenvolvedor deve ter a sua disposição os recursos necessários para
            avançar na aquisição de conhecimento teórico e prático para gerar contribuições para a
            expansão do ecossistema. Como parte desta fase foram identificados dois estágios:
            Ativação e Retenção.
          </p>

          <Titles>
            <h2 ref={Estagio_de_ativacao}>Estágio de ativação</h2>
          </Titles>
          <p>
            Este estágio funciona como um gatilho que indica se o desenvolvedor gerou sua
            primeira contribuição para o ecossistema, por exemplo, por meio da publicação de uma
            aplicação móvel. Neste estágio, desenvolvedor está projetando, desenvolvendo e
            submetendo sua primeira contribuição. Os seguintes facilitadores podem ser utilizados por
            profissionais de DevRel: portfólio de dispositivos e aplicações móveis, certificação de
            contribuição e acordos de níveis de qualidade.
          </p>

          <p>
            🎯 <b>Objetivos:</b> Fornecer impulso de ganho; Gerenciar mudança de plataforma; Apoiar
            contribuições de nicho; Apoiar o desenvolvimento; e Analisar os desenvolvedores
            periféricos, ativos e de topo.
          </p>

          <Marco>
            <p>
              O marco que indica que o desenvolvedor já passou por este estágio é quando um
              desenvolvedor está com uma contribuição publicada (exemplo: aplicação móvel,
              funcionalidade em projeto open-source, artigo técnico) em algum dos repositórios do
              MSECO.
            </p>
          </Marco>

          <LicoesAprendidas
            onClick={() => setShowLessons(!showLessons)}
          >
            <p className="Destaque">
              <span>{showLessons ? "-" : "+"}</span>{" "}
              Para este estágio há um conjunto de 7 lições aprendidas:
            </p>
            <ul style={showLessons ? styles.showLessons : styles.hideLessons}>
              <li>
                <p>
                  <b><i>LA25.</i></b> Direcione o desenvolvedor durante o processo de desenvolvimento a compartilhar sobre a experiência com o ecossistema em mídias sociais;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA26.</i></b> Envolva os desenvolvedores para falar sobre os pontos problemáticos e as
                  soluções que podem ser implementadas. Os desenvolvedores não precisam que
                  você os impressione resolvendo todos os problemas deles, concentre-se
                  naqueles que o produto de sua empresa resolve;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA27.</i></b> Desenvolva sua comunidade planejando e executando Hackathons. Um
                  evento deste tipo ajuda a engajar os desenvolvedores ativos do ecossistema.
                  Possibilitando que todos se conheçam e dando a oportunidade de mostrar que
                  você se importa com eles;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA28.</i></b> Envolva os desenvolvedores em uma coleção de materiais escritos por eles para a comunidade;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA29.</i></b> Certifique-se de que a documentação de produtos para o desenvolvedor seja
                  uma parte essencial da experiência no site da plataforma. Deve ser fácil de
                  navegar, limpo e simples para fornecer instruções fáceis de serem avaliadas e
                  seguidas pelos desenvolvedores;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA30.</i></b> Forneça modelos de projetos e diretrizes de cenários de uso para que os
                  desenvolvedores possam evoluir as contribuições com os produtos e serviços do
                  ecossistema. Isto permite a evolução das contribuições com a menor resistência
                  possível dentro de um prazo muito curto.
                    </p>
              </li>
            </ul>
          </LicoesAprendidas>

          <Titles>
            <h2 ref={Estagio_de_retencao}>Estágio de retenção</h2>
          </Titles>

          <p>
            Neste estágio um desenvolvedor continua a usar a plataforma, bem como recursos
            novos/adicionais e fornece novas contribuições. Porém o desenvolvedor conta com outras
            oportunidades em concorrentes, desta forma, neste estágio é importante valorizar o
            desenvolvedor para retê-lo em relação a monetização e oportunidades de benefícios e a
            própria cultura dentro do MSECO. São alguns facilitadores que ajudam o profissional de
            DevRel neste estágio: portfólio de dispositivos e aplicações móveis, certificação de
            contribuição, plano de negócios, modelo de geração de renda, acordos de níveis de
            qualidade e colaboração social.
          </p>
          <p>
            🎯 <b>Objetivos:</b> Fornecer impulso de ganho; Gerenciar mudança de plataforma; Apoiar
            contribuições de nicho; Permitir que os desenvolvedores trabalhem com as mais recentes e
            melhores tecnologias do ecossistema; Apoiar o desenvolvimento; e Analisar os
            desenvolvedores periféricos, ativos e de topo.
          </p>

          <Marco>
            <p>
              O marco que indica que o desenvolvedor já passou por este estágio é quando um
              desenvolvedor gerou contribuição considerada pela organização relevante para o
              ecossistema. Por exemplo, uma aplicação móvel que alcançou alta visibilidade, um recurso
              técnico que é muito utilizado pela comunidade ou uma correção de bug crítico em um
              projeto importante da plataforma.
            </p>
          </Marco>

          <LicoesAprendidas
            onClick={() => setShowLessons1(!showLessons1)}
          >
            <p className="Destaque">
              <span>{showLessons1 ? "-" : "+"}</span>{" "}
              Para este estágio há um conjunto de 10 lições aprendidas:
              </p>
            <ul style={showLessons1 ? styles.showLessons : styles.hideLessons}>
              <li>
                <p>
                  <b><i>LA31.</i></b> Concentre-se no valor para o desenvolvedor em qualquer conteúdo que você
                        esteja produzindo, seja em posts de blog, guias, etc. Isso significa que o foco
                        deve estar na resolução de problemas;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA32.</i></b> Reconheça as diversas motivações de cada membro da comunidade, pois
                        não existe um único tipo de desenvolvedor, e busque continuamente alinhar os
                        interesses de todos. Entenda e declare claramente o que a organização por meio
                        de um programa de fidelização de desenvolvedores está tentando alcançar. Isto
                        permitirá o suporte às metas de várias unidades de negócios. Experimente ter um
                        portfólio que inclua uma série de atividades, desde ganhos rápidos a projetos
                        grandes/importantes;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA33.</i></b> Chame a atenção dos desenvolvedores para o fato de que sua própria marca
                        crescerá com a quantidade de contribuições que eles entregaram e a fama que
                        recebem por isso;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA34.</i></b> Esteja presente no Stack Overflow. Você pode ver o que os desenvolvedores
                        escrevem sobre seu produto e, mesmo que outros desenvolvedores não
                        consigam ajudar uns aos outros, você pode entrar e ajudar alguém. Mostre que
                        você está lá para ajudá-los quando precisarem de você;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA35.</i></b> Fique de olho na competição. Faça um benchmark contra os principais
                        concorrentes para acompanhar as tendências ao longo do tempo. Além de ajudálo
                        a entender os líderes do setor, isso também ajuda a evitar as armadilhas para
                        a retenção de desenvolvedores;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA36.</i></b> Envolva os desenvolvedores em demonstrações e prévias de novos produtos
                        e ferramentas. Assim, além de terem acesso antecipado, eles ajudarão a
                        encontrar possíveis problemas para uso;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA37.</i></b> Analise as contribuições de seus desenvolvedores, escreva sobre e divulgue em canais oficiais e durante eventos;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA38.</i></b> Incentive os desenvolvedores a lerem “histórias de desenvolvedores”, um site
                        dedicado sobre como os desenvolvedores estão obtendo sucesso dentro
                        ecossistema. Pode ajudar os desenvolvedores a criar um negócio, não apenas
                        uma aplicação móvel;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA39.</i></b> Seja inclusivo compartilhando grandes bibliotecas de código aberto e
                        comunitárias como parte da solução. O Android tornou-se muito mais inclusivo
                        para a comunidade. O exemplo mais óbvio é o “abraço” do Kotlin e o trabalho
                        coletivo para torná-lo o melhor possível no Android;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA40.</i></b> Direcione os desenvolvedores, também, a se envolver com as comunidades
                        que fazem o trabalho em áreas específicas da plataforma (por exemplo,
                        fragmentação e construção de bibliotecas de suporte).
                    </p>
              </li>
            </ul>
          </LicoesAprendidas>

          <SwitchPages>
            <span>
              <a href="/modelo/Inicio">
                <i>&lt; Fase de início</i>
              </a>
            </span>
            <span>
              <a href="/modelo/Maturidade">
                <i>Fase de maturidade &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Fase_de_crescimento
              )}>
                Fase de crescimento
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(Estagio_de_ativacao)}>
                Estágio de ativação
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(Estagio_de_retencao)}>
                Estágio de retenção
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Crescimento;
