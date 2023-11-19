import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel cadastrar");
            }
        })
    }
    
    
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <div>
                    <Input 
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        icon={FiMail} 
                        placeholder="E-mail"    
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        icon={FiLock}
                        placeholder="Senha"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                    <FiArrowLeft/>
                    Voltar para login
                </Link>
            </Form>

            <Background />
        </Container>
    )
}