import React, { Fragment, } from 'react';
import {Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Departments from './components/Departments';
import NoMatch from './components/NoMatch';
import {Container, } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import DepartmentForm from './components/DepartmentForm';
import DepartmentView from './components/DepartmentView';


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={DepartmentView} /> 
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)
export default App;
