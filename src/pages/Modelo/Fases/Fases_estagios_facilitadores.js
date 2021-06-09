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
  SwitchPages
} from "../style";

function Fases_estagios_facilitadores() {
  const Fase_estagios_e_facilitadores = React.useRef();

  return (
    <>
      <Layout>
        <MainPageWrapper>
          <Titles>
            <h2 ref={Fase_estagios_e_facilitadores}>Fases, estágios e facilitadores</h2>
          </Titles>

          <p>
            🔍 Cada fase compreende um conjunto de Estágios de Avanço do Desenvolvedor.
            Cada um destes estágios colabora para um laço de feedback que aumenta tanto o
            conhecimento da organização sobre o SECO quanto dos desenvolvedores. Este laço de
            feedback apoia a organização central, assim como os desenvolvedores por meio da solução
            de problemas e da redução de riscos (situação de cooperação). O laço de feedback consiste
            no exercício contínuo de colher as percepções/expectativas dos desenvolvedores e facilitar
            com que sejam respondidas. Esta resposta pode ser tanto pela organização central, por
            meio dos profissionais de DevRel, quanto pela comunidade desenvolvedores.
          </p>
          <p>
            Cada um dos estágios está associado a um conjunto de facilitadores. Os
            <b><i>Facilitadores</i></b> são mecanismos da organização associados a cada estágio do progresso do
            desenvolvedor para ajudar os desenvolvedores a alcançarem seus próprios objetivos. O
            treinamento é um facilitador comum a todos os estágios que compõem o DevGo, uma vez
            que é um dos mecanismos principais de formação de desenvolvedores e de troca de
            conhecimento entre os profissionais de DevRel e os desenvolvedores. A cada um dos
            estágios ainda há um <b><i>marco</i></b> que pode ser uma das indicações de que o desenvolvedor já
            passou por um determinado estágio e avançará para o próximo.
          </p>

          <SwitchPages>
            <span>
              <a href="/modelo/monitoramento">
                <i>&lt; Minitoramento</i>
              </a>
            </span>
            <span>
              <a href="/modelo/inicio">
                <i>Fase de início &gt; </i>
              </a>
            </span>
          </SwitchPages>
        </MainPageWrapper>
        <AuxiliarBar>
          <AuxiliarBarSticky>
            <AuxiliarUl>
              <AuxiliarLink onClick={() => scrollToSection(Fase_estagios_e_facilitadores)}>
                Fases, estágios e facilitadores
              </AuxiliarLink>
            </AuxiliarUl>
          </AuxiliarBarSticky>
        </AuxiliarBar>
      </Layout>
    </>
  );
}

export default Fases_estagios_facilitadores;
