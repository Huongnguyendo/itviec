import React, {useState} from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// const [user, setUser] = useState({ isAuthenticated: false });


const ProtectedRoute = (props) => {
    const user = useSelector((state) => state.auth.user);

    if(user && user.email && user.password) {
        return <Route {...props}/>
    } else {
        return <Redirect to="/login"/>
    }
};

export default ProtectedRoute;
