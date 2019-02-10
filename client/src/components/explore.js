import React, { Component } from 'react';
import { Table } from 'antd';
import '../style/App.css';

class Explore extends Component {
    constructor(props) {
        super(props);

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
        return (
            <Table dataSource={this.props.challenges} columns={this.challengeColumn} pagination={false} />
        );
    }
}

export default Explore;