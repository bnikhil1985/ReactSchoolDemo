import React, {PureComponent} from 'react'
window.doThing = () => {
  console.log('thing!')
}

export default class SearchField extends PureComponent {
  constructor(){
    super();
    // this.submitFunc = this.submitFunc.bind(this)
    // this.upperCaseLetter = this.upperCaseLetter.bind(this)
    this.input = React.createRef()
    this.state = {
      firstName: 'nikhil',
      term: ''
    }
  }

  submitFunc = (event) => {
    event.preventDefault();
    this.props.onTextDone(this.input.current.value);
    // this.setState({firstName: 'Riaan'});
  }

  upperCaseLetter = (event) => {
    this.setState({term: event.target.value.toUpperCase()});
  }
  // value={this.state.term}
  // onChange={this.upperCaseLetter}
  render(){
    return (
      <form onSubmit={this.submitFunc}>
        <input ref={this.input}
          type="text"
          value={this.state.term}
          onChange={this.upperCaseLetter}
        />
        <button> submit</button>
      </form>
    );
  }
}
