import React, {PureComponent} from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import SearchField from './SearchField';
import CheckBox from './CheckBox';
import Video from './Video';
import store from './store/store';
import { searchActionCreator, checkedActionCreator } from './store/reducer';
import HelloMessage from './HelloMessage.js';
import NameCard from './NameCard.js';

const API_KEY = 'AIzaSyC0nBySZQaiRMzCXOBqRdAVx0HRgFT5YdY';

// const store = createStore(reducer);

function onButtonClick(){
  console.log("are you really coming here");

  document.getElementById('textInput').className="show";
}
const displayNone = {display: "none"};

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { YTList: [], lat: 'abc', storeData: '' }
  }

  YTSearch = (value) => {
    const action = searchActionCreator(value);
    store.dispatch(action);
  console.log('Stored Data', store.getState());
    YTSearch({key: API_KEY, term: value}, (data) => {
      this.setState({YTList: data, storeData: store.getState().storeData});
    });
  }

  onClickHandler = (name, id) => {
    const action = checkedActionCreator(name, id);
    store.dispatch(action);
    this.setState({storeData: store.getState().storeData});
  }

  // componentDidUpdate(prevProp, updatedProp) {
  //   console.log('componentDidUpdate', prevProp, updatedProp);

  // }
  // <SearchField id="foo" onTextDone={this.YTSearch}/>
  // {this.state.YTList.map((item) => {
  //   return <Video key ={item.id.videoId} videoId={item.id.videoId}/>;
  // })}
  render(){
    console.log('this.Props----------', this.props);
    // this.setState({ lat: 'xyz'})
    return (
      <div className="ui container comments" >
        <NameCard>
          <HelloMessage name="nikhil" age="20"/>
          latitude: {this.state.lat}
        </NameCard>
        <SearchField id="foo" onTextDone={this.YTSearch}/>

        <ul>
          {this.state.storeData && this.state.storeData.map(({name, checked, id}) => {
            return <li key={name} onClick={(e) => this.onClickHandler(name, id) }> {name} {checked ? '✓': '✗' }</li>
          })}
        </ul>

        {this.state.YTList.map((item) => {
          return <Video key ={item.id.videoId} videoId={item.id.videoId}/>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapstate&&&&&&&&', state);
  return {
    storeData: (state && state.storeData) ? state.storeData: []
  };
}

export default connect(mapStateToProps, {
  checkedActionCreator, searchActionCreator
})(App);
