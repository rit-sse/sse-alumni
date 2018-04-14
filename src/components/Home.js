import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="inner cover">
            <h1 className="cover-heading">See Where the SSE has gone.</h1>
            <p className="lead">
                We should put some kind of subtitle content here. I dunno, I'll just leave this here as a placeholder for now I guess.
            </p>
            <p className="lead">
                <a href="/login" className="btn btn-lg btn-secondary btn-login">Login</a>
                <a href="/search" className="btn btn-lg btn-secondary">Search</a>
            </p>
        </div>
    );
  }
}

export default Home;
