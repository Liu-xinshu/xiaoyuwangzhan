import React from 'react';
import {BrowserRouter}from 'react-router-dom';
import RouterView from '@/router/routerView.jsx';
import routes from '@/router/routerConfig';
function RootRouter(){
    return <BrowserRouter>
        <RouterView routes={routes}/>
    </BrowserRouter>
}

export default RootRouter;