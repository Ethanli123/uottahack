import React, { Component } from 'react';
import '../style/addChallenge.css';
import { Card, Form, Select, Input, Button } from 'antd';

const { Option } = Select;

class AddChallengeForm extends Component {
    handleSubmit = (e) => {
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
          <Card className="form-card">
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
                      label="Location"
                      labelCol={{ span: 5 }}
                      wrapperCol={{ span: 12 }}
                  >
                      {getFieldDecorator('location', {
                          rules: [{ required: true, message: 'Please input your location!' }],
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

                  <Form.Item>
                  <Button type="primary" htmlType="submit">Add Challenge!</Button>
                  </Form.Item>
              </Form>
            </Card>
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
