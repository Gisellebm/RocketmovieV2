import { FiSearch } from 'react-icons/fi';
import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
    return (
        <Container>
            <content>
                <h1>RocketMovies</h1>

                <Input 
                        type="search" 
                        placeholder="Pesquisar pelo título"
                        icon={FiSearch} 
                    />
                
                <Profile>
                    <div>
                        <strong>Giselle Brasil</strong>
                        <button>Sair</button>
                    </div> 

                    <img src="https://github.com/Gisellebm.png" alt="Profile" />
                </Profile>
            </content>
        </Container>
    )
}