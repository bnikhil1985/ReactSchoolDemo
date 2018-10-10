import React from 'react';
import ReactDOM from 'react-dom';

const HelloMessage = ({}) => {
 return <div>hello</div>;
}

ReactDOM.render(
 <HelloMessage/>,
 document.getElementById('app'),
);