import React from 'react';
import './App.scss';
import {HomeOutlined,DatabaseOutlined,FireOutlined,UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './css/foot.css'
import './css/base.css'
import {Route,Switch,Redirect,NavLink,withRouter}  from 'react-router-dom'
import Home from './components/home'
import Book from './components/book'
import List from './components/list'
import User from './components/user'
import Login from './components/login'
import Reg from './components/reg'
import Detail from './components/detail'
import NotFound from './components/notfound'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      visible:true,
      currentIndex: 0,
        
    }
  }
  componentDidMount(){
    this.changeTitle(this.props.location.pathname); //解决刷新问题的
    this.routeListen();  //组件一挂载就监听,  为了用setState
  }
  routeListen(){  //监听路由的变化
       this.props.history.listen((location)=>{
         this.changeTitle(location.pathname);
       })
  }
  //根据路由的变化改变标题栏的标题
  changeTitle(pathname){
      this.setState({
        visible:true,
        
      })
      switch(pathname){
        case  '/':
        case '/home':document.title="首页";break;
        case '/book':document.title="书架";break;
        case '/list':document.title="列表";break;
        case '/user':document.title="用户";break;
        
        default:
          if(pathname.includes("/list/")){
            document.title="列表"
          }
          else{
            //显示404页面时候，隐藏导航
            this.setState({
              visible:false
            })
          }
      }
  }
  render(){
    return (
    <div className="App">
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/book" component={Book} />
            <Route path="/list" component={List} />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/reg" component={Reg} />
            <Route path="/detail" component={Detail} />
            <Redirect from="/" to="/home" exact />
            <Route component={NotFound} />
        </Switch>
        <ul className="footer" style={{"display":this.state.visible?'':"none"}}>
          <li><i><NavLink to="/home" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace><HomeOutlined /></NavLink></i>
              <span><NavLink to="/home" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace>首页</NavLink></span></li>
          <li><i><NavLink to="/book" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace><DatabaseOutlined /></NavLink></i>
              <span><NavLink to="/book" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace>书架</NavLink></span></li>
          <li><i><NavLink to="/list" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace><FireOutlined /></NavLink></i>
              <span><NavLink to="/list" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace>列表</NavLink></span></li>
          <li><i><NavLink to="/user" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace><UserOutlined /></NavLink></i>
              <span><NavLink to="/user" style={{ color:'#9a9a9a' }} activeStyle={{ color: '#ff5a36' }} replace>我的</NavLink></span></li>
        </ul>
    </div>
  );
  }
  
}

export default withRouter(App);
