import React, { useState } from 'react'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    console.log(email, password)
    //handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            setEmailError('Email is required')
        }
        if (password === '') {
            setPasswordError("Password is required")
        } else {
            const loginObj = {
                email: email,
                password: password
            }
            console.log(loginObj);
            setEmailError("");
            setPasswordError("");
        }
    }
    return (
        <div className="signin">
            <h1>Coinvest</h1>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="email-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                </div>
                {emailError && <p className="login-error-msg">{emailError}</p>}
                <div className="form-group">
                    <label className="password-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                </div>
                {passwordError && <p className="login-error-msg">{passwordError}</p>}
                <button className="btn-user-login">signin</button>
            </form>

        </div>
    )
}

export default Signin
