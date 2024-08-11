import Logo from '../../../project_marvel/src/assets/logo/Group.png';
import { SearchForm } from '../components/SearchForm';

export const Header: React.FC = () => (
    <header>
        <span><img src={Logo} alt="Logo Marvel" /></span>
        <h1>EXPLORE O UNIVERSO</h1>
        <h3>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</h3>
    </header>
);