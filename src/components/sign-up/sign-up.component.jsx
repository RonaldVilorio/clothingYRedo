import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormFields({...formFields,[name]:value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        // if pass == confirmPass
        if(password === confirmPassword){
            try{
                const {user} = await createAuthUserWithEmailAndPassword(email,password)
                await createUserDocumentFromAuth(user,{displayName})
               
            }catch(err){
                if(err.code === 'auth/email-already-in-use'){
                    alert("Email already in use")
                }
                console.log(err)
            }
        }else{
            alert("Passwords don't match")
        }
        resetFormFields()
    }
    return ( 
        <form onSubmit={handleSubmit}>
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