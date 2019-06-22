
import React from 'react';
import reactDom from 'react-dom';
import axios from 'axios';

class App extends React.PureComponent {
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/ms891', {}).then((res) => {
      console.log('####', res);
    });
  }

  render() {
    return (
      <div>
        <h3>this is login page</h3>
      </div>
    );
  }
}
reactDom.render(<App />, document.getElementById('app'));
