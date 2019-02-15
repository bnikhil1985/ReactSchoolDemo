import React, {PureComponent} from 'react'

export default class Video extends PureComponent {

  render(){
    return (
      <iframe width="420" height="345" src= {'https://www.youtube.com/embed/'+ this.props.videoId}></iframe>
    );
  }
}
