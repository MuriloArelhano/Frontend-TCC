import React from 'react';
// styles
import { StageBox } from './styles';

const Stage = () => {
    return (
        <StageBox>
            <div className="box-header">Estágio de Retenção</div>
            <div className="box-body">
                <div className="default-box box-info">
                    <p>
                        Os formulários que seguem tem como objetivo a seleção de elementos para cada <strong>área de foco </strong>
                        visando a <strong>retenção de desenvolvedores</strong> 
                    </p>
                </div>

                <div className="focus-area-container">
                    <div className="default-box focus-area">
                        <p>Plataforma e Produtos</p>
                    </div>

                    <div className="default-box focus-area">
                        <p>Plataforma e Produtos</p>
                    </div>

                    <div className="default-box focus-area">
                        <p>Plataforma e Produtos</p>
                    </div>

                    <div className="default-box focus-area">
                        <p>Plataforma e Produtos</p>
                    </div>
                </div>
            </div>
        </StageBox>
    );
}

export default Stage;