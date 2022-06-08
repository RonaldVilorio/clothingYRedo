
const SignUpForm = () => {
    return ( 
        <form onSubmit={()=>{}}>
            <label>Display Name</label>
            <input type="text" required />

            <label>Email</label>
            <input type="email" minLength={6} required />

            <label>Password</label>
            <input type="password" required />

            <label>Confirm Password</label>
            <input type="password" required />
            <button type="submit">Sign Up</button>
        </form>
     );
}
 
export default SignUpForm;