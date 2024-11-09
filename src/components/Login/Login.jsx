import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('Error', error);
                setUser(null);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signing out...');
                setUser(null);
            })
            .catch(error => {
                console.log("Error", error);
            })
    }

    const handleGithub = () => {
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('Error', error);
                setUser(null);
            })
    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <>
                        <button onClick={handleGoogle}>Login with Google</button>
                        <button onClick={handleGithub}>Login with Github</button>
                    </>

            }
            {
                user && <div>
                    <h2>{user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;