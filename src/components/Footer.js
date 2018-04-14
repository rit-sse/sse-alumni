import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="mastfoot">
            <div className="inner">
                <p>All content is Copyright © {new Date().getFullYear()} <a href="http://sse.rit.edu">Society of Software Engineers</a>.</p>
            </div>
        </div>
    );
  }
}

export default Footer;
