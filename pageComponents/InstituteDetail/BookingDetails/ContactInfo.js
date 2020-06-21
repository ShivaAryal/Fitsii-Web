import React from 'react'

import { ContactWrap } from "./styled";
import { Row, Col } from 'antd';
import { PhoneFilled, SkypeFilled, MailFilled, QuestionOutlined } from '@ant-design/icons';

const ContactInfo = () => {
  return (
    <ContactWrap>
      <Row gutter={[24, 24]}>
        <Col xs={12}>
          <div className="contact-info">
            <div className="icon-wrap">
              <PhoneFilled />
            </div>
            <div className="text-detail">
              Time: 08 - 20 hrs
              <span>
                88 832 - 334 - 4599
              </span>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="contact-info">
            <div className="icon-wrap">
              <SkypeFilled style={{ color: '#059DFE' }} />
            </div>
            <div className="text-detail">
              Support center
              <span>
                Contact Skype
              </span>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="contact-info">
            <div className="icon-wrap">
              <MailFilled />
            </div>
            <div className="text-detail">
              Email support
              <span>
                support@gymsyndey.net
              </span>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="contact-info">
            <div className="icon-wrap">
              <QuestionOutlined />
            </div>
            <div className="text-detail">
              Get in touch
              <span>
                Send a questions
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </ContactWrap>
  )
}

export default ContactInfo
