import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try{
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data;

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketMovies:token", token);
    
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel entrar");
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketMovies:user");
        const token = localStorage.getItem("@rocketMovies:token");

        if (user && token) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({
                user: JSON.parse(user),
                token,
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };