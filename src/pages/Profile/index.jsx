import { Container, Form, Avatar } from "./style";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");  
    }

    return (
        <Container>
            <header>
                <ButtonText icon={FiArrowLeft} title="Voltar" size={16} onClick={handleHome} />
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/gisellebm.png"
                        alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file" 
                        />
                    </label>
                </Avatar>

                <div className="dados">
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
                </div>

                <div className="dados">
                    <Input 
                        icon={FiLock}
                        placeholder="Senha atual"
                        type="password"
                    />
                    <Input 
                        icon={FiLock}
                        placeholder="Nova senha"
                        type="password"
                    />
                </div>

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}