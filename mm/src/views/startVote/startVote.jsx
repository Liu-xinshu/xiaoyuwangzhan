import React, { Component } from 'react'
import Head from '@/components/Head/head';
import {addVote}from '@/http/index';
class StartVote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title:'',//标题
            chooseList:[],//昵称
            anonymity:'',//是否匿名
            isSingle:'',//单选还是多选
            endTime:'2020-11-22',//结束时间
        }
    }
    change(e){
        let key=e.target.name;
        let val=e.target.value;
        this.setState({[key]:val})
    }
  async Submit(){
        let{title,chooseList,anonymity,isSingle,endTime}=this.state;
        let userId=window.localStorage.userId;
       
        let res= await addVote({
            title,
            chooseList,
            anonymity:  anonymity*1,
            isSingle: isSingle*1,
            endTime,
            userId: userId*1,
            startTime:new Date()+''
        })
        if(res.data.code==1){
            alert(res.data.message)
            this.props.history.go(-1);
        }

    }
    addList(e){
        let {chooseList}=this.state;
        let val=this.refs.add.value
         chooseList.push(val)
         this.refs.add.value='';
        this.setState({val})
    }
    delArr(index){
        let {chooseList}=this.state;
        chooseList.splice(index,1);
        this.setState({
            chooseList:chooseList
        })
    }
    render() {
        let{title,chooseList,anonymity,isSingle,endTime,addlis}=this.state;
        return (
            <div>
                <Head isShow="1" title="发起投票" />
                <div className="form">
                    <label htmlFor="">标题:<input onChange={this.change.bind(this)} name="title" value={title} placeholder="输入标题"/></label>
                    {
                        chooseList.length>0?
                        <ul>
                                {
                                    chooseList&&chooseList.map((item,index)=>{
                                        return <li key={index}>{item} <span onClick={this.delArr.bind(this,index)}>删除</span></li>
                                    })
                                }
                        </ul>:null
                   
                  }

                <p> 
                     <input ref="add" type="text"/>
                     <span onClick={this.addList.bind(this)}>+</span>
                 </p>
                   <select onChange={this.change.bind(this)} name="isSingle" value={isSingle}>
                       <option  value={0}>请选择单选多选</option>
                       <option  value={0}>单选</option>
                       <option value={1}>多选</option>
                   </select>
                   <select onChange={this.change.bind(this)} name="anonymity" value={anonymity}>
                       <option value={anonymity}>是否匿名</option>
                       <option  value={0}>是</option>
                       <option value={1}>否</option>
                   </select>
                   <p><button onClick={this.Submit.bind(this)}>发布</button></p>
                </div>
              
                
            </div>
        )
    }
}

export default StartVote