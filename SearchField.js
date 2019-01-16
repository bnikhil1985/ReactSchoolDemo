import React, {PureComponent} from 'react'
window.doThing = () => {
  console.log('thing!')
}

export default class SearchField extends PureComponent {
  constructor(){
    super();

    // this.onKey/ = this.onKey.bind(this);
    this.submitFunc = this.submitFunc.bind(this)
    this.input = React.createRef()
  }
  
  submitFunc(event) {
    event.preventDefault();
    this.props.onTextDone(this.input.current.value);
  }
  render(){
    return (
      <form onSubmit={this.submitFunc}>
        <input ref={this.input} type="text"/>
        <button> submit</button>
      </form>
    );
  }
}
