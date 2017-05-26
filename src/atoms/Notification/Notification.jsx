import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { TweenLite } from 'gsap';

import styles from './notification.css';

export default class Notification extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    closeTitle: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    onClose: null,
    closeTitle: 'Close',
    className: null,
  };

  componentWillEnter(callback) {
    TweenLite.set(this.container, { height: 'auto' });
    TweenLite.from(this.container, 0.2, { height: 0, alpha: 0.5, onComplete: callback });
  }

  componentWillLeave(callback) {
    TweenLite.to(this.container, 0.2, { height: 0, alpha: 0.5, onComplete: callback });
  }

  render() {
    const { type, onClose, closeTitle, className, children, ...props } = this.props;

    return (
      <div
        ref={(c) => { this.container = c; }}
        className={cx(styles.main, styles[type], className)}
        {...props}
      >
        <div className={styles.content}>{children}</div>
        { onClose &&
          <button
            onClick={onClose}
            className={styles.close}
            title={closeTitle}
          >×</button>
        }
      </div>
    );
  }
}
