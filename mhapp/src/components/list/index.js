import React, { Component } from 'react'
import {Route,NavLink,Switch, Redirect} from 'react-router-dom'
import One from '../one'
import Two from '../two'
import Three from '../three'
import Four from '../four'
import Five from '../five'
import Six from '../six'
import "./list.scss"
export default class List extends Component {
    render() {
        return (
            <div id="list">
                <aside>
                    <ul>
                        <li><NavLink to="/list/one">恋爱</NavLink></li>
                        <li><NavLink to="/list/two">纯爱</NavLink></li>
                        <li><NavLink to="/list/three">搞笑</NavLink></li>
                        <li><NavLink to="/list/four">古风</NavLink></li>
                        <li><NavLink to="/list/five">校园</NavLink></li>
                        <li><NavLink to="/list/six">霸总</NavLink></li>
                    </ul>
                </aside>
                <main>
                    <Switch>
                        <Route path="/list/one" component={One} />
                        <Route path="/list/two" component={Two} />
                        <Route path="/list/three" component={Three} />
                        <Route path="/list/four" component={Four} />
                        <Route path="/list/five" component={Five} />
                        <Route path="/list/six" component={Six} />
                        <Redirect from="/list" to="/list/one"  exact />
                    </Switch>
                    </main>
            </div>
        )
    }
}