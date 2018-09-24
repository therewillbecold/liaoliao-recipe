import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
// import Recommended from './pages/recommended'
import Recommended from './pages/recommended'
import Classified from './pages/classified'
import Favorites from './pages/favorites'
import Recipe from './pages/recipe'

const route = () => (
  <Router>
    <div>

      <Switch>
        {/* exact 路径是否完整匹配 */}
        <Route exact={true} path="/" component={Recommended} />
        <Route path="/classified" component={Classified} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/recipe/:recipeId" component={Recipe} />
        {/* 默认路由 */}
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
)

export default route
