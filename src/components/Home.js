import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div class="inner cover">
            <h1 class="cover-heading">See Where the SSE has gone.</h1>
            <p class="lead">
                We should put some kind of subtitle content here. I dunno, I'll just leave this here as a placeholder for now I guess.
            </p>
            <p class="lead">
                <a href="/profiles" class="btn btn-lg btn-secondary btn-login">Profiles</a>
                <a href="/login" class="btn btn-lg btn-secondary btn-login">Login</a>
                <a href="/search" class="btn btn-lg btn-secondary">Search</a>
            </p>
        </div>
    );
  }
}

export default Home;
