import React, { PureComponent } from 'react'
import {loginPort}from '@/http/index';
class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            user:'',
            pwd:'',
            isColor:false
        }
    }
change(e){
    let key=e.target.name;
    let value=e.target.value;
    this.setState({
        [key]:value
    })
}
async login(){
    let {user,pwd}=this.state;
        let res=await loginPort({userName:user,password:pwd});console.log(res.data)
        if(res.data.code==1){
            //登陆成功
            window.localStorage.token=res.data.token;
            window.localStorage.userId=res.data.userId;
            this.props.history.go(-1);
            this.setState({
                isColor:true
            })
        }else{
            //登陆失败
            alert(res.data.message);
            this.setState({
                isColor:true
            })
        }
      
}
register(){
    this.props.history.push('/register');
}
    render() {
        let {user,pwd,isColor}=this.state;
        return (
            <div>
                <h2>请登录</h2><br/>
                用户名:<input name="user" onChange={this.change.bind(this)} value={user} type='text'/><br/><br/>
                密码:<input name='pwd' onChange={this.change.bind(this)} value={pwd} type='password'/><br/><br/>
                <div><button
                style={isColor?{color:'red'}:null}
                onClick={this.register.bind(this)}
                >注册</button>  <button onClick={this.login.bind(this)}>登陆</button></div>
            </div>
        )
    }
}

export default Login