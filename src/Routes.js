import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import AddCompany from './components/AddCompany';
import AddJobs from './components/AddJobs';
import Edit from './components/Edit';
import PageNotFound from './components/PageNotFound'


const Routes = () => {
    return (
        <>
        <Switch>
            <Route path="/" exact component = {Home} />
            <Route path= '/addCompany' component = { AddCompany }/>
            <Route path='/AddJobs' component = {AddJobs} />
            <Route path='/Edit/:id' component = {Edit} />
            <Route path='/' component = {PageNotFound} />
        </Switch>
        </>
    )
}


export default Routes