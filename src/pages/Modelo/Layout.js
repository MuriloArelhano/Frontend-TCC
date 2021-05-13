/*eslint eqeqeq:0*/
import React from "react";
import { Sidebar, Navbar, Footer } from "../../components";
import {
    Container
} from "./style";

const Layout = ({children}) => {
    return (
        <>
            <Navbar position={false} />
            <Container>
                <Sidebar />
                {children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout;
