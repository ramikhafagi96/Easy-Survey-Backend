import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; // give components ability to call action creators
import * as actions from '../actions';
import Header from './Header';
class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }


    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        {/* <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} /> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);