import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
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
            <FormInput label='Display Name' type="text" onChange={handleChange} name='displayName' value={displayName} required />

            <FormInput label='Email' type="email" onChange={handleChange} name='email' value={email} minLength={6} required />

            <FormInput label='Password'type="password" onChange={handleChange} name='password' value={password} required />

            <FormInput label='Confirm Password'type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} required />

            <button type="submit">Sign Up</button>
        </form>
     );
}
 
export default SignUpForm;