import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 37.0902,
          lng: -95.7129
        },
        zoom: 3.8
      };

      state = {
        alumni: [
          {
            lat: new Number(37.0902),
            lng: -122.4194,
          },
          {
            lat: new Number(37.0902),
            lng: -124.4194,
          }
        ]
      }



      onSubmit = (e) => {
        e.preventDefault();
        const { address, name } =  this.refs;
        const key = "AIzaSyBhgwDn93qxpxT9VBR-CTXA4m4qtgN--JY";
        console.log(address);

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.value}&key=${key}`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.results[0].geometry.location.lat);
          this.setState({
            alumni: [
              ...this.state.alumni,
              {
                lat: new Number(responseJson.results[0].geometry.location.lat),
                lng: new Number (responseJson.results[0].geometry.location.lng)
              }
            ]
          })
          console.log(this.state.alumni);
        })
        .catch((error) => {
          console.error(error);
        });

      }


  render() {
    return (
      <div className="container-fluid" style={{ height: '95vh', paddingTop: '2.5vh' }}>
            <div className="row">
            <div className="col-8" style={{ paddingLeft: 0 }}>
           <div style={{ height: '95vh'}}>
              <GoogleMapReact
                key={this.state.alumni.length}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                heatmapLibrary={true}
                heatmap={{
                  positions: this.state.alumni,
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

            </div>
            <div className="col-4">

              <form action="POST" onSubmit={this.onSubmit}>

              <div className="form-group" style={{ height: '95vh', paddingTop: '25vh' }}>         
              <label htmlFor="">Name: </label>
              <input className="form-control" ref="name" type="text"/>    
              <br/> 

              <label htmlFor="">Address: </label>
              <input className="form-control" ref="address" type="text"/> 
              <br/>

              <button type="submit" className="btn btn-primary"> Submit </button>
              
              </div>
              
              </form>


              </div>
       

          </div>
      
      </div>


    );
  }
}

export default Map;
