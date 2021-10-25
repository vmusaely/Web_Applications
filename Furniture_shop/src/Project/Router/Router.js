import React, { memo } from "react";
import Home from "../Pages/Home/Home";
import Furniture from "../Pages/Furniture/Furniture";
import Basket from '../Pages/Basket/Basket';
import NotFound from "../Pages/NotFound/NotFound";
import { Route, Switch, Redirect } from 'react-router';

function Router() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/furniture" component={Furniture} exact />
                <Route path="/basket" component={Basket} exact />
                <Route path='/404' component={NotFound} exact />
                <Redirect to={'/404'} />
            </Switch>
        </>
    );
};

export default memo(Router);