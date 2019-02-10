import React, { Component } from 'react';
import '../style/addChallenge.css';
import { Form, Input, Button } from 'antd';

class AddChallengeForm extends Component {
    handleSubmit = (e) => {
        console.log("HANDLESUBMIT");
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.form.resetFields();
                this.props.processInfo(values);
            } // if
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form className="form" onSubmit={this.handleSubmit}>
                <Form.Item
                    label="City"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('city', {
                        rules: [{ required: true, message: 'Please input your city!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    label="Description"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('challengeName', {
                        rules: [{ required: true, message: 'Please input your challenge description!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    label="Difficulty"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('difficulty', {
                        rules: [{ required: true, message: 'Please input your challenge difficulty!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    label="X coord"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('x', {
                        rules: [{ required: true, message: 'Please input your x coordinate!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    label="Y coord"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('y', {
                        rules: [{ required: true, message: 'Please input your y coordinate!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                
                <Form.Item>
                <Button type="primary" htmlType="submit">Add Challenge!</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedForm = Form.create()(AddChallengeForm);

function AddChallenge(props) {
    return (
        <WrappedForm processInfo={props.processInfo} />
    );
}

export default AddChallenge;