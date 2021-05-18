import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
// styles
import { StageBox } from './styles';

const Stage = memo(({ areas, sectionName, defaultName }) => {
    const history = useHistory();

    const handleClickArea = (area) => {
        history.push(`/formulario/${defaultName}/${area}`);
    }

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
                        <div className="default-box focus-area" onClick={() => handleClickArea(key)}>
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