import React from 'react';
import { connect } from 'react-redux';

function userAge(age) {
  return age;
};

const HelloMessage = ({ name, age }) => {
  console.log('&&&&&&&&&&&&&&&& entire Props', name, age);
  return (
    <div id="foo">
      hello again {name}
      <a href='/' class='subClass-content'>
         my age is {userAge(age)}
        <img src={'image'}/>
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('++++++++++++', state);
  return {
    storeData: state && state.storeData
  }
}

HelloMessage.defaultProps = {
  name: 'Kamlesh'
}

export default connect(mapStateToProps)(HelloMessage);