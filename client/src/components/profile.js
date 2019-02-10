import React, { Component } from 'react';
import { Card, Col, Row, Icon, Avatar, Switch, Table, Pagination } from 'antd';
import '../style/profile.css';
import profile from '../images/santatrump.jpg';

const { Meta } = Card;

const user = {
    username: "Tronald Dump",
    about: `Hi, my name is Tronald Dump, I am the long lost brother of our 
            glorious leader Donald Trump. In my spare time I love grabbing 
            th0ts right in the pu$$y, and engaging in physical activities that
            help increase the size of my already massive, firm, throbbing hands.`,
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
            challengeName: "Do a barrel roll!"
        },
        {
            city: "Victoria",
            location: "4304 Faithwood Road",
            challengeName: "Catch my cat Nao Nao"
        },
        {
            city: "Waterloo",
            location: "MC, University of Waterloo",
            challengeName: "Beat Tiger in a game of chess"
        },
        {
            city: "Amsterdam",
            location: "NONE OF UR BIZNESS BIATCH",
            challengeName: "Do a barrel roll!"
        },
        {
            city: "Victoria",
            location: "4304 Faithwood Road",
            challengeName: "Catch my cat Nao Nao"
        },
        {
            city: "Waterloo",
            location: "MC, University of Waterloo",
            challengeName: "Beat Tiger in a game of chess"
        }
    ]
};

class Profile extends Component {
    constructor(props) {
        super();
        this.state = {
            disabled: true,
        };

        this.scoreboardColumn = [
            {
                title: 'City Name',
                dataIndex: 'cityName',
                key: 'cityName'
            }, {
                title: 'Points Earned',
                dataIndex: 'cityPoints',
                key: 'cityPoints'
            }
        ];
        this.challengeColumn = [
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
            }
        ];
    }
    
    toggle = () => {
        this.setState({
          disabled: !this.state.disabled,
        });
    }
    
    render() {
        let msg = this.state.disabled ? "allow others to see your location" : "turn off location visibility";
        // anon default avatar: <Meta avatar={<Avatar size={128} icon="user" />} />

        return (
            <div>
                <Card className="profileCard" title={user.username}>
                    <Meta avatar={<Avatar size={128} src={profile} />} 
                          title="About Me"
                          description={user.about} />
                    <br />
                    <Switch defaultChecked onChange={this.toggle} style={{"background-color": "#E7717D"}} />
                    <span className="disableMsg">{msg}</span>
                </Card>
            
                <Card className="profileCard" title="City Scoreboard">
                    <Table dataSource={user.points} columns={this.scoreboardColumn} pagination={false}/> 
                </Card>

                <Card className="profileCard" title="Challenges Submitted">
                    <Table dataSource={user.challenges} columns={this.challengeColumn} pagination={false} />
                </Card>
            </div>
        );
    };
}

export default Profile;