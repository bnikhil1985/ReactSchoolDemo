import React, {PureComponent} from 'react'
window.doThing = () => {
  console.log('thing!')
}

export default class SearchField extends PureComponent {
  constructor(){
    super();
    this.submitFunc = this.submitFunc.bind(this)
    this.input = React.createRef()
    this.state = {
      firstName: 'nikhil'
    }
  }

  submitFunc(event) {
    event.preventDefault();
    this.props.onTextDone(this.input.current.value);
    // this.setState({firstName: 'Riaan'});
  }
  render(){
    return (
      <form onSubmit={this.submitFunc}>
        <input ref={this.input} type="text" />
        <button> submit</button>
      </form>
    );
  }
}
