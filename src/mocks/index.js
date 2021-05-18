import sensibilizacao from './sensibilizacao';
import entrada from './entrada';
import ativacao from './ativacao';
import retencao from './retencao';
import reconhecimento from './reconhecimento';
import referencia from './referencia';
// images
import sensibilityImg from '../images/speaker.png';
import entranceImg from '../images/rocket.png';
import activationImg from '../images/box.png';
import retentionImg from '../images/tool.png';
import rewardImg from '../images/reward.png';
import referenceImg from '../images/reference.png';

export function getStages() {
    return [
        { id: sensibilizacao.initials, defaultName: 'sensibilizacao', name: 'Sensibilização', stage: sensibilizacao, image: sensibilityImg },
        { id: entrada.initials, defaultName: 'entrada', name: 'Entrada', stage: entrada, image: entranceImg },
        { id: ativacao.initials, defaultName: 'ativacao', name: 'Ativação', stage: ativacao, image: activationImg },
        { id: retencao.initials, defaultName: 'retencao', name: 'Retenção', stage: retencao, image: retentionImg },
        { id: reconhecimento.initials, defaultName: 'reconhecimento', name: 'Reconhecimento', stage: reconhecimento, image: rewardImg },
        { id: referencia.initials, defaultName: 'referencia', name: 'Referência', stage: referencia, image: referenceImg }
    ]
}
