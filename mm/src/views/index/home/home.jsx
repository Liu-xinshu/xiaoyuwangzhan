import React, { PureComponent } from 'react'
import Head from '@/components/Head/head'
import 'swiper/css/swiper.css'
import Swiper from 'swiper/js/swiper'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            list:[
                {
                    title:'沐恩动态'
                },
                {
                    title:'沐恩动态'
                },
                 {
                    title:'沐恩动态'
                }, {
                    title:'沐恩动态'
                },
                {
                    title:'沐恩动态'
                },
                {
                    title:'沐恩动态'
                },
                {
                    title:'沐恩动态'
                },
                {
                    title:'投票',link:'/vote'
                },
            ]
        }
    }
    ChangeRouter(link){
        this.props.history.push(link&&link);
    }
    render() {
        const {list}=this.state;
        return (
            <div>
               <Head/>
               <div className="swiper-container">
                   <div className="swiper-wrapper">
                       <div className="swiper-slide">
                          <img src={require('@/static/banner.png')} style={{display:'block',width:'100%'}}/>
                       </div>
                   </div>
               </div>
               <div className="list">
                   <ul>
                       {
                           list.map((item,index)=>{
                               return <li key={index} onClick={this.ChangeRouter.bind(this,item.link)}>{item.title}</li>
                           })
                       }
                   </ul>
               </div>
            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            autoplay:true,
            loop:true
        })
    }
}

export default Home