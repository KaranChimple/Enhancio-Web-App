import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UsersList from './screens/UsersList';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <UsersList />
            </Provider>
        )
    }
}

export default App;
