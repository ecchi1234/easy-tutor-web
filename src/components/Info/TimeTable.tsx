import React, { useState } from 'react';
import { Table, Radio, Divider, Button, Col, Row, Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import './TimeTable.scss'

const TimeTable = () => {

    return (
        <div>
            <Row justify='center' className='row-1'>
                <Col span={3}>
                    Thứ 2
                </Col>
                <Col span={3}>
                    Thứ 3
                </Col>
                <Col span={3}>
                    Thứ 4
                </Col>
                <Col span={3}>
                    Thứ 5
                </Col>
                <Col span={3}>
                    Thứ 6
                </Col>
                <Col span={3}>
                    Thứ 7
                </Col>
                <Col span={3}>
                    Chủ Nhật
                </Col>
            </Row>
            <Row justify='center' className='row-2'>
                <Col span={3}>
                    <input type='radio' name='choose' id='btn-1' />
                    <label htmlFor='btn-1' ></label>
                </Col>
                <Col span={3}>
                    Thứ 3
                </Col>
                <Col span={3}>
                    Thứ 4
                </Col>
                <Col span={3}>
                    Thứ 5
                </Col>
                <Col span={3}>
                    Thứ 6
                </Col>
                <Col span={3}>
                    Thứ 7
                </Col>
                <Col span={3}>
                    Chủ Nhật
                </Col>
            </Row>
        </div>
    );
};
export default TimeTable
