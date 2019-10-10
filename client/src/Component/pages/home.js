import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <img
          src="/img/background.svg"
          alt=""
          style={{
            marginTop: '-50px',
            width: '100%',
            height: `calc(100%-$74px)`
          }}
        />
      </div>
    );
  }
}

export default Home;
