import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchUser} from './actions';

import './App.css';
import Header from "./components/Header";
import Landing from './components/Landing';
import Dashboard from "./components/Dashboard";
import SurveyNew from "./components/surveys/SurveyNew";


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className='container'>
            <Header/>
            <Route path='/' exact component={Landing}/>
            <Route path='/surveys' exact component={Dashboard}/>
            <Route path='/surveys/new' component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, {fetchUser}) (App);
