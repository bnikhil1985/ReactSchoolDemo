import React, {PureComponent} from 'react'
import SearchField from './SearchField';

const HelloMessage = ({ name }) => {
 return <div id="foo">hello again {name}</div>;
}

export default class App extends PureComponent {
  render(){
    return (
      <div>
        <HelloMessage name="nikhil"/>
        <SearchField id="foo" onTextDone={(value) => {
          console.log('>>> log: ', value);
        }}/>
      </div>
    );
  }
}
