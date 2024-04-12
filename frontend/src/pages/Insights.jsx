import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import signupImg from "../assets/images/signup.gif";

const { Option } = Select;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Insights = () => (
  <section className="px-5 xl:px-0 py-[55px]">
    <div className="max-w-[1170px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/*=========Img Box ===========*/}
        <div className="hidden lg:block bg-primaryColor rounded-l-lg">
          <figure className="rounded-l-lg">
            <img src={signupImg} className="w-full rounded-l-lg" alt="" />
          </figure>
        </div>

        {/* ================ SignUp Form ================== */}
        <div className="rounded-l-lg lg:pl-16 py-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center ml-32">
            Link with <span className="text-primaryColor">HealthLink360</span>
          </h3>
          <Form
            name="subscribe_form"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender",
                },
              ]}
            >
              <Select placeholder="Select an option" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="job_title"
              label="Job Title"
              rules={[
                {
                  required: true,
                  message: "Please write your job title!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="company_name"
              label="Company Name"
              rules={[
                {
                  required: true,
                  message: "Please write your company name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="company_website"
              label="Company Website"
              rules={[
                {
                  required: true,
                  message: "Please write your company website!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox className="ml-12">Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="ml-12">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  </section>
);
export default Insights;
