import React, { useState } from 'react'
import { ClassDetailWrap } from "./styled";
import { ImgWrap } from '../../../components/Layout';

import Dance from "../../../public/images/dance.png";
import Check from "../../../public/icons/select.svg";

import { Collapse } from 'antd';

const { Panel } = Collapse;

const ClassDetail = (props) => {

  const [stateImage, setStateImage] = useState(Dance);
  const [stateCheck, setStateCheck] = useState(false);
  const [stateExpand, setStateExpand] = useState(false);

  const checkStatus = () => {
    setStateCheck(!stateCheck);
  }

  const checkExpand = () => {
    setStateExpand(!stateExpand);
  }

  const callback = (key) => {
    console.log(key);
  }

  return (
    <ClassDetailWrap>
      <div className="image-detail">
        <ImgWrap src={stateImage} maxHeight="320px" alt='Gym' />
      </div>
      <div className="text-detail">
        <div className="instructor-info">
          <div className="name-detail">
            <div className="name">
              Learn Full Body Workout
            </div>
            <div className="time">
              From $84.00
            </div>
          </div>
        </div>
        <div className={
          "select-class " +
          (stateCheck ? "checked" : "")
        } onClick={checkStatus}>
          Select Class
          <div className="icon-wrap circle">
            <img src={Check} alt="select" />
          </div>
        </div>
        <div className="description" onClick={checkExpand}>
          <Collapse onChange={callback} expandIconPosition="right">
            <Panel header={
              (stateExpand ? "Show Less" : "View More Details")
            } key="1">
              <div className="panel-body">
                <div className="head">
                  Description
                </div>
                <p>
                  Description Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
                </p>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </ClassDetailWrap>
  )
}

export default ClassDetail
