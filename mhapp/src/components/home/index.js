import React, { Component } from 'react'
import "./home.css"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import {SearchOutlined} from "@ant-design/icons"
import axios from 'axios'
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            list:["https://images.manmanapp.com/banner/5e594c55afcfe.jpg",
                "https://images.manmanapp.com/banner/5e594bb18179b.jpg",
                "https://images.manmanapp.com/banner/5e594c0f1f352.jpg"],
            arr1:[],
            arr2:[],
            arr3:[],
            arr4:[],
            arr5:[],
            arr6:[]
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
          this.getData1();
          this.getData2();
          this.getData3();
          this.getData4();
          this.getData5();
          this.getData6();

    }
    getData1(){
        axios.get("http://47.104.151.138:1912/users/lou1").then((res)=>{
            if(res.status===200){
                this.setState({
                    arr1:res.data
                })
            } 
        })  
    }
    getData2(){
        axios.get("http://47.104.151.138:1912/users/lou2").then((res)=>{
            if(res.status===200){
                this.setState({
                    arr2:res.data
                })
            } 
        })  
    }
    getData3(){
        axios.get("http://47.104.151.138:1912/users/lou3").then((res)=>{
            if(res.status===200){
                this.setState({
                    arr3:res.data
                })
            } 
        })  
    }
    getData4(){
        axios.get("http://47.104.151.138:1912/users/lou4").then((res)=>{
            if(res.status===200){
                this.setState({
                    arr4:res.data
                })
            } 
        })  
    }
    getData5(){
        axios.get("http://47.104.151.138:1912/users/lou5").then((res)=>{
            if(res.status===200){
                this.setState({
                    arr5:res.data
                })
            } 
        })  
    }
    getData6(){
        axios.get("http://47.104.151.138:1912/users/lou6").then((res)=>{
            if(res.status===200){
                this.setState({
                    arr6:res.data
                })
            } 
        })  
    }
    render() {
        let{arr1,arr2,arr3,arr4,arr5,arr6}=this.state;
        return (
        <div>
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
            
            {/* 楼层 */}
            <div className="lou1">
                {/* 分类 */}
                <div className="fl">
                    <p>热门</p>
                    <p>更新</p>
                    <p>分类</p>
                </div>
                <h3>&nbsp;&nbsp;女生热门</h3>
                <ul>
                    {
                        arr1.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.detail}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <h3>&nbsp;&nbsp;男生热门</h3>
                <ul>
                    {
                        arr2.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.detail}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <h3>&nbsp;&nbsp;本周推荐</h3>
                <ul>
                    {
                        arr3.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.detail}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="lou2">
                <h3>&nbsp;&nbsp;恋爱 少女情怀</h3>
                <ul>
                    {
                        arr4.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.detail}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <h3>&nbsp;&nbsp;古风 仙侠世界</h3>
                <ul>
                    {
                        arr5.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.detail}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <h3>&nbsp;&nbsp;日常</h3>
                <ul className="last">
                    {
                        arr6.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.detail}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        )
    }
}
