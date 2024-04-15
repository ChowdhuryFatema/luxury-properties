import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from '../components/Spinner';


const ProtectedRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Spinner></Spinner>
    }


    if(user){
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

ProtectedRoute.propTypes = {
    children: PropTypes.node,
}
export default ProtectedRoute;