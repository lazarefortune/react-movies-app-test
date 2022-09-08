import { useState } from "react"
import {useNavigate} from "react-router-dom";
import {Header} from "../../components/Header";

const HomepageContainer = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

     return (
        <>
            <Header/>
            <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center"}}>
                <div style={{ alignSelf: "center", justifyContent: "center", textAlign: "center"}}>
                    <div style={{ marginBottom: 70, fontSize: 30 }}>Test technique alternant Flying For You</div>
                    <button style={{ backgroundColor: "#60EED2", border: "none", padding: "10px 30px", borderRadius: 20, cursor: "pointer" }} onClick={handleLogin}>Se connecter</button>
                </div>
            </div>
        </>
     )
}

export default HomepageContainer