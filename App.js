import React, {PureComponent} from 'react'
import SearchField from './SearchField';

const HelloMessage = ({ name }) => {
 return <div id="foo">hello again {name}</div>;
}

function onButtonClick(){
  console.log("are you really coming here");
  document.getElementById('textInput').className="show";
}
const displayNone = {display: "none"};

export default class App extends PureComponent {
  render(){
    return (
      <div>
        <HelloMessage name="nikhil"/>
        <SearchField id="foo" onTextDone={(value) => {
          // <HelloMessage name="nikhil"/>
          document.getElementById('submitted').style.display="block";
          console.log('>>> log: ', value);
        }}/>
        <div id= "submitted" style={displayNone}>submitted successfully</div>
      </div>
    );
  }
}
