import React, { PureComponent } from 'react'
import RouterView from '@/router/routerView';
import {Link,}from 'react-router-dom'
import '@/css/common.scss';
import IsLogin from '@/guard/guard';
class Index extends PureComponent {
        state={
            foot:[
                {
                    title:'首页',
                    link:'/index/home'
                },{
                    title:'沐恩动态',
                    link:'/dynamic'
                },
                {
                    title:'主内资料',
                    link:'/data'
                },
                {
                    title:'留言板',
                    link:'/message'
                },
                {
                    title:'我的',
                    link:'/my'
                },
            ],
            ind:0
        }
    changeInd(index){
        this.setState({
            ind:index
        })

    }
    render() {
        const {foot,ind}=this.state;
        return (
            <div className='index'>
                    <RouterView routes={this.props.routes}/>
                    <footer className='footer'>
                        {
                            foot.map((item,index)=>{
                                return <Link 
                                key={index} to={item.link} 
                                onClick={this.changeInd.bind(this,index)} 
                                className={index===ind?'active':''}
                                >{item.title}</Link>
                            })
                        }
                    </footer>
                </div>
        )
    }
}

export default IsLogin(Index);