import React, { PureComponent } from 'react'
import {registerProt}from '@/http/index.js'
class Register extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            user:'',
            pwd:'',
            affirm:'',
            userTrue:''

        }
    }
change(e){
    let key=e.target.name;
    let value=e.target.value;
    this.setState({
        [key]:value
    })
}
async Submit(){
    try{
        let {user,pwd,affirm,userTrue}=this.state;
        if(affirm===pwd){
            let res= await registerProt({
                userName:user,
                password:pwd,
                realName:userTrue
            });
            if(res.data.code==1){
                alert("登录成功");
                this.props.history.go(-1);
            }
        }else{
            alert("两次密码输入不一致");
        }
    }catch(e){
        alert(e.response.data.message)
    }
 
}
    render() {
        let {user,pwd,affirm,userTrue}=this.state;
        return (
            <div>
                <h2>请注册</h2><br/>
                用户名:<input name="user" onChange={this.change.bind(this)} value={user} type='text'/><br/><br/>
                密码:<input name='pwd' onChange={this.change.bind(this)} value={pwd} type='password'/><br/><br/>
               确认密码:<input name='affirm' onChange={this.change.bind(this)} value={affirm} type='password'/><br/><br/>
               真实姓名:<input name="userTrue" onChange={this.change.bind(this)} value={userTrue} type='text'/><br/><br/>
                <button onClick={this.Submit.bind(this)}>提交</button>
            </div>
        )
    }
}


export default Register