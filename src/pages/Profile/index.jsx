import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./style";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    const { user, updatedProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated);

        await updatedProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }


    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);  
    }

    return (
        <Container>
            <header>
                <ButtonText icon={FiArrowLeft} title="Voltar" size={16} onClick={handleBack} />
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file" 
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <div className="dados">
                    <Input 
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        icon={FiMail} 
                        placeholder="E-mail"    
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="dados">
                    <Input 
                        icon={FiLock}
                        placeholder="Senha atual"
                        type="password"
                        onChange={e => setPasswordOld(e.target.value)}
                    />
                    <Input 
                        icon={FiLock}
                        placeholder="Nova senha"
                        type="password"
                        onChange={e => setPasswordNew(e.target.value)}
                    />
                </div>

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}