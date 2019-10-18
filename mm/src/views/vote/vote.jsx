import React, { PureComponent } from 'react'
import Head from '@/components/Head/head';
import { getVote } from "@/http/index.js";
import VoteCss from './vote.module.scss';
class Vote extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            headData:[
                "全部",
                "已结束",
                "正在进行"
            ],
            newList:[],
            list:[],
            ind:0
        }
    }
    ChangeRouter(){
        this.props.history.push('/startVote');
    }
    changeInd(ind){
        let {newList,list}=this.state;
        let time=new Date()*1;
        
        ind===0?newList=list:newList=list.filter(item=>{
            return ind===1?new Date(item.endTime)<time:new Date(item.endTime)>time;
        })
        this.setState({ind,newList});
    }
    render() {
        const{newList,headData,ind}=this.state;
        return (
            <div className={`${VoteCss['vote']}`}>
                <Head title="投票" isShow='1' right={<span onClick={this.ChangeRouter.bind(this)}>发起投票</span>}/>
                <div className={`${VoteCss['head']}`}>
                    <ul>
                        {headData.map((item,index)=>{
                            return <li key={index} className={ind===index?VoteCss['active']:''} onClick={this.changeInd.bind(this,index)}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className={`${VoteCss['content']}`}>
                    {
                        newList&&newList.map((item,index)=>{
                            return <dl key={index}>
                                <dt>
                                    <img src={require('@/static/1.png')} alt=""/>
                                </dt>
                                <dd>
                                    <p>
                                       <span> {item.title}</span>
                                       <span>{item.endTime}</span>
                                    </p>
                                    <p>
                                        {item.isSingle==1?'单选':"多选"}
                                    </p>
                                </dd>
                            </dl>
                        })
                    }
                </div>
            </div>
        )
    }
    async componentDidMount(){
        let res = await getVote();
        console.log(res)
        this.setState({
            list:res.data,
            newList:res.data
        })
    }
}

export default Vote