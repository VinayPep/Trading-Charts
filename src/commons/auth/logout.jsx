import { useAuth } from "./hooks/useAuth";
import { GoogleLogout } from "react-google-login";

const GoogleOAuthLogout = () => {
  //useAuth hook to access AuthContext
  const { logout } = useAuth();
  const onSuccess = () => {
    logout();
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default GoogleOAuthLogout;
