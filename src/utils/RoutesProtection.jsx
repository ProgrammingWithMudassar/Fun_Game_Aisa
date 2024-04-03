import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const verifyUser = () => {
        // const token = Cookies.get('authToken');
        const token = true;
        return !!token;
    };

    return verifyUser() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
