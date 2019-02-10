import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header'
import NavBar from './components/nav';
import Footer from './components/footer';
import Profile from './components/profile';
import Explore from './components/explore';
import AddChallenge from './components/addChallenge';
import './style/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            username: "Tronald Dump",
            about: `Hi, my name is Tronald Dump, I am the long lost brother of our 
                    glorious leader Donald Trump. In my spare time I love building sand 
                    walls at the beach and admiring my H U M O N G O U S hands.`,
            scoreboardColumn: [
                {
                    title: 'City Name',
                    dataIndex: 'cityName',
                    key: 'cityName'
                }, {
                    title: 'Points Earned',
                    dataIndex: 'cityPoints',
                    key: 'cityPoints'
                }
            ],
            challengeColumn: [
                {
                    title: 'City',
                    dataIndex: 'city',
                    key: 'city'
                }, {
                    title: 'Location',
                    dataIndex: 'location',
                    key: 'location'
                }, {
                    title: 'Challenge',
                    dataIndex: 'challengeName',
                    key: 'challengeName'
                }, {
                    title: 'Difficulty',
                    dataIndex: 'difficulty',
                    key: 'difficulty'
                }
            ],
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
            ],
            challenges: [
                {
                    city: "Amsterdam",
                    location: "NONE OF UR BIZNESS BIATCH",
                    challengeName: "Do a barrel roll!",
                    difficulty: 1
                },
                {
                    city: "Victoria",
                    location: "4304 Faithwood Road",
                    challengeName: "Catch my cat Nao Nao",
                    difficulty: 5
                },
                {
                    city: "Waterloo",
                    location: "MC, University of Waterloo",
                    challengeName: "Beat Tiger in a game of chess",
                    difficulty: -1
                }
            ]
        };
    }

    addChallenge = (values) => {
        let { city, location, challengeName } = values;

        this.setState({
            challenges: [...this.state.challenges, { city, location, challengeName }]
        });
    }

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    
    render() {
        return (
        <div className="App">
            <Header />
            <NavBar />
            <Switch>
            <Route exact path='/' render={(props) => {
                return (
                    <Explore {...props} challenges={this.state.challenges} />
                );
            }} />
            <Route exact path='/profile' render={(props) => {
                return (
                    <Profile {...props} user={this.state} toggle={this.toggle} />
                );
            }} />
            <Route exact path='/add-challenges' render={(props) => {
                return (
                    <AddChallenge {...props} processInfo={this.addChallenge} />
                );
            }} />
            </Switch>
            <Footer />
        </div>
        );
    }
}

export default App;
