import React from 'react';
import { connect } from 'react-redux';

const onClickHandler = (name) => {
  const action = checkedActionCreator(name);
  store.dispatch(action);
}

const CheckBox = (state) => {
  console.log('%%%%%%%%%%%', state);
  return (
    <div>checking box</div>
  );
}

const mapStateToProps = (state) => {
  return {
    checked: state.checked
  };
}

export default connect(mapStateToProps)(CheckBox);