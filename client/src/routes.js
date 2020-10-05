import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';


export const useRoutes = isAthenticated => {
    if(isAthenticated){
        return(
            <Switch>
                <Route>
                    <ProfilePage path="/profile/:id" />
                    <Redirect to="/profile" />
                </Route>
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}