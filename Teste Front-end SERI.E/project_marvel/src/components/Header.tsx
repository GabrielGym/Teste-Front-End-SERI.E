import { HeaderStyles } from '../styles/HeaderStyles'
import Logo from '../../../project_marvel/src/assets/logo/Group.png';

export const Header: React.FC = () => (
    <HeaderStyles>
        <span><img src={Logo} alt="Logo Marvel" /></span>
        <h1 className='title'>EXPLORE O UNIVERSO</h1>
        <h3>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</h3>
    </HeaderStyles>
);