import React from 'react'

import { InrContactWrap } from "./styled";
import { Row, Col } from 'antd';
import {
  AppleFilled,
  AndroidFilled
} from '@ant-design/icons';

const ContactInfo = () => {
  return (
    <InrContactWrap>
      <div className="head-title">
        Download App
      </div>
      <Row gutter={[24, 24]}>
        <Col xs={12}>
          <div className="app-link ios">
            <AppleFilled />
            Apple IOS
          </div>
        </Col>
        <Col xs={12}>
          <div className="app-link android">
            <AndroidFilled />
            Google Play
          </div>
        </Col>
      </Row>
    </InrContactWrap>
  )
}

export default ContactInfo
