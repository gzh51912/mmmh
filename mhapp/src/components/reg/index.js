import React, { Component } from 'react'
import "./reg.scss"
import {LeftOutlined} from "@ant-design/icons"
import axios from "axios"

export default class Reg extends Component {
    constructor(props){
        super(props);
        this.state={
            // res1:"none"
        }
    }
    componentDidMount(){
    }
    back=()=>{
        this.props.history.push("./login")
    }
    // userblur=()=>{
    //     let flag=/^1[3456789]\d{9}$/.test(this.node.value);
    //     if(!flag){
    //        this.state.res1="block"
    //     }
    // }
    reg=()=>{
        if(this.node.value&&this.psw.value){
                axios.post("http://47.104.151.138:1912/users/reg",
                {
                username: this.node.value,
                password: this.psw.value
                }).then((res)=>{
                    console.log(res);
                    if(res.status===200){
                        this.props.history.push("/login")
                    } 
                })  
            }else{
                alert("用户名或密码格式不正确")
            }
    }
    render() {
        let {res1}=this.state
        return (
            <div id="reg">
                <header><LeftOutlined className="left" onClick={this.back}/>注册</header>
                <h5 className="o">欢迎来漫漫！</h5>
                <h3 className="t">漫漫漫画，开启一天好心情。</h3>

                <div className="name"><label>请输入用户名：</label><input type="text" ref={(node)=>this.node=node}/></div>
                <div className="name"><label>请输入密码&nbsp;&nbsp;&nbsp;：</label><input type="password" ref={(psw)=>this.psw=psw}/></div>
                <div className="button">
                    <button onClick={this.reg}>注册</button>
                </div>
            </div>
        )
    }
}
