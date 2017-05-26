import React, { Component } from 'react';

import {
  Baseline,
  Notification,
  NotificationCenter,
} from '../src';

export default class App extends Component {
  state = {
    notifications: [],
  };

  componentDidMount() {
    setTimeout(() => this.setState({
      notifications: [
        { id: '1', type: 'error', message: 'Hello, world!' },
        { id: '2', type: 'warning', message: 'Hello, world!' },
        { id: '3', type: 'success', message: 'Hello, world!' },
        { id: '4', type: 'info', message: 'Hello, world!' },
      ],
    }), 1000);
  }

  render() {
    const { notifications } = this.state;
    return (
      <Baseline>
        <NotificationCenter>
          {notifications.map((n) => {
            const onClose = () => this.setState({
              notifications: notifications.filter(a => a.id !== n.id),
            });

            return (
              <Notification key={n.id} onClose={onClose} type={n.type}>
                {n.message}
              </Notification>
            );
          })}
        </NotificationCenter>
      </Baseline>
    );
  }
}
