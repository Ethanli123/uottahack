import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './map';

const challenges = [{
    location: {lat: 45.427963, lng: -75.686682},
    activity: "Be a Boss!",
    difficulty: 2,
    votes: 100,
  },
  {
    location: {lat: 45.430162, lng: -75.685577},
    activity: "Be a Boss2!",
    difficulty: 3,
    votes: 100,
  },
  {
    location: {lat: 45.428979, lng: -75.683226},
    activity: "Be a Boss3!",
    difficulty: 4,
    votes: 100,
  },
];

export class MapContainer extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  renderMapMarkers = (props, that) => {
    return challenges.map(function(challenge, i) {
      return (
        <Marker
          onClick={that.onMarkerClick}
          activity={challenge.activity}
          votes={challenge.votes}
          difficulty={challenge.difficulty}
          position={{lat: challenge.location.lat, lng: challenge.location.lng }}
          key={i}
        />
      );
    });
  }

  renderInfoWindows = (props, that) => {
    console.log(that.state.selectedPlace.challenge);
    return challenges.map(function(challenge, i) {
      return (
        <InfoWindow
          marker={that.state.activeMarker}
          visible={that.state.showingInfoWindow}
          onClose={that.onClose}
        >
          <div>
            <h4>{that.state.selectedPlace.activity}</h4>
            <span>
              <p><strong>Difficulty:</strong></p>
              <p>{that.state.selectedPlace.difficulty}</p>
            </span>
            <span>
              <p><strong>Votes:</strong></p>
              <p>{that.state.selectedPlace.votes}</p>
            </span>
          </div>
        </InfoWindow>
      );
    });
  }

  renderList = (props, that) => {
    return challenges.map(function(challenge, i) {
      return (
        <div className="list-container">
          <div className="list-title">
            {challenge.activity}
          </div>
          <hr className="list-hr" />
          <div>
            <span className="list-span">
              <div><strong> City </strong></div>
              <div> {challenge.city}</div>
            </span>
          </div>
          <div>
            <span className="list-span">
              <div><strong> Votes </strong></div>
              <div> {challenge.votes}</div>
            </span>
          </div>
          <div>
            <span className="list-span">
              <div><strong> Difficulty </strong></div>
              <div> {challenge.difficulty} </div>
            </span>
          </div>
          <hr className="list-hr" />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="explore-container">
        <div className="explore-challenge-title">Explore Challenges</div>
        <div className = "map-container">
          <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
            <Marker
              icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>Your location</h4>
              </div>
            </InfoWindow>
            {this.renderMapMarkers(this.props, this)}
            {this.renderInfoWindows(this.props, this)}
          </CurrentLocation>
        </div>
        <div className="ec-list">
          {this.renderList(this.props, this)}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCAe6yaRlxGC63sibC4cPvalKY9ng-vHoM'
})(MapContainer);
