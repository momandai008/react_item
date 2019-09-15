import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function withCheckLogin(WrappedComponent) {

  return connect(
    (state) => ({token: state.user.token}),
    null
  )(class extends Component {
    static displayName = `CheckLogin(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    render() {

      const {
        token,
        ...rest
      } = this.props;
      const { location : { pathname } } = rest;

      if (pathname === '/login' && token) return <Redirect to="/"/>;
      if (pathname !== '/login' && !token) return <Redirect to="/login"/>;
      return <WrappedComponent {...rest}/>;
    }
  })
}

export default withCheckLogin;
