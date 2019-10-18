import React from 'react';
import {Switch,Redirect,Route}from 'react-router-dom';

function RouterView(props){
    let {routes}=props;
    let RouterArr=routes&&routes.filter(item=>!item.to);
    let RedirectArr=routes&&routes.filter(item=>item.to).map((item,index)=><Redirect from={item.from} to={item.to} key={index}/>);
    return <Switch>
        {
            RouterArr&&RouterArr.map((item,index)=>{
                return <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} routes={item.children}/>
                }}/>
            }).concat(RedirectArr)
        }
    </Switch>
}

export default RouterView;