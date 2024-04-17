import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // social auth providers 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    githubProvider.addScope('read:user');
    githubProvider.addScope('user:email');

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // update user profile 
    const updateUserProfile = (name, image) => {
    
       updateProfile(auth.currentUser, {

            displayName: name, 
            photoURL: image,
            
          })

          setUser({
            ...user,
            displayName: name, 
            photoURL: image
          })
    }

    // sign in user 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login 
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    // sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unSubscribe();

    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        googleLogin,
        githubLogin,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;