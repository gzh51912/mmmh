import React, { Component } from 'react'
import "./four.scss"
import axios from 'axios'

export default class Four extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios.get("http://47.104.151.138:1912/users/four").then((res)=>{
            if(res.status===200){
                this.setState({
                    list:res.data
                })
            } 
        })  
    }
    go=()=>{
        this.props.history.push("/detail")
    }
    render() {
        
        let {list}=this.state
        return (
            <div id="gf">
                <ul>
                    {
                        list.map((item)=>{
                            return (
                                <li key={item.id} onClick={this.go}>
                                    <img src={item.img} alt="" />
                                    <h3>{item.title}</h3>
                                    <p>{item.author}</p>
                                    <span>{item.detail}</span>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
