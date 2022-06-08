import "./sign-in.styles.scss"
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await(signInWithGooglePopup())
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return ( 
        <div>
            <div>Sign In Component</div>
            <button onClick={logGoogleUser}>Log in With Google Popup</button>
        </div>
     );
}
 
export default SignIn;