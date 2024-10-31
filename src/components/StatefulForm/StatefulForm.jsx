import { useState } from "react";


const StatefulForm = () => {
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [error, setError] = useState('')
    const handleSubmit = e  => {
        e.preventDefault()
        if(password < 6){
            setError('Password must me at least six character');
        }
        else
        {
            setError(password);
            console.log(name, email, password)
        }
        
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handleName = e =>{
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleName} type="text" name="name" /> <br />
                <input onChange={handleEmail} type="text" name="email" /> <br />
                <input onChange={handlePassword} type="password" name="password" />
                <br />
                <input type="submit"  value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default StatefulForm;