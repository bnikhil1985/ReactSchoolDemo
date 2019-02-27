import React from 'react';


function userAge(age) {
  return age;
};

const HelloMessage = props => {
  return (
    <div id="foo">
      hello again {props.name}
      <a href='/' class='subClass-content'>
         my age is {userAge(props.age)}
        <img src={'image'}/>
      </a>
    </div>
  );
};

HelloMessage.defaultProps = {
  name: 'Kamlesh'
}

export default HelloMessage;