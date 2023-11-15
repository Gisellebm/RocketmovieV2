import { Container, Title, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
    return (
        <Container>
            <Header />

            <main>
                <Title>
                    <h1>Meus filmes</h1>
                    <div>
                        <Button title="Adicionar filme" />
                    </div>
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