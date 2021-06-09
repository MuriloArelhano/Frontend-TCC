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
  LinkPostion,
  UlConclusao
} from "../style";

const Conclusao = () => {
  const Conclusoes_e_implicacoes_devgo = React.useRef();

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles ref={Conclusoes_e_implicacoes_devgo}>
            <h2>Conclusões e Implicações do DEVGO</h2>
          </Titles>

          <p>
            🔍 O DevGo descreve como as relações ganha-ganha entre os desenvolvedores e uma
            organização central podem favorecer a sustentabilidade do ecossistema por meio dos
            desenvolvedores e da organização, representada pela equipe de profissionais de DevRel.
            Esse cenário ganha-ganha é percebido no DevGo por meio do loop de feedback envolvendo
            repositórios de dados dentro da área de foco “Monitoramento” que contêm a “voz dos
            desenvolvedores” e os objetivos da organização central. O uso de repositórios de dados no
            modelo pode formar a base sob mecanismos e ferramentas de avaliação maduros para
            grandes ecossistemas.
        </p>
          <p>
            O DevGo pode suportar demandas do setor, tais como: ROI (Retorno sobre o
            Investimento, do inglês Return On Investment) em atividades de relações com
            desenvolvedores; efeitos na experiência do desenvolvedor; e identificação de barreiras para
            a participação do desenvolvedor. O uso do DEVGO também pode contribuir para ampliar os
            esforços nas equipes de DevRel. O uso do modelo do DEVGO pode ajudar quando:
        </p>

          <UlConclusao>
            <li>
              <p>
                <b>Não há programa de DevRel:</b> conhecimento das áreas essenciais para planejar
                    e iniciar um programa de governança de desenvolvedores por meio de DevRel;
                </p>
            </li>
            <li>
              <p>
                <b>Estratégias de DevRel em nível básico, documentado e definido):</b>
                    identificação de onde a organização está e onde ela pode ir;
                </p>
            </li>
            <li>
              <p>
                <b>Estratégias próprias de DevRel:</b> guia em decisões envolvendo riscos e
                    tendências para manter a competitividade em relação a outras organizações;
                </p>
            </li>
            <li>
              <p>
                <b>Monitoramento e controle:</b> uso mais focado na área de Monitoramento para
                    formar uma base sólida de mecanismos de avaliação e ferramentas para
                    SECOs com base mais extensa de desenvolvedores;
                </p>
            </li>
            <li>
              <p>
                <b>Introdução de estratégias inovadoras para melhor atender às metas da
                    organização:</b> apoio às organizações na evolução das estratégias de governança
                    do desenvolvedor, dimensionar esforços e formar equipes internas.
                </p>
            </li>
          </UlConclusao>

          <SwitchPages>
            <LinkPostion linkPosition={true}>
              <span>
                <a href="/modelo/maturidade">
                  <i>&lt; Fase de maturidade</i>
                </a>
              </span>
            </LinkPostion>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Conclusoes_e_implicacoes_devgo)}>
                Conclusões e Implicações do Devgo
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
};

export default Conclusao;
