import { useState, useEffect } from "react";

function useAuth(){
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token) {
            setIsLogged(false);
            return;
        }

        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            const now = Math.floor(Date.now() / 1000);
            
            if(payload.exp < now){
                localStorage.removeItem("token");
                setIsLogged(false);
            } else {
                setIsLogged(true)
            }

        } catch (error) {
            console.error("Token inválido: ", error);
            setIsLogged(false);
        }
}, []);

    const logout = () => {
        localStorage.removeItem("token");
        setIsLogged(false);
    };

    return { isLogged, logout, loading}
}

export default useAuth;