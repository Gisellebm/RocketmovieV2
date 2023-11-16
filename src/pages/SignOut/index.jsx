import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignOut() {
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
                    />

                    <Input 
                        icon={FiMail} 
                        placeholder="E-mail"    
                        type="text"
                    />

                    <Input 
                        icon={FiLock}
                        placeholder="Senha"
                        type="password"
                    />
                </div>

                <Button title="Cadastrar"/>

                <a href="/">
                    <FiArrowLeft/>
                    Voltar para login
                </a>
            </Form>

            <Background />
        </Container>
    )
}