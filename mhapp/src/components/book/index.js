import React, { Component } from 'react'
import Swiper from "swiper"
import "swiper/css/swiper.css"
import "./book.scss"
import {SearchOutlined} from "@ant-design/icons"
import axios from 'axios'
export default class Category extends Component {
    constructor(props){
        super(props);
        this.state={
            list:["https://images.manmanapp.com/banner/5e594c55afcfe.jpg",
                "https://images.manmanapp.com/banner/5e594bb18179b.jpg",
                "https://images.manmanapp.com/banner/5e594c0f1f352.jpg"],
            arr:[]
        }
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                waitForTransition: false,
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },  
          });
          this.getData()
    }
    getData(){
        axios.get("http://47.104.151.138:1912/users/book").then((res)=>{
            if(res.status===200){
                this.setState({
                    arr:res.data
                })
            } 
        })  
    }
    render() {
        let {arr}=this.state;
        return (
            <div className="book">
                <div className="top-head">
                    {/* 搜索栏 */}
                    <section  className="poss search-bar-wrap">
                        <section  className="search-bar">
                            <aside className="search-icon"></aside>
                            <aside className="search-val"><SearchOutlined />请输入搜索关键字</aside>
                        </section>
                    </section>

                    {/* 轮播图 */}
                    <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.state.list.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                <img src={item} style={{width:"100%",height:"175px",padding:"0 12px"}}></img></div>
                        })}
                    
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="desk">
                        <h3>&nbsp;&nbsp;&nbsp;书架</h3>
                        <div className="hd">新用户7天内，每天会赠送漫画免费看哦！</div>
                        <ul>
                            {
                                arr.map((item)=>{
                                    return (
                                            <li key={item.id}>
                                                <img src={item.img} alt=""/>
                                                <p>{item.title}</p>
                                                <span>{item.detail}</span>
                                            </li>
                                    )
                                })
                            }
                            <li className="add">+</li>
                        </ul>
                        
                </div>
            </div>
        )
    }
}
