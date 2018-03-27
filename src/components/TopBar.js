import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
        <div class="masthead clearfix">
            <div class="inner">
                <h3 class="masthead-brand">SSE Alumni Directory</h3>
                <nav class="nav nav-masthead">
                    <Link class="nav-link" to='/home'>Home</Link>
                    <Link class="nav-link" to='/search'>Search</Link>
                    <Link class="nav-link" to='/login'>Login</Link>
                </nav>
            </div>
        </div>
    );
  }
}

export default TopBar;
