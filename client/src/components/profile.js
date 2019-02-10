import React, { Component } from 'react';
import '../style/App.css';

const user = {
    username: "E10 Li",
    points: [
        {
            cityName: "Ottawa",
            cityPoints: 30
        },
        {
            cityName: "Toronto",
            cityPoints: 90
        },
        {
            cityName: "Fuckyou County",
            cityPoints: 69
        }
    ]
};

class Profile extends Component {
    renderCityPoints = () => {
        let list = [];

        user.points.forEach((tuple, i) => {
            list.push(
                <li key={i}>{tuple.cityName}: {tuple.cityPoints}</li>
            );
        });

        return (
            <ul>{list}</ul>
        );
    }
    
    render() {
        return (
            <div>
                <ul>
                    <li>Name: {user.username}</li>
                    <li>Points: {this.renderCityPoints()}</li>
                </ul>
            </div>
        );
    };
}

export default Profile;