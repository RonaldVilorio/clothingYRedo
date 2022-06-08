import "./sign-in.styles.scss"
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.component";

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await(signInWithGooglePopup())
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return ( 
        <div>
            <div>Sign In Component</div>
            <button onClick={logGoogleUser}>Log in With Google Popup</button>
            <SignUpForm/>
        </div>
     );
}
 
export default SignIn;