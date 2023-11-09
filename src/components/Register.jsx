import React from "react";
import "../styles/register.css"

const Register =()=>{
    return (
        <div className='registerContainer'>
            <h3>Register</h3>
            <div>
                <input type="email" name="email" placeholder="Enter your email"/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Set password" />
            </div>
            <button>Register</button>
            <button className="link">Want to Login?</button>
        </div>
    )
}
export default Register