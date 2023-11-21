import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/auth';
import { Container, Profile } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
import { Input } from "../Input";

export function Header({onChange}) {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>

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
                
                <button onClick={signOut}>Sair</button>
            </main>
        </Container>
    )
}

Header.propTypes = {
    onChange: PropTypes.func
}