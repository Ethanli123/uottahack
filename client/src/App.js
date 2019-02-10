import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header'
import NavBar from './components/nav';
import Footer from './components/footer';
import Profile from './components/profile';
import Explore from './components/explore';
import AddChallenge from './components/addChallenge';
import dal from './api/index';
import './style/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "user000000",
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
                    cityPoints: 20
                }, {
                    cityName: "Toronto",
                    cityPoints: 90
                }, {
                    cityName: "Waterloo",
                    cityPoints: 10
                }
            ],
            challenges: [],
            completed: []
        };
    }

    initData = () => {
        dal.getChallenges().then((res) => {
            let data = res.data;
            let arr = [];

            Object.entries(data).forEach(entry => {
                let row = entry[1];
                let challenge = {
                    location: row.location,
                    challengeName: row.activity,
                    city: row.city,
                    difficulty: row.difficulty,
                    key: entry[0]
                }
                arr.push(challenge);
            });
            this.setState({ challenges: arr })
        })
        .catch((err) => {
            console.log(err);
        });
    } // initData

    addChallenge = (values) => {
        let { city, location, challengeName, difficulty } = values;

        let challenge = {
            activity: challengeName,
            city: city,
            difficulty: difficulty,
            location: location,
            votes: 0
        };

        dal.createChallenge(challenge).then((res) => {
            this.initData();
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`);
        });
    }

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    componentWillMount() {
        this.initData();
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
