import React from  'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => (

  <Switch>
    <Route path='/Dashboard' exact component={Dashboard} />
    {/*<Route path='/Dashboard:id' component={Dashboard} />*/}
{/*     <Route path='/Details' component={Details} />
 */}  </Switch>

)
