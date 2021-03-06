import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessagesList from './MessagesList';
import NewChannelEntry from './NewChannelEntry';
import store, { fetchMessages , fetchChannels} from '../store';
import { Provider } from 'react-redux'

export default class Main extends Component {

  componentDidMount () {
    const messagesThunk = fetchMessages();
    store.dispatch(messagesThunk);
    store.dispatch(fetchChannels())
  }

  render () {
    return (
      <Provider store = {store}>
        <div>
          <Sidebar />
          <main>
            <Switch>
              <Route path="/new-channel" component={NewChannelEntry} />
              <Route path="/channels/:channelId" component={MessagesList} />
              <Redirect to="/channels/1" />
            </Switch>
          </main>
        </div>
      </Provider>
    );
  }
}
