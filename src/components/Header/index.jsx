import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <div>pesquisar</div>
            <Profile>
                <div>
                    <strong>Giselle Brasil</strong>
                    <button>Sair</button>
                </div> 

                <img src="https://github.com/Gisellebm.png" alt="Profile" />
            </Profile>
        </Container>
    )
}