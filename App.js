import React, {PureComponent} from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import SearchField from './SearchField';
import Video from './Video';
import store from './store/store';
import { actionCreator } from './store/reducer';
import HelloMessage from './HelloMessage.js';
import NameCard from './NameCard.js';

const API_KEY = 'AIzaSyC0nBySZQaiRMzCXOBqRdAVx0HRgFT5YdY';

// const store = createStore(reducer);

function onButtonClick(){
  console.log("are you really coming here");

  document.getElementById('textInput').className="show";
}
const displayNone = {display: "none"};

// function mapStateToProps(state) {
//   console.log('++++++++++++', state);
//   return {
//     storeData: state && state.storeData
//   }
// }

export default class App extends PureComponent {

  state = { YTList: [], lat: 'abc', storeData: '' }
  YTSearch = (value) => {
    const action = actionCreator(value);
    store.dispatch(action);
  console.log('Stored Data', store.getState());
    YTSearch({key: API_KEY, term: value}, (data) => {
      this.setState({YTList: data, storeData: store.getState().storeData});
    });
  }

  // <SearchField id="foo" onTextDone={this.YTSearch}/>
  // {this.state.YTList.map((item) => {
  //   return <Video key ={item.id.videoId} videoId={item.id.videoId}/>;
  // })}
  render(){
    this.setState({ lat: 'xyz'})
    return (
      <div className="ui container comments" >
        <NameCard>
          <HelloMessage name="nikhil" age="20"/>
          latitude: {this.state.lat}
        </NameCard>
        <SearchField id="foo" onTextDone={this.YTSearch}/>
        <ul>
          {this.state.storeData && this.state.storeData.map((data) => {
            return <li>{data}</li>
          })}
        </ul>

        {this.state.YTList.map((item) => {
          return <Video videoId={item.id.videoId}/>;
        })}
      </div>
    );
  }
}

// export default connect(mapStateToProps)(
//   App
// )