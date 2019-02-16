import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isLoggedIn ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isLoggedIn={false} info="These are the details" />, document.getElementById('app'));