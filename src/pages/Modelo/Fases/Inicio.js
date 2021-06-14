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
function Inicio() {
  const Fase_de_inicio = React.useRef();
  const Estagio_de_sensibilizacao = React.useRef();
  const Estagio_de_entrada = React.useRef();

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
            <h2 ref={Fase_de_inicio}>Fase de início</h2>
          </Titles>
          <p>
            🔍 Nesta fase, o desenvolvedor aprende sobre a cultura, costumes e realidades do
            ecossistema. É a fase da decisão em participar do ecossistema. O desenvolvedor é inserido
            no contexto da plataforma, dos produtos e da comunidade de desenvolvedores e usuários
            do ecossistema. Nesta fase, por exemplo, são importantes as informações sobre a base
            instalada de usuários (p.ex.: usuários que estão utilizando ativamente os produtos em torno
            da plataforma), dispositivos e ferramentas para desenvolvimento disponíveis. Para isto, esta
            fase envolve dois estágios: Sensibilização e Entrada. A fase de início envolve o trabalho de
            evangelismo pelos profissionais de DevRel.
          </p>

          <Titles>
            <h2 ref={Estagio_de_sensibilizacao}>Estágio de sensibilização</h2>
          </Titles>
          <p>
            Neste estágio, a organização central, por meio de sua equipe de DevRel, deve
            mostrar ao desenvolvedor que o ecossistema é atrativo para as expectativas dele. Essa
            sensibilização pode acontecer, também, por meio dos seguintes facilitadores: roadmap de
            produtos, eventos (hackathons, conferências, palestras, meetups) e mídias sociais.
          </p>

          <p>
            🎯 <b>Objetivos:</b> Anunciar roadmap de dispositivos que serão lançados no mercado e
              ferramentas de desenvolvimento; Atrair desenvolvedores por meio de conferências,
              hackathons, palestras, redes sociais e propagandas; Comunicar ajustes na plataforma;
              Envolver líderes técnicos e desenvolvedores que atuam como influenciadores dentro do
              ecossistema.
          </p>

          <Marco>
            <p>
              O marco que indica que o desenvolvedor já passou por este estágio é quando um
              desenvolvedor se associa ao ecossistema por meio de inscrição (p.ex.: cadastro em portal
              de desenvolvedores ou cadastro para submissão de contribuição).
            </p>
          </Marco>

          <LicoesAprendidas
            onClick={() => setShowLessons(!showLessons)}
          >
            <p className="Destaque">
              <span>{showLessons ? "-" : "+"}</span> Para este estágio há um conjunto de 17 lições aprendidas:
            </p>
            <ul style={showLessons ? styles.showLessons : styles.hideLessons}>
              <li>
                <p>
                  <b><i>LA1.</i></b> Divulgue os eventos (mídias sociais). Para isso, crie uma matriz de
                        proposição de valor - para os desenvolvedores, organização e comunidade. Os
                        eventos são como um produto, em vez de uma “atividade” única.
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA2.</i></b> Defina uma abordagem estruturada para a aprendizagem avançada, por
                        exemplo, ferramentas como Udacity pode ser uma tentativa;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA3.</i></b> Fomente grupos de discussão online para abordar novos produtos. Podcasts,
                        blogposts, boletins informativos são bons para compartilhar uma mensagem. É
                        fundamental para entender os desenvolvedores quer para melhorar seus
                        produtos de desenvolvedor. Você descobrirá rapidamente os principais pontos
                        problemáticos;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA4.</i></b> Planeje iniciativas educacionais como laboratórios de codificação, workshops,
                        hackathons, webinars, etc. Permita um tempo de planejamento adicional caso o
                        evento aconteça durante uma época movimentada do ano;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA5.</i></b> Crie listas de discussão segmentadas com base em experiência e interesse.
                        Isto ajudará a personalizar e-mails e informações favorecendo a criação e
                        suporte de variados nichos. Isto facilitará sua resposta rápida aos
                        desenvolvedores;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA6.</i></b> Execute a codificação ao vivo ao conduzir uma palestra pois é uma maneira
                        incrível de mostrar como é fácil implementar e usar um determinado SDK ou API;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA7.</i></b> Forneça links para seus produtos e canais oficiais de comunicação tanto em
                        material online quanto em ações presenciais. Isto deve ser acessível sem
                        registro;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA8.</i></b> Liste e divulgue todos os eventos que você está apoiando, planejando visitar, etc;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA9.</i></b> Envolva-se com seus desenvolvedores em seu habitat nativo (ou seja,
                        universidades, conferências de desenvolvedores) priorizando a criação de nicho.
                        Você precisa colher feedback para equipe do produto e ajudar a priorizar o
                        rodmap;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA10.</i></b> Comunique-se com seu público (crescente) através de mídias sociais, blogs,
                        fóruns e canais do Slack. Qualquer que seja a sua escolha, você precisa
                        administrá-la bem e se comunicar ainda melhor. Conceda uma mensagem de
                        para cada produto e grupo de desenvolvedores. Estabelecer periodicidade é uma
                        ótima ideia, porque as pessoas saberão que você está mantendo um canal de
                        comunicação sério;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA11.</i></b> Considere o trabalho conjunto com desenvolvedores e empresas parceiras
                        durante o planejamento de eventos presenciais. Isto imediatamente expande a
                        comunidade antes mesmo de você realizar o evento. Crie um plano de
                        divulgação mostrando a equipe de DevRel que estará presente e o logotipo da
                        organização. As pessoas se acostumarão com essas duas imagens e, quando o
                        evento acontecer, os desenvolvedores reconhecerão a sua equipe de DevRel e
                        já confiará nela;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA12.</i></b> Considere lançar e divulgar os produtos sob uma licença de código aberto, a menos que haja uma razão convincente para não o fazer;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA13.</i></b> Converse com os desenvolvedores durante um evento. Mesmo que não
                        resulte em conversão em contribuição, qualquer interação ou assistência positiva,
                        no mínimo, cria uma imagem positiva de sua empresa. Isto pode resultar
                        indiretamente na adoção futura de produtos por essas mesmas pessoas ou por
                        alguém que eles recomendam seu produto;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA14.</i></b> Disponibilize seus slides de apresentações de forma editável à comunidade
                        onde entregou um evento. Dessa forma, a comunidade pode reutilizá-los e
                        traduzi-los;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA15.</i></b> Saiba o máximo que puder sobre seus produtos e os represente de uma
                        forma tecnicamente confiável. Pois os desenvolvedores sempre têm a opção de
                        encontrar artigos sobre seus produtos em canais de terceiros;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA16.</i></b> Pergunte aos seus desenvolvedores o que eles querem ler. Isto pode ser feito
                        em mídias sociais. Além de suas mídias sociais, use as contas da área de
                        DevRel para que outros profissionais da equipe possam dar suporte;
                    </p>
              </li>
              <li>
                <p>
                  <b><i>LA17.</i></b> Priorize divulgação de conteúdo relacionado aos produtos por meio de
                        ferramentas SEO e de palavras-chave, como: keyword.io, keywordtool.io, Google
                        AdWords Keyword Planner e Google Webmaster Tools.
                    </p>
              </li>
            </ul>
          </LicoesAprendidas>

          <Titles>
            <h2 ref={Estagio_de_entrada}>Estágio de entrada</h2>
          </Titles>

          <p>
            Este estágio está relacionado ao objetivo do desenvolvedor de gerar alguma
            contribuição para o ecossistema ou para sua carreira profissional. Aqui o desenvolvedor
            passou pelo estágio de sensibilização e possui alguma motivação em atuar no SECO.
            Neste estágio o desenvolvedor é considerado novato em algum produto do ecossistema
            pois está iniciando sua possível contribuição. Desta forma é importante reduzir as barreiras
            para a participação deste desenvolvedor.
          </p>
          <p>
            O profissional de DevRel pode se utilizar do seguinte conjunto de facilitadores:
            pacote de benefícios, taxas de parceria e suporte técnico.
          </p>
          <p>
            🎯 <b>Objetivos:</b> Estabelecer parceria; Manter capacidade de absorção de novos e/ou
              potenciais desenvolvedores; Apoiar o desenvolvimento; Apoiar as negociações; Propiciar a
              conexão entre desenvolvedores novatos e desenvolvedores experientes.
          </p>

          <Marco>
            <p>
              O marco que indica que o desenvolvedor já passou por este estágio é quando um
              desenvolvedor está com uma contribuição pronta em nível de submissão para algum dos
              repositórios do SECO.
            </p>
          </Marco>

          <LicoesAprendidas
            onClick={() => setShowLessons1(!showLessons1)}
          >
            <p className="Destaque">
              <span>{showLessons1 ? "-" : "+"}</span> Para este estágio há um conjunto de 7 lições aprendidas:
              </p>
            <ul style={showLessons1 ? styles.showLessons : styles.hideLessons}>
              <li>
                <p>
                  <b><i>LA18.</i></b> Construa, atualize e compartilhe um conjunto bem projetado de ferramentas de apoio ao desenvolvedor;
                  </p>
              </li>
              <li>
                <p>
                  <b><i>LA19.</i></b> Concentre-se em indivíduos que tenham interesse perceptível em uma tecnologia ou abordagem específica entre os produtos do ecossistema;
                      </p>
              </li>
              <li>
                <p>
                  <b><i>LA20.</i></b> Comunique os benefícios econômicos de construir e desenvolver contribuições;
                      </p>
              </li>
              <li>
                <p>
                  <b><i>LA21.</i></b> Ajude os desenvolvedores a se sentirem em casa quando interagirem com a
                  equipe DevRel ou com os serviços e produtos da SECO, mesmo se o
                  desenvolvedor já for contribuidor de outro ecossistema;
                      </p>
              </li>
              <li>
                <p>
                  <b><i>LA22.</i></b> Direcione os desenvolvedores a se envolver em comunidades em torno de algo tangencial aos seus produtos;
                      </p>
              </li>
              <li>
                <p>
                  <b><i>LA23.</i></b> Crie e mantenha a documentação de seus produtos. Torne as informações fáceis de encontrar e entender;
                      </p>
              </li>
              <li>
                <p>
                  <b><i>LA24.</i></b> Insira o desenvolvedor um programa de fidelização completo para
                  desenvolvedores - que ofereça suporte e engaje os desenvolvedores,
                  adicionando valor tanto para o desenvolvedor quanto para a organização.
                      </p>
              </li>
            </ul>
          </LicoesAprendidas>

          <SwitchPages>
            <span>
              <a href="/modelo/fases-estagios-facilitadores">
                <i>&lt; Fases, estágios e facilitadores</i>
              </a>
            </span>
            <span>
              <a href="/modelo/crescimento">
                <i>Fase de crescimento &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Fase_de_inicio)}>
                Fase de início
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(Estagio_de_sensibilizacao)}>
                Estágio de sensibilização
              </AuxiliarLink>
              <AuxiliarLink onClick={() => scrollToSection(Estagio_de_entrada)}>
                Estágio de entrada
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Inicio;
