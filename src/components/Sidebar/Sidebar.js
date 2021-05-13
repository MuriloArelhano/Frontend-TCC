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
                to="/modelo/Introducao" 
                style={teste.pathname === '/modelo/Introducao'? styles.active : null}
              >Modelo</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink 
                to="/modelo/Plataforma_e_produtos"
                style={teste.pathname === '/modelo/Plataforma_e_produtos'? styles.active : null}
              >
                  Área de foco: <i>plataforma e produtos</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Devrel_evangelismo_e_advocacia"
                style={teste.pathname === '/modelo/Devrel_evangelismo_e_advocacia'? styles.active : null}
              >
                Área de foco: <i>devrel (evangelismo e advocacia)</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Fluxo_de_avanco_do_desenvolvedor"
                style={teste.pathname === '/modelo/Fluxo_de_avanco_do_desenvolvedor'? styles.active : null}
              >
                Área de foco: <i>fluxo de avanço do desenvolvedor</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Monitoramento"
                style={teste.pathname === '/modelo/Monitoramento'? styles.active : null}  
              >
                Área de foco: <i>monitoramento</i>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Fases_estagios_facilitadores"
                style={teste.pathname === '/modelo/Fases_estagios_facilitadores'? styles.active : null}  
              >
                Fases, estágios e facilitadores
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Inicio"
                style={teste.pathname === '/modelo/Inicio'? styles.active : null}  
              >Fase de início</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Crescimento"
                style={teste.pathname === '/modelo/Crescimento'? styles.active : null}    
              >
                Fase de crescimento
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Maturidade"
                style={teste.pathname === '/modelo/Maturidade'? styles.active : null}  
              >
                Fase de maturidade
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink
                to="/modelo/Conclusao"
                style={teste.pathname === '/modelo/Conclusao'? styles.active : null}  
              >Conclusao</SidebarLink>
            </SidebarItem>
          </SidebarList>
        </Sticky>
      </Container>
    </>
  );
};

export default Sidebar;
