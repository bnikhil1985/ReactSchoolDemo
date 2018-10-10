const React = window.React;
const ReactDOM = window.ReactDOM;

const HelloMessage = ({}) => {
 return <div>hello</div>;
}

ReactDOM.render(
 <HelloMessage/>,
 document.getElementById('app'),
);