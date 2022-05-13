import React, { useState } from 'react'
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const myStyle = {
    color: "white",
    backgroundColor: "MediumSeaGreen",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: "Calibri",
    textAlign: "center",
    fontSize: 20,
    marginBottom: "10px",
    borderRadius : 10
  };

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
//    const history = useHistory();
    const navigate = useNavigate();
    //navigate('/home');
    
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/login', {
                email: email,
                password: password
            });
          //  navigate.push("/dashboard");
          navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <h2 style={myStyle}>Login System by Nirmal Pant</h2>
                                    <label className="label">Email or Username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Login