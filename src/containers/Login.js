import IconUser from "../img/IconUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userData } from "../services/userService";



function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

async function onSubmit(e) {
    e.preventDefault()
    try{
        const response = await userData(email, password)
        console.log(response.body.token)

        window.localStorage.setItem("token", response.body.token)
        navigate("/user")
    }catch(e){}
}

    return(
        <main className="main bg-dark">
      <section className="sign-in-content">
        <IconUser />
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label for="email">Email</label>
            <input onChange={e => setEmail(e.target.value)} type="text" id="email" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input onChange={e => setPassword(e.target.value)} type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
    )
}

export default Login;