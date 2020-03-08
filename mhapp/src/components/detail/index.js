import React, { Component } from 'react'
import "./detail.scss"
import {LeftOutlined} from "@ant-design/icons"

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount(){
    }
    back=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (
            <div id="detail">
                <header><LeftOutlined className="left" onClick={this.back}/>返回</header>
                <section className="top">
                    <img src="https://images.manmanapp.com/Uploads/image/160331/56fc803ee4eae.webp-conj" alt="" />
                    <p>几小无猜</p>
                    <p>作者：doublezero</p>
                    <p>类型：日常、恋爱</p>
                    <p>1302.8万人喜欢</p>
                    <div>
                        <span className="one">阅读第一话</span>
                        <span className="two">订阅作品</span>
                    </div>
                </section>
                <article>
                作品简介：来跟小学生学习撩妹技能吧！面瘫却情话点满分的小正太&爱吃醋却又容易害羞的小萝莉的甜甜蜜蜜的日常。这才是青梅竹马，这才是两小无猜！《no words》弟弟篇，哥哥弟弟一起来，保证苏的你不要不要的！【漫漫独家，每周三更新，责编：阿丁】
                </article>
                <div className="more">更多</div>
                <div className="log">《几小无猜》目录</div>
                <div className="list">
                    <ul>
                        <li>
                            <img src="https://images.manmanapp.com/comic/cover/5a83aaabec840.webp-conj" alt=""/>
                            <p>完结企划</p>
                            <p>2018-02-14</p>
                        </li>
                        <li>
                            <img src="https://images.manmanapp.com/comic/cover/5a79ce2c31208.webp-conj" alt=""/>
                            <p>第100话 毕业快乐！</p>
                            <p>2018-02-07</p>
                        </li>
                        <li>
                            <img src="https://images.manmanapp.com/comic/cover/5a704d24c795d.webp-conj" alt=""/>
                            <p>第99话 这是告白吗？！</p>
                            <p>2018-01-31</p>
                        </li>
                        <li>
                            <img src="https://images.manmanapp.com/comic/cover/5a5dd54fb1011.webp-conj" alt=""/>
                            <p>第98话 护妻狂魔</p>
                            <p>2018-01-24</p>
                        </li>
                        <li>
                            <img src="https://images.manmanapp.com/comic/cover/5a67657ec496c.webp-conj" alt=""/>
                            <p>第97话 毕业礼物</p>
                            <p>2018-01-17</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}
