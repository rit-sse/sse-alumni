import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;



class Map extends Component {
    static defaultProps = {
        center: {
          lat: 37.0902,
          lng: -95.7129
        },
        zoom: 4
      };


  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={{
            positions: [
              {
                lat: 37.0902,
                lng: -97.7129,
              },
              {
                lat: 37.0902,
                lng: -97.7129,
              },
              {
                lat: 37.7749,
                lng: -122.4194,
              },
              {
                lat: 37.7749,
                lng: -122.4194,
              },
              {
                lat: 37.7749,
                lng: -122.4194,
              },
              {
                lat: 37.7749,
                lng: -122.4194,
              },
              
            ],
            options: {
              radius: 40,
              opacity: 0.8,
              gradient: [
                'rgba(255, 0, 255, 0)',
                'rgba(255, 0, 255, 1)',
                
              ]
            },
          }}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
