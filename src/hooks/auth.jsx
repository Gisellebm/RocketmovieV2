import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) { // contexto de autenticação 
    const [data, setData] = useState({}); // estado de autenticação 

    async function signIn({ email, password }) { // autenticação do usuário 
        try{ // tentar autenticar o usuário
            const response = await api.post("/sessions", { email, password }) // autenticar o usuário com email e senha e pegar o token
            const { user, token } = response.data; // pegar o perfil e o token de autenticação 

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user)); // salvar o perfil no localStorage e no estado de autenticação 
            localStorage.setItem("@rocketMovies:token", token); // salvar o token no localStorage e no estado de autenticação 
    
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // definir o token no header da requisição HTTP para o servidor 
            setData({ user, token }); // atualizar o estado de autenticação com o perfil e o token 

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel entrar");
            }
        }
    }

    AuthProvider.propTypes = { // propriedades do contexto de autenticação 
        children: PropTypes.node.isRequired, // children do contexto de autenticação 
    }

    function signOut() { // função para deslogar o usuário 
        localStorage.removeItem("@rocketMovies:user"); // remover o perfil
        localStorage.removeItem("@rocketMovies:token"); // remover o token

        setData({}); // voltar para o estado inicial
    }

    async function updatedProfile({ user, avatarFile }) { // função para atualizar o perfil 
        try{
            if(avatarFile) { // se o arquivo de imagem tiver sido selecionado
                const fileUploadForm = new FormData(); // criar um formulário de envio de arquivos para o servidor
                fileUploadForm.append("avatar", avatarFile); // adicionar o arquivo de imagem ao formulário

                const response = await api.patch("/users/avatar", fileUploadForm); // enviar o formulário para o servidor
                user.avatar = response.data.avatar; // atualizar o avatar do usuário
            }

            await api.put("/users", user); // atualizar o perfil do usuário no servidor com os novos dados do usuário 
            localStorage.setItem("@rocketMovies:user", JSON.stringify(user)); // atualizar o perfil no localStorage 

            setData({ user, token: data.token }); // atualizar o perfil no contexto 
            alert("Seu perfil foi atualizado");

        } catch(error) { // se ocorrer um erro
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel atualizar o perfil");
            }
        }
    }

    useEffect(() => { // carregar o perfil do usuário e o token no contexto ao carregar a página 
        const user = localStorage.getItem("@rocketMovies:user");
        const token = localStorage.getItem("@rocketMovies:token");

        if (user && token) { // se o usuário e o token existirem
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // adicionar o token de autorização ao cabecalho da requisição para o servidor
            
            setData({ // atualizar o perfil do usuário e o token no contexto 
                user: JSON.parse(user), // transformar o perfil do usuário em um objeto JavaScript 
                token, // atualizar o token no contexto
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signOut, updatedProfile, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
}


function useAuth() { // função para usar o contexto de autenticação 
    const context = useContext(AuthContext); // usar o contexto de autenticação 

    return context; // retornar o contexto de autenticação 
}

export { AuthProvider, useAuth }; // exportar o contexto de autenticação 