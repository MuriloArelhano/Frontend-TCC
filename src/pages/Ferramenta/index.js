import React from "react";
import { Navbar, Footer } from "../../components";

import {
  Container,
  Descricao,
  ModeloWrapper,
  AreaDeFocoWrapper,
  Title,
  Content,
  MiniCard,
  MiniCardIMG,
  MiniCardSubtitle,
  Card,
  CardTitle,
  CardContent,
  Guideline,
  VerticalText,
  ImgLoop,
  LegendaWrapper,
  FirstRow,
  SecondRow,
  Element,
  ElementFigure,
  ElementText,
} from "./style";

const Ferramenta = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Descricao>
          <h3>
            Clique nos ícones do modelo para filtrar informações importantes de
            cada etapa
          </h3>
        </Descricao>
        <ModeloWrapper>
          <VerticalText>
            Objetos de Transferência de Valor (Descritos no Mapa Mental)
          </VerticalText>

          <Guideline>
            <span className="arrowUp"></span>
            <span className="arrowDown"></span>
          </Guideline>

          <AreaDeFocoWrapper>
            <Title>[ÁREA DE FOCO] PLATAFORMA E PRODUTOS</Title>
            <ImgLoop>
              <img alt="" src={require("../../images/mainloop.png").default} />
            </ImgLoop>
          </AreaDeFocoWrapper>
          <AreaDeFocoWrapper>
            <Title>[ÁREA DE FOCO] DEVREL(EVANGELISMO E ADVOCACIA)</Title>
            <Content>
              <MiniCard>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/talk_alone.png").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>EVANGELISMO</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/talk_group.png").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>ADVOCACIA</span>
                </MiniCardSubtitle>
              </MiniCard>
            </Content>
            <ImgLoop>
              <img alt="" src={require("../../images/mainloop.png").default} />
            </ImgLoop>
          </AreaDeFocoWrapper>
          <AreaDeFocoWrapper>
            <Title>[ÁREA DE FOCO] FLUXO DE AVANÇO DO DESENVOLVEDOR</Title>
            <Content>
              <Card>
                <CardTitle>
                  <span>FASE: INÍCIO</span>
                </CardTitle>
                <CardContent>
                  <MiniCard>
                      <MiniCardIMG>
                        <div>
                          <img
                            alt=""
                            src={require("../../images/speaker.png").default}
                          />
                        </div>
                      </MiniCardIMG>
                      <MiniCardSubtitle>
                        <span>SENSIBILIZAÇÃO</span>
                      </MiniCardSubtitle>
                    <div className="lessons">
                      LA1 - LA17
                    </div>
                  </MiniCard>
                  <MiniCard>
                    <MiniCardIMG>
                      <div>
                        <img alt="" src={require("../../images/rocket.png").default} />
                      </div>
                    </MiniCardIMG>
                    <MiniCardSubtitle>
                      <span>ENTRADA</span>
                    </MiniCardSubtitle>
                    <div className="lessons">
                      LA18 - LA24
                    </div>
                  </MiniCard>
                </CardContent>
              </Card>
              <Card>
                <CardTitle>
                  <span>FASE: CRESCIMENTO</span>
                </CardTitle>
                <CardContent>
                  <MiniCard>
                    <MiniCardIMG>
                      <div>
                        <img alt="" src={require("../../images/box.png").default} />
                      </div>
                    </MiniCardIMG>
                    <MiniCardSubtitle>
                      <span>ATIVAÇÃO</span>
                    </MiniCardSubtitle>
                    <div className="lessons">
                      LA25 - LA30
                    </div>
                  </MiniCard>
                  <MiniCard>
                    <MiniCardIMG>
                      <div>
                        <img alt="" src={require("../../images/tool.png").default} />
                      </div>
                    </MiniCardIMG>
                    <MiniCardSubtitle>
                      <span>RETENÇÃO</span>
                    </MiniCardSubtitle>
                    <div className="lessons">
                      LA31 - LA40
                    </div>
                  </MiniCard>
                </CardContent>
              </Card>
              <Card>
                <CardTitle>
                  <span>FASE: MATURIDADE</span>
                </CardTitle>
                <CardContent>
                  <MiniCard>
                    <MiniCardIMG>
                      <div>
                        <img alt="" src={require("../../images/reward.png").default} />
                      </div>
                    </MiniCardIMG>
                    <MiniCardSubtitle>
                      <span>RECONHECIMENTO</span>
                    </MiniCardSubtitle>
                    <div className="lessons">
                      LA41 - LA51
                    </div>
                  </MiniCard>
                  <MiniCard>
                    <MiniCardIMG>
                      <div>
                        <img
                          alt=""
                          src={require("../../images/reference.png").default}
                        />
                      </div>
                    </MiniCardIMG>
                    <MiniCardSubtitle>
                      <span>REFERÊNCIA</span>
                    </MiniCardSubtitle>
                    <div className="lessons">
                      LA52 - LA62
                    </div>
                  </MiniCard>
                </CardContent>
              </Card>
            </Content>
            <ImgLoop>
              <img alt="" src={require("../../images/mainloop.png").default} />
            </ImgLoop>
          </AreaDeFocoWrapper>
          <AreaDeFocoWrapper>
            <Title>[ÁREA DE FOCO] MONITORAMENTO</Title>
            <Content>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Perguntas & Respostas</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Loja de Aplicações</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Lista de E-mails e fóruns</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Ambiente Social de Codificação</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Website Social de Notícias</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Redes Sociais</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Comunicação do Time</span>
                </MiniCardSubtitle>
              </MiniCard>
              <MiniCard monitoramento>
                <MiniCardIMG>
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </MiniCardIMG>
                <MiniCardSubtitle color margin>
                  <span>Painel de Controle do Desenvolvedor</span>
                </MiniCardSubtitle>
              </MiniCard>
            </Content>
          </AreaDeFocoWrapper>
        </ModeloWrapper>
        <LegendaWrapper>
          <FirstRow>
            <Element>
              <ElementFigure>
                <div className="estagio" />
              </ElementFigure>
              <ElementText>Estágio de progresso do desenvolvedor</ElementText>
            </Element>
            <Element>
              <ElementFigure>
                <div className="fase" />
              </ElementFigure>
              <ElementText>Fase de governança do desenvolvedor</ElementText>
            </Element>
            <Element>
              <ElementFigure>
                <div className="licoes">
                  <p>LA - Lições Aprendidas</p>
                </div>
              </ElementFigure>
            </Element>
          </FirstRow>
          <SecondRow>
            <Element>
              <ElementFigure>
                <div className="repositorio">
                  <img alt="" src={require("../../images/databasee.svg").default} />
                </div>
              </ElementFigure>
              <ElementText>Categoria de Repositório</ElementText>
            </Element>
            <Element>
              <ElementFigure>
                <div className="feedback">
                  <img alt="" src={require("../../images/mainloop.png").default} />
                </div>
              </ElementFigure>
              <ElementText>Laço de Feedback</ElementText>
            </Element>
          </SecondRow>
        </LegendaWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Ferramenta;
