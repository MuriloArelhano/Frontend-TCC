import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Ferramenta from "./pages/Ferramenta/index";
import Introducao from "./pages/Modelo/Area_de_foco/Introducao";
import Plataforma_e_produtos from "./pages/Modelo/Area_de_foco/Plataforma_e_produtos";
import Devrel_evangelismo_e_advocacia from "./pages/Modelo/Area_de_foco/Devrel_evangelismo_e_advocacia";
import Fluxo_de_avanco_do_desenvolvedor from "./pages/Modelo/Area_de_foco/Fluxo_de_avanco_do_desenvolvedor";
import Monitoramento from "./pages/Modelo/Area_de_foco/Monitoramento";
import Fases_estagios_facilitadores from "./pages/Modelo/Fases/Fases_estagios_facilitadores";
import Inicio from "./pages/Modelo/Fases/Inicio";
import Crescimento from "./pages/Modelo/Fases/Crescimento";
import Maturidade from "./pages/Modelo/Fases/Maturidade";
import Conclusao from "./pages/Modelo/Fases/Conclusao";



function App() {
  return (
    <>
      <Router >
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/log-in" exact component={LogIn} />
          <Route path="/ferramenta/index" exact component={Ferramenta} />
          <Route path="/modelo/Introducao" exact component={Introducao} />
          <Route path="/modelo/Plataforma_e_produtos" exact component={Plataforma_e_produtos} />
          <Route path="/modelo/Devrel_evangelismo_e_advocacia" exact component={Devrel_evangelismo_e_advocacia} />
          <Route path="/modelo/Fluxo_de_avanco_do_desenvolvedor" exact component={Fluxo_de_avanco_do_desenvolvedor} />
          <Route path="/modelo/Monitoramento" exact component={Monitoramento} />
          <Route path="/modelo/Fases_estagios_facilitadores" exact component={Fases_estagios_facilitadores} />
          <Route path="/modelo/Inicio" exact component={Inicio} />
          <Route path="/modelo/Crescimento" exact component={Crescimento} />
          <Route path="/modelo/Maturidade" exact component={Maturidade} />
          <Route path="/modelo/Conclusao" exact component={Conclusao} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
