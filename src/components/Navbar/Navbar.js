import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import { ButtonNav, ButtonLogin } from "./NavbarElements";
import {useLocation} from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./NavbarElements";
// context
import { Context } from '../../contexts/global';

const Navbar = ({position}) => {
  const context = useContext(Context);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const teste = useLocation();
  const styles = {
    active: {
      borderBottom: "4px solid #4b59f7"
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <Nav position={position}>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Go DevRel
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              <NavItem>
                <NavLinks 
                  to="/" 
                  style={teste.pathname === '/'? styles.active : null} 
                  onClick={closeMobileMenu}
                >Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/modelo/introducao"
                  style={teste.pathname.includes("modelo") ? styles.active : null} 
                  onClick={closeMobileMenu}
                >Modelo</NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks 
                  to="/ferramenta"
                  style={teste.pathname === '/ferramenta'? styles.active : null}  
                  onClick={closeMobileMenu}
                >Ferramenta</NavLinks>
              </NavItem> */}
              <NavItem>
                <NavLinks to="/formulario" 
                style={teste.pathname.includes('formulario') ? styles.active : null}
                onClick={closeMobileMenu}>Formulário</NavLinks>
              </NavItem>
              {!context.user && (
                <>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/entrar" onClick={closeMobileMenu}>
                        <ButtonLogin>Log in</ButtonLogin>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to="/entrar" onClick={closeMobileMenu}>
                        <ButtonLogin fontBig big primary>
                          Log in
                        </ButtonLogin>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/cadastro" onClick={closeMobileMenu}>
                        <ButtonNav primary>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Sign up
                        </ButtonNav>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to="/cadastro" onClick={closeMobileMenu}>
                        <ButtonNav fontBig primary>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Sign up
                        </ButtonNav>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                </>
              )}
              {context.user && (
                <NavBtnLink to="/conta" onClick={closeMobileMenu}>
                  <Button fontBig primary>
                    <p style={{ color: 'white' }}>{context.user.email}</p>
                  </Button>
                </NavBtnLink>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
