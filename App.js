import React, {PureComponent} from 'react'
import SearchField from './SearchField';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC0nBySZQaiRMzCXOBqRdAVx0HRgFT5YdY';

const HelloMessage = ({ name }) => {
 return <div id="foo">hello again {name}</div>;
}

function onButtonClick(){
  console.log("are you really coming here");

  document.getElementById('textInput').className="show";
}
const displayNone = {display: "none"};


export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      YTList: [],
    }
  }
  render(){
    return (
      <div>
        <HelloMessage name="nikhil"/>
        <SearchField id="foo" onTextDone={(value) => {
          // document.getElementById('submitted').style.display="block";
          YTSearch({key: API_KEY, term: value}, (data) => {
            this.setState({YTList: data});
          });
        }}/>
        {this.state.YTList.map((item) => {
           return (<iframe width="420" height="345" src= {'https://www.youtube.com/embed/'+ item.id.videoId}></iframe>);
        })}
      </div>
    );
  }
}
