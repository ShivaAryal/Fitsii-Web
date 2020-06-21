import React, { useState } from 'react'

import ClassDetail from "./ClassDetail";

import { ClassData } from "./data";

import { InstituteClassWrap } from "./styled";

import { Row, Col } from 'antd';

const InstituteClasses = (props) => {

  const { item } = props;

  return (
    <div id="classes-id">
      <InstituteClassWrap>
        <div className="head-wrap">
          Our Classes
        </div>
        <div className="class-list">
          <Row gutter={[6, 36]}>
            {ClassData.map((val, key) => {
              return (
                <Col xs={24} sm={12} key={key}>
                  <ClassDetail item={val} />
                </Col>
              );
            })}
          </Row>
        </div>
      </InstituteClassWrap>
    </div>
  )
}

export default InstituteClasses
