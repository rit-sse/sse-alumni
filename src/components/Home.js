import React, { Component } from 'react';
import BarChart from '../map_components/D3_Component_Test';
//import DensityMap from './DensityMap_React';

class Home extends Component {
  render() {
    return (
        <div class="inner cover">
            <h1 class="cover-heading">See Where the SSE has gone.</h1>
            <p class="lead">
                We should put some kind of subtitle content here. I dunno, I'll just leave this here as a placeholder for now I guess.
            </p>
            <div>
                <BarChart data={[5,10,1,3]} size={[500,500]} />
            </div>
            {/* <DensityMap /> */}

            <p class="lead">
                <a href="/login" class="btn btn-lg btn-secondary btn-login">Login</a>
                <a href="/search" class="btn btn-lg btn-secondary">Search</a>
            </p>
        </div>
    );
  }
}

export default Home;
