import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormFields({...formFields,[name]:value})
    }
    return ( 
        <form onSubmit={()=>{}}>
            <label>Display Name</label>
            <input type="text" onChange={handleChange} name='displayName' value={displayName} required />

            <label>Email</label>
            <input type="email" onChange={handleChange} name='email' value={email} minLength={6} required />

            <label>Password</label>
            <input type="password" onChange={handleChange} name='password' value={password} required />

            <label>Confirm Password</label>
            <input type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} required />

            <button type="submit">Sign Up</button>
        </form>
     );
}
 
export default SignUpForm;