import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import SuccessNotification, { ErrorNotification } from '../../atoms/Notification';

import styles from './styles.css';
import animations from './animations.css';

const ANIMATION_IN = 500;
const ANIMATION_OUT = 500;

class NotificationCenter extends Component {
  static propTypes = {
    notifications: PropTypes.array,
    duration: PropTypes.number,
    onRemove: PropTypes.func.isRequired,
  };

  static defaultProps = {
    notifications: [],
    duration: 1000,
  };

  render() {
    const { notifications, duration, onRemove } = this.props;

    return (
      <div className={styles.main}>
        <CSSTransitionGroup
          transitionName={animations}
          transitionEnterTimeout={ANIMATION_IN}
          transitionLeaveTimeout={ANIMATION_OUT}
        >
          {notifications.map(n => (
            <Wrapper
              id={n.id}
              key={n.id}
              duration={duration}
              onRemove={onRemove}
            >
              { n.type === 'success' ? <SuccessNotification>{n.message}</SuccessNotification> : null}
              { n.type === 'error' ? <ErrorNotification>{n.message}</ErrorNotification> : null}
            </Wrapper>
          ))}
        </CSSTransitionGroup>
      </div>
    );
  }
}

class Wrapper extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    duration: PropTypes.number.isRequired,
  };

  componentDidMount() {
    setTimeout(() => {
      this.handleRemove();
    }, ANIMATION_IN + this.props.duration);
  }

  handleRemove = () => this.props.onRemove(this.props.id);

  render() {
    return (
      <div onClick={this.handleRemove} className={styles.item}>
        {this.props.children}
      </div>
    );
  }
}

export default NotificationCenter;
