import { FiSearch } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container, Profile } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
import { Input } from "../Input";

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <content>
                <h1>RocketMovies</h1>

                <Input 
                        type="search" 
                        placeholder="Pesquisar pelo título"
                        icon={FiSearch} 
                    />
                
                <Profile to="/profile">
                    <div>
                        <strong>{user.name}</strong>
                    </div> 

                    <img src={avatarUrl} alt={user.name} />
                </Profile>
                
                <button onClick={signOut}>Sair</button>
            </content>
        </Container>
    )
}