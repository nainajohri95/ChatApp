import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import "../style/Auth.css";

const cookies = new Cookies();

const Auth = ({ setIsAuth = () => {} }) => {
  const signInWithGoogle = async () => {
    try {
      const { user: { refreshToken = null } = {} } = await signInWithPopup(
        auth,
        provider
      );
      cookies.set("auth-token", refreshToken);
      setIsAuth(refreshToken);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign In with Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};
export default Auth;
