import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
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
              DevGo
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
              <NavItem>
                <NavLinks 
                  to="/ferramenta"
                  style={teste.pathname === '/ferramenta'? styles.active : null}  
                  onClick={closeMobileMenu}
                >Ferramenta</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/formulario" onClick={closeMobileMenu}>Formulário</NavLinks>
              </NavItem>
              {!context.user && (
                <>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/entrar" onClick={closeMobileMenu}>
                        <Button primary>Log in</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to="/entrar" onClick={closeMobileMenu}>
                        <Button fontBig primary>
                          Log in
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/cadastro" onClick={closeMobileMenu}>
                        <Button primary>Sign up</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to="/cadastro" onClick={closeMobileMenu}>
                        <Button fontBig primary>
                          Sign up
                        </Button>
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
