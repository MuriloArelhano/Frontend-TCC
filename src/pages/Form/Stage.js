import React, { memo } from 'react';
// styles
import { StageBox } from './styles';

const Stage = memo(({ areas, sectionName }) => {
    return (
        <StageBox>
            <div className="box-header">Estágio de {sectionName}</div>
            <div className="box-body">
                <div className="default-box box-info">
                    <p>
                        Os formulários que seguem tem como objetivo a seleção de elementos para cada <strong>área de foco </strong>
                        visando a <strong>{String(sectionName || '').toLowerCase()} de desenvolvedores</strong> 
                    </p>
                </div>

                <div className="focus-area-container">
                    {Object.keys(areas).map(key => (
                        <div className="default-box focus-area">
                            <div className="text">
                                <p>{areas[key].name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StageBox>
    );
})

export default Stage;