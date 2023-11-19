import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock} from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    async function handleSignIn() {
        await signIn({ email, password });
    }
    

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <div>
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

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background />
        </Container>
    )
}