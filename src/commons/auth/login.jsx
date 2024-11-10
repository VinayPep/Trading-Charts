import { useAuth } from "./hooks/useAuth";
import { GoogleLogin } from "react-google-login";
import PropTypes from "prop-types";

/*
Accepts two props error and setError so that this function can notify if there is an error occured during Google Auth
*/

const GoogleOAuthLogin = ({ setError }) => {
  //useAuth hook to access AuthContext
  const { login } = useAuth();

  const onSuccess = (res) => {
    try {
      login(res);
      setError("");
    } catch (err) {
      setError("Failed to log in. Please try again.");
    }
  };

  const onFailure = () => {
    setError("Google sign in failed. Please try again.");
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Log In"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

GoogleOAuthLogin.propTypes = {
  setError: PropTypes.func
};

export default GoogleOAuthLogin;
