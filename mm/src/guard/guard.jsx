import React, { Component } from 'react'

const isLogin=(Com)=>{
    return class extends Component {
        state={
            flag:false
        }
        render() {
            return <>
            {
                this.state.flag? <Com {...this.props}/>:null
            }
            </>
        }
        componentDidMount(){
            if(window.localStorage.token){//已登录
               this.setState({flag:true});
            }else{//未登录
                this.props.history.push('/login');
            }
        }
    }
    
}
export default isLogin;