import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Input, DatePicker, Button, Form, Skeleton } from "antd";
import dayjs from "dayjs";

const dummyCustomerData = {
  customerId: "512345678",
  fullName: "John Doe",
  email: "johndoe@example.com",
  phone: "9876543210",
  dob: "1995/05/15",
  address: "123, MG Road, Bangalore, Karnataka, India"
};

export default function Customer360Form() {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCustomerData({ ...dummyCustomerData, dob: dayjs(dummyCustomerData.dob) });
    }, 1000);
  }, []);

  if (!customerData) return <Skeleton/>;

  const validate = (values) => {
    const errors = {};
    if (!values.customerId) errors.customerId = "Customer ID is required";
    else if (!/^[56]\d{8}$/.test(values.customerId))
      errors.customerId = "Customer ID must be 9 digits and start with 5 or 6";
    if (!values.fullName) errors.fullName = "Full Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errors.email = "Invalid email address";
    if (!values.phone) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(values.phone)) errors.phone = "Phone number must be 10 digits";
    if (!values.dob || !dayjs(values.dob).isValid()) errors.dob = "Date of Birth is required or invalid";
    return errors;
  };

  return (
    <>
    <h1>Customer Details</h1>
    <Formik
      initialValues={customerData}
      enableReinitialize
      validate={validate}
      onSubmit={(values) => {
        const payload = { ...values, dob: values.dob ? values.dob.format("YYYY/MM/DD") : null };
        console.log("Updated JSON ✅", payload);
      }}
    >
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => (
        <Form layout="vertical" onFinish={handleSubmit} className="max-w-md mx-auto p-6 border rounded-lg shadow">
          {/* Customer ID */}
          <Form.Item
            label="Customer ID"
            validateStatus={errors.customerId && touched.customerId ? "error" : ""}
            help={touched.customerId && errors.customerId}
          >
            <Input
              name="customerId"
              value={values.customerId}
              onChange={(e) => {
                handleChange(e);
                setCustomerData({ ...customerData, customerId: e.target.value });
              }}
            />
          </Form.Item>

          {/* Full Name */}
          <Form.Item
            label="Full Name"
            validateStatus={errors.fullName && touched.fullName ? "error" : ""}
            help={touched.fullName && errors.fullName}
          >
            <Input
              name="fullName"
              value={values.fullName}
              onChange={(e) => {
                handleChange(e);
                setCustomerData({ ...customerData, fullName: e.target.value });
              }}
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            validateStatus={errors.email && touched.email ? "error" : ""}
            help={touched.email && errors.email}
          >
            <Input
              name="email"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
                setCustomerData({ ...customerData, email: e.target.value });
              }}
            />
          </Form.Item>

          {/* Phone */}
          <Form.Item
            label="Phone Number"
            validateStatus={errors.phone && touched.phone ? "error" : ""}
            help={touched.phone && errors.phone}
          >
            <Input
              name="phone"
              value={values.phone}
              onChange={(e) => {
                handleChange(e);
                setCustomerData({ ...customerData, phone: e.target.value });
              }}
            />
          </Form.Item>

          {/* DOB */}
          <Form.Item
            label="Date of Birth"
            validateStatus={errors.dob && touched.dob ? "error" : ""}
            help={touched.dob && errors.dob}
          >
            <DatePicker
              format="YYYY/MM/DD"
              value={values.dob}
              onChange={(date) => {
                setFieldValue("dob", date);
                setCustomerData({ ...customerData, dob: date });
              }}
              style={{ width: "100%" }}
            />
          </Form.Item>

          {/* Address */}
          <Form.Item label="Address">
            <Input.TextArea
              name="address"
              value={values.address}
              onChange={(e) => {
                handleChange(e);
                setCustomerData({ ...customerData, address: e.target.value });
              }}
              rows={3}
            />
          </Form.Item>

          <Form.Item>
           <Button type="primary" htmlType="submit"  block>
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
    </>
  );
}
