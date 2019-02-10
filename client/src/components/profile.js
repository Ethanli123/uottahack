import React, { Component } from 'react';
import { Card, Col, Row, Icon, Avatar, Switch, Table, Pagination } from 'antd';
import '../style/App.css';
import '../style/profile.css';
import profile from '../images/santatrump.jpg';

const { Meta } = Card;

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

    render() {
        let msg = this.props.user.disabled ? "turn off location visibility" : "allow others to see your location";
        // anon default avatar: <Meta avatar={<Avatar size={128} icon="user" />} />

        return (
            <div className="profile-container">
                <div className="prof-title"> {this.props.user.username} </div>
                <hr className="prof-hr" />
                <Card className="profileCard" id="prof">
                    <Meta avatar={<Avatar size={128} src={profile} />}
                          title="About Me"
                          description={this.props.user.about} />
                    <br />
                    <Switch defaultChecked onChange={this.props.toggle} style={{"background-color": "#E7717D"}} />
                    <span className="disableMsg">{msg}</span>
                </Card>

                <div className="prof-title"> Points Earned </div>
                <hr className="prof-hr" />
                <Card className="profileCard">
                    <Table dataSource={this.props.user.points} columns={this.scoreboardColumn} pagination={false}/>
                </Card>

                <div className="prof-title"> Challenges Created </div>
                <hr className="prof-hr" />
                <Card className="profileCard">
                    <Table dataSource={this.props.user.challenges} columns={this.challengeColumn} pagination={false} />
                </Card>
            </div>
        );
    };
}

export default Profile;
