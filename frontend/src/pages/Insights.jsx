import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import signupImg from "../assets/images/signup.gif";

const { Option } = Select;

const Insights = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    gender: "",
    email: "",
    job_title: "",
    company_name: "",
    company_website: "",
    remember: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  useEffect(() => {
    console.log("Submission Status:", submissionStatus);
  }, [submissionStatus]);

  const onFinish = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/submitSubscribeForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmissionStatus("Submission successful");
      } else {
        setSubmissionStatus("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      setSubmissionStatus("Internal server error");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (changedValues) => {
    setFormData({ ...formData, ...changedValues });
  };

  return (
    <section className="px-5 xl:px-0 py-[55px]">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} className="w-full rounded-l-lg" alt="" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center lg:ml-32">
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
              onValuesChange={handleChange}
            >
              {/* Form fields */}
              {/* Form.Item for Username */}
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

              {/* Form.Item for Password */}
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

              {/* Form.Item for Gender */}
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

              {/* Form.Item for E-mail */}
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

              {/* Form.Item for Job Title */}
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

              {/* Form.Item for Company Name */}
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

              {/* Form.Item for Company Website */}
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

              {/* Form.Item for Remember Me */}
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox className="md:ml-12 lg:ml-12">Remember me</Checkbox>
              </Form.Item>

              {/* Form.Item for Submit Button */}
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="md:ml-12 lg:ml-12 bg-primaryColor"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center py-2">
              {submissionStatus && (
                <div
                  className={`${
                    submissionStatus === "Submission successful"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {submissionStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
