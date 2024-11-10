import { useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../commons/auth/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const PublicRoutes = ({ element }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is authenticated and tries to access login, redirect them back to dashboard
    if (user) {
      const destination = location.state?.from?.pathname || "/dashboard";
      navigate(destination, { replace: true });
    }
  }, [user, navigate, location]);

  return !user ? element : null;
};

PublicRoutes.propTypes = {
  element: PropTypes.object
};

export default PublicRoutes;
