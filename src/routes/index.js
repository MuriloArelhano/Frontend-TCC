import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from "../pages/HomePage/Home";
import Products from "../pages/Products/Products";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Ferramenta from "../pages/Ferramenta/index";
import Introducao from "../pages/Modelo/Area_de_foco/Introducao";
import Plataforma_e_produtos from "../pages/Modelo/Area_de_foco/Plataforma_e_produtos";
import Devrel_evangelismo_e_advocacia from "../pages/Modelo/Area_de_foco/Devrel_evangelismo_e_advocacia";
import Fluxo_de_avanco_do_desenvolvedor from "../pages/Modelo/Area_de_foco/Fluxo_de_avanco_do_desenvolvedor";
import Monitoramento from "../pages/Modelo/Area_de_foco/Monitoramento";
import Fases_estagios_facilitadores from "../pages/Modelo/Fases/Fases_estagios_facilitadores";
import Inicio from "../pages/Modelo/Fases/Inicio";
import Crescimento from "../pages/Modelo/Fases/Crescimento";
import Maturidade from "../pages/Modelo/Fases/Maturidade";
import Conclusao from "../pages/Modelo/Fases/Conclusao";
import Account from "../pages/Account";
import Form from '../pages/Form';
import FormPage from '../pages/Form/FormPage';

import { Context } from '../contexts/global';

const Routes = () => {
    const context = useContext(Context);
    const accountRoutes = ["/conta", "/conta/trocar-senha", "/conta/painel-administrativo"];
    !context.userIsAdmin && accountRoutes.pop();

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro" exact component={SignUp} isAuth />
            <Route path="/entrar" exact component={LogIn} isAuth />
            <Route path="/ferramenta" exact component={Ferramenta} />
            <Route path="/modelo/introducao" exact component={Introducao} />
            <Route path="/modelo/plataforma-e-produtos" exact component={Plataforma_e_produtos} />
            <Route path="/modelo/devrel-evangelismo-e-advocacia" exact component={Devrel_evangelismo_e_advocacia} />
            <Route path="/modelo/fluxo-de-avanco-do-desenvolvedor" exact component={Fluxo_de_avanco_do_desenvolvedor} />
            <Route path="/modelo/monitoramento" exact component={Monitoramento} />
            <Route path="/modelo/fases-estagios-facilitadores" exact component={Fases_estagios_facilitadores} />
            <Route path="/modelo/inicio" exact component={Inicio} />
            <Route path="/modelo/crescimento" exact component={Crescimento} />
            <Route path="/modelo/maturidade" exact component={Maturidade} />
            <Route path="/modelo/conclusao" exact component={Conclusao} />
            <Route path="/formulario" component={Form} />
            {/* rotas privadas */}
            <Route path={accountRoutes} component={Account} isPrivate />
            <Route path="/formulario/:stage/:area" component={FormPage} isPrivate />
        </Switch>
    );
}

export default Routes;