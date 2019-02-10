import React, { Component } from 'react';
import { Card, Avatar, Switch, Table } from 'antd';
import '../style/profile.css';
import profile from '../images/santatrump.jpg';

const { Meta } = Card;

class Profile extends Component {
    constructor(props) {
        super();
    }
    
    render() {
        let msg = this.props.user.disabled ? "turn off location visibility" : "allow others to see your location";
        // anon default avatar: <Meta avatar={<Avatar size={128} icon="user" />} />

        return (
            <div>
                <Card className="profileCard" title={this.props.user.username}>
                    <Meta avatar={<Avatar size={128} src={profile} />} 
                          title="About Me"
                          description={this.props.user.about} />
                    <br />
                    <Switch defaultChecked onChange={this.props.toggle} style={{"background-color": "#E7717D"}} />
                    <span className="disableMsg">{msg}</span>
                </Card>
            
                <Card className="profileCard" title="City Scoreboard">
                    <Table dataSource={this.props.user.points} columns={this.props.user.scoreboardColumn} pagination={false}/> 
                </Card>

                <Card className="profileCard" title="Challenges">
                    <Table dataSource={this.props.user.challenges} columns={this.props.user.challengeColumn} pagination={false} />
                </Card>
            </div>
        );
    };
}

export default Profile;