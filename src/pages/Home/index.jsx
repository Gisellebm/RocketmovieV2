import { FiPlus } from "react-icons/fi";
import { Container, Title, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
    return (
        <Container>
            <Header />

            <main>
                <Title>
                    <h1>Meus filmes</h1>
                    <NewMovie to="/new">
                        <FiPlus />
                        Adicionar filme
                    </NewMovie>
                </Title>

                <Content>
                    <Movie  data={{
                        title: 'Interestellar',
                        tags: [
                            {
                                id: 1,
                                name: 'Ficção Científica'
                            },
                            {
                                id: 2,
                                name: 'Drama'
                            },
                            {
                                id: 3,
                                name: 'Família'
                            }
                        ]
                    }}
                    />

<Movie  data={{
                        title: 'Interestellar',
                        tags: [
                            {
                                id: 1,
                                name: 'Ficção Científica'
                            },
                            {
                                id: 2,
                                name: 'Drama'
                            },
                            {
                                id: 3,
                                name: 'Família'
                            }
                        ]
                    }}
                    />
                </Content>
            </main>
        </Container>
    )
}