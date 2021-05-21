import React from "react";
import {useLocation} from "react-router-dom";

import {
  Container,
  Sticky,
  SidebarList,
  SidebarItem,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = () => {
  const teste = useLocation();
  const styles = {
    active: {
      backgroundColor: "#e6f7ff",
      borderRight: "3px solid #1890ff"
    }
  }
  // console.log(teste);

  return (
    <>
      <Container>
        <Sticky>
          <SidebarList>
            <SidebarItem>
              <SidebarLink 
                to="/modelo/introducao" 
                style={teste.pathname === '/modelo/introducao'? styles.active : null}
              >Modelo</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink 
                to="/modelo/plataforma-e-produtos"
                style={teste.pathname === '/modelo/plataforma-e-produtos'? styles.active : null}
              >
                  Área de foco: <i>plataforma e produtos</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/devrel-evangelismo-e-advocacia"
                style={teste.pathname === '/modelo/devrel-evangelismo-e-advocacia'? styles.active : null}
              >
                Área de foco: <i>devrel (evangelismo e advocacia)</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/fluxo-de-avanco-do-desenvolvedor"
                style={teste.pathname === '/modelo/fluxo-de-avanco-do-desenvolvedor'? styles.active : null}
              >
                Área de foco: <i>fluxo de avanço do desenvolvedor</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/monitoramento"
                style={teste.pathname === '/modelo/monitoramento'? styles.active : null}  
              >
                Área de foco: <i>monitoramento</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/fases-estagios-facilitadores"
                style={teste.pathname === '/modelo/fases-estagios-facilitadores'? styles.active : null}  
              >
                Fases, estágios e facilitadores
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/inicio"
                style={teste.pathname === '/modelo/inicio'? styles.active : null}  
              >Fase de início</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/crescimento"
                style={teste.pathname === '/modelo/crescimento'? styles.active : null}    
              >
                Fase de crescimento
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/maturidade"
                style={teste.pathname === '/modelo/maturidade'? styles.active : null}  
              >
                Fase de maturidade
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/conclusao"
                style={teste.pathname === '/modelo/conclusao'? styles.active : null}  
              >Conclusao</SidebarLink>
            </SidebarItem>
          </SidebarList>
        </Sticky>
      </Container>
    </>
  );
};

export default Sidebar;
