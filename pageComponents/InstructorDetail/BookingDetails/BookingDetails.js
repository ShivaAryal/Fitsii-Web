import React from 'react'
import { Form, Input, DatePicker, TimePicker, Row, Col } from 'antd'

import { CustomButton, MoreButton } from "../../../UiComponents/Buttons";
import { InrBookingSection, InrBookingInfo } from './styled'
// import ContactInfo from './ContactInfo'

const BookingDetails = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <InrBookingSection>
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
          </Row>
        </Form>
      </div>
      <InrBookingInfo>
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
      </InrBookingInfo>
      {/* <ContactInfo /> */}
    </InrBookingSection>
  )
}

export default BookingDetails
