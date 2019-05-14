import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="alert-info">
          Salut !
        </div>
      </div>
    );
  }
}

if (document.getElementById('root')) {
  ReactDOM.render(<Homepage/>, document.getElementById('root'));
}
