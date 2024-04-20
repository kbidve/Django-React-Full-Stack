import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"

function Form({ route, method }) {
    
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handelSubmit = async(e) => {
        setLoading(true);
        e.preventDefault()
        try { 
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.access)
                navigate("/")
            } else {
                navigate("/login")
            }
            
        }
        catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    const name = method === "login" ? "Login" : "Register"
    
    return <form onSubmit={handelSubmit} className="form-container">

        <h1>{name}</h1>
        <input className="form-input" type="text" value={username} onChange={(e) => { setUserName(e.target.value) }}
            placeholder="Username" />
        <input className="form-input" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}
            placeholder="Password" />
        
        <button className="form-button" type="submit">{name}</button>
    </form>
}


export default Form