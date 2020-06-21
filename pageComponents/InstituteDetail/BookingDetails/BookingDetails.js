import React from 'react'
import { Form, Input, DatePicker, TimePicker, Row, Col } from 'antd'

import { MoreButton } from "../../../UiComponents/Buttons"
import { BookingSection, BookingInfo } from './styled'
// import ContactInfo from './ContactInfo'
import ClassList from './ClassList'
import { ClassData } from "./data";

const BookingDetails = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <BookingSection>
      <div className="head">
        Booking Details
      </div>
      <div className="form-wrap">
        <Form
          name="normal_check"
          className="check-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row gutter={[24, 24]}>
            <Col xs={12}>
              <Form.Item name="DatePicker">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item name="TimePicker">
                <TimePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                name="persons"
                rules={[{ required: true, message: 'Please input # of persons!' }]}
              >
                <Input placeholder="No of persons" />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                name="guests"
                rules={[{ required: true, message: 'Please input # of guests!' }]}
              >
                <Input placeholder="No of guests" />
              </Form.Item>
            </Col>
            {/* <Col xs={24}>
              <Form.Item>
                <CustomButton htmlType="submit" className="check-form-button" pd="10px 40px">
                  Check Now
                </CustomButton>
              </Form.Item>
            </Col> */}
          </Row>
        </Form>
      </div>
      <div className="inquiry-list">
        <div className="head-title">
          You are inquiring about...
        </div>
        <div className="class-list-wrap">
          {ClassData.map((val, key) => {
            return (
              <ClassList item={val} key={key} />
            );
          })}
        </div>
      </div>
      <BookingInfo>
        <div className="info-wrap">
          <div className="detail">
            <div className="title">
              $70x 2 persons
            </div>
            <div className="number">
              $140
            </div>
          </div>
          <div className="detail minus">
            <div className="title">
              15% weekly price discoun
            </div>
            <div className="number">
              - $3
            </div>
          </div>
          <div className="detail">
            <div className="title">
              Trainer fee
            </div>
            <div className="number">
              $10
            </div>
          </div>
          <div className="detail">
            <div className="title">
              Service fee
            </div>
            <div className="number">
              $30
            </div>
          </div>
          <div className="detail total">
            <div className="title">
              TOTAL
            </div>
            <div className="number">
              $150
            </div>
          </div>
        </div>
        <MoreButton>
          Book Now
        </MoreButton>
      </BookingInfo>
      {/* <ContactInfo /> */}
    </BookingSection>
  )
}

export default BookingDetails
