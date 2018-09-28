import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Getting your expenses under control.</p>
      <div className="box-layout__data">
        <button className="button" onClick={startLoginGoogle}>Login with Google</button>
        <button className="button button--darkened" onClick={startLoginFacebook}>Login with Facebook</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect (undefined,mapDispatchToProps)(LoginPage);