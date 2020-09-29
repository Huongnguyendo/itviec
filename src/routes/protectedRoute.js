import React, {useState} from 'react'
import { Redirect, Route } from 'react-router-dom';

// const [user, setUser] = useState({ isAuthenticated: false });

const ProtectedRoute = (props) => {
    if(true) {
        return <Route {...props}/>
    } else {
        return <Redirect to="/login"/>
    }
};

export default ProtectedRoute;
