import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Container, Profile } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function Header({onChange}) {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();

    function handleBack() {
      navigate(-1);
    }

    return (
        <Container>
            <main>
                <ButtonText className="title" title={'RocketMovies'} onClick={handleBack}/>

                <Input 
                        type="search" 
                        placeholder="Pesquisar pelo título"
                        icon={FiSearch} 
                        onChange={onChange}
                    />
                
                <Profile to="/profile">
                    <div>
                        <strong>{user.name}</strong>
                    </div> 

                    <img src={avatarUrl} alt={user.name} />
                </Profile>
                
                <button className='sair' onClick={signOut}>Sair</button>
            </main>
        </Container>
    )
}

Header.propTypes = {
    onChange: PropTypes.func
}