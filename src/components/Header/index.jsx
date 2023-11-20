import { FiSearch } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
    const { signOut } = useAuth();

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
                        <strong>Giselle Brasil</strong>
                    </div> 

                    <img src="https://github.com/Gisellebm.png" alt="Profile" />
                </Profile>
                
                <button onClick={signOut}>Sair</button>
            </content>
        </Container>
    )
}