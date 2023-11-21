import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { FiPlus } from "react-icons/fi";
import { Container, Title, Movies, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await api.get(`/movies?title=${search}`);
                setMovies(response.data);

            } catch (error) {

                if (error.response) {
                   alert(error.response.data.message);
                } else {
                   alert(" Algo deu errado ao buscar as notas dos filmes! ");
                }
            }
        }

        fetchMovies();

    }), [search];

    return (
        <Container>
            <Header onChange={event => setSearch(event.target.value)} />

            <main>
                <Title>
                    <h1>Meus filmes</h1>
                    <NewMovie to="/new">
                        <FiPlus />
                        Adicionar filme
                    </NewMovie>
                </Title>

                <Movies>
                    {
                        movies.map(movie => (
                            <Movie  
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => handleDetails(movie.id)}     
                            />
                        ))
                    }
                </Movies>
            </main>
        </Container>
    )
}