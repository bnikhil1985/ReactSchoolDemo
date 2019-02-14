import React, {PureComponent} from 'react';
import { createStore } from 'redux';
import YTSearch from 'youtube-api-search';
import SearchField from './SearchField';
import Video from './Video';

const API_KEY = 'AIzaSyC0nBySZQaiRMzCXOBqRdAVx0HRgFT5YdY';

const reducer = (state, action) => {
  console.log('I am in the reducer');
  return {storeData: action.data};
}
const store = createStore(reducer);
store.dispatch({
  type: '123',
  data: 'abc'
})
console.log('Reducer :----', store.getState());


const HelloMessage = ({ name }) => {
 return <div id="foo">hello again {name}</div>;
}

function onButtonClick(){
  console.log("are you really coming here");

  document.getElementById('textInput').className="show";
}
const displayNone = {display: "none"};


export default class App extends PureComponent {
  // constructor() {
  //   super();
  //   this.state = {
  //     YTList: [],
  //   }
  //   this.YTSearch = this.YTSearch.bind(this)
  // }
  state = { YTList: [] }
  YTSearch = (value) => {
    // document.getElementById('submitted').style.display="block";
    YTSearch({key: API_KEY, term: value}, (data) => {
      this.setState({YTList: data});
    });
  }
  render(){
    return (
      <div>
        <HelloMessage name="nikhil"/>
        <SearchField id="foo" onTextDone={this.YTSearch}/>
        {this.state.YTList.map((item) => {
           return <Video key ={item.id.videoId} videoId={item.id.videoId}/>;
        })}
      </div>
    );
  }
}
