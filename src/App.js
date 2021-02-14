import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Main from "./pages/Main";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Route path="/registration" exact render={() => <Registration />} />
                <Route path="/login" render={() => <Login />} />
                <Route exact path="/">
                    <Main />
                </Route>
            </Router>
        );
    }
}

export let isLoading = true;

export default App;