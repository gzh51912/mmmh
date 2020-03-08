import React, { Component } from 'react'
import "./user.scss"
import {SettingOutlined,PlusSquareFilled,RightOutlined,CreditCardOutlined,ReloadOutlined,BellOutlined,CloudDownloadOutlined,StarOutlined,ShakeOutlined,RedditOutlined,StopOutlined,UnorderedListOutlined} from "@ant-design/icons"
import axios from 'axios'


export default class User extends Component {
    constructor(props){
        super(props);
        // this.state={}
    }
    componentDidMount(){
    }
    toLogin=()=>{
        this.props.history.push("/login")
    }

    render() {
        return (
            <div id="user">
                <header>我<SettingOutlined className="set"/></header>
                <div className="tx">
                    <div className="pic"><PlusSquareFilled /></div>
                    <span className="dl" onClick={this.toLogin}>登录/注册</span>
                    <p className="ban">登录可以收藏追更新哦~</p>
                </div>
                <section><CreditCardOutlined className="logo one"/>我的账户<RightOutlined className="right" /></section>
                <section><ReloadOutlined className="logo two"/>阅读历史<RightOutlined className="right" /></section>
                <section><BellOutlined className="logo three"/>我的消息<RightOutlined className="right" /></section>
                <section><CloudDownloadOutlined className="logo five"/>缓存今日更新<RightOutlined className="right" /></section>
                <section><StarOutlined className="logo six"/>收藏的动态<RightOutlined className="right" /></section>
                <section><ShakeOutlined className="logo seven"/>摇一摇<RightOutlined className="right" /></section>
                <section><RedditOutlined className="logo eight"/>邀请好友注册<RightOutlined className="right" /></section>
                <section><StopOutlined className="logo nine"/>夜间模式<RightOutlined className="right" /></section>
                <section className="last"><UnorderedListOutlined className="logo ten"/>意见反馈<RightOutlined className="right" /></section>
            </div>
        )
    }
}
