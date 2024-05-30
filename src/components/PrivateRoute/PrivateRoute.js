import { Navigate } from "react-router-dom";

function PrivateRoute({children}){

        const isLogin = (username) => {
            if (username == 'erfan.khosravi') return true;
            return false;
        };

    return(
        <>
            {isLogin('erfan.khosravi') ? children : <Navigate to='/login' /> }
        </>
    )
}
export default PrivateRoute;