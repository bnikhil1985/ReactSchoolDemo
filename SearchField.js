import React, {PureComponent} from 'react'
window.doThing = () => {
  console.log('thing!')
}

export default class SearchField extends PureComponent {
  constructor(){
    super();
    this.state = {
      textBoxVal: ''
    }
  }
  onKey(event) {
    this.setState({
      textBoxVal: event.target.value,
    })
  }
  render(){
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.onTextDone(this.state.textBoxVal);
      }}>
        <input type="text" onKeyDown={this.onKey.bind(this)}/>
      </form>
    );
  }
}
