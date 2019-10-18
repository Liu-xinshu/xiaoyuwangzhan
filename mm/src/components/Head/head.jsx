import React, { PureComponent } from 'react'
import HeadCss from './head.module.scss';
import {withRouter} from 'react-router-dom';
class Head extends PureComponent {
 static defaultProps={
        isShow:false,
        title:'沐恩muen',
        right:''

    }
    prev(){
        this.props.history.go(-1);
    }
    render() {
        let {title,isShow,right}=this.props;
        return (
            <div className={HeadCss.head}>
               {isShow? <span onClick={this.prev.bind(this)}>&lt;</span>:<span></span>}
                <h2>{title}</h2>
                <span>{right}</span>
            </div>
        )
    }
}

export default withRouter(Head);