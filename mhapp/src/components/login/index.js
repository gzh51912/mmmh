import React, { Component } from 'react'
import "./login.scss"
import {LeftOutlined} from "@ant-design/icons"
import axios from 'axios'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){

    }
    back=()=>{
        this.props.history.push("./user")
    }
    toReg=()=>{
        this.props.history.push("./reg")
    }
    login=()=>{
        if(this.node.value&&this.psw.value){
                axios.post("http://47.104.151.138:1912/users/login",
                {
                username: this.node.value,
                password: this.psw.value
                }).then((res)=>{
                    console.log(res);
                    if(res.status===200){
                        this.props.history.push("/user")
                    } 
                })  
            }
            else{
                alert("用户名或密码错误")
            }
    }
    render() {
        return (
            <div id="login">
                <header><LeftOutlined className="left" onClick={this.back}/>登录</header>
                <h5 className="o">欢迎来漫漫！</h5>
                <h3 className="t">漫漫漫画，开启一天好心情。</h3>

                <div className="name"><label>请输入用户名：</label><input type="text" ref={(node)=>this.node=node} /></div>
                <div className="name"><label>请输入密码&nbsp;&nbsp;&nbsp;：</label><input type="password" ref={(psw)=>this.psw=psw}/></div>
                <div className="button">
                    <button onClick={this.login}>登录</button>
                </div>
                <p className="togo" onClick={this.toReg}>没有账号，前往注册！</p>
            </div>
        )
    }
}
