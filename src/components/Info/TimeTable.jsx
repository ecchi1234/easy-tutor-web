import React, { useState } from "react";
import { Table, Radio, Divider, Button, Col, Row, Input } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import "./TimeTable.scss";

const TimeTable = () => {
  const timeTable = [];
  timeTable[0] = [false, false, false, false, false, false, false];
  timeTable[1] = [false, false, false, false, false, false, false];
  timeTable[2] = [false, false, false, false, false, false, false];

  const [time, setTime] = useState(timeTable);

  const onChange = (idx) => {
    const copyArr = [...time];
    if (idx <= 7) {
      copyArr[0][idx - 1] = !time[0][idx - 1];
    } else if (idx <= 14) {
      copyArr[1][idx - 8] = !time[1][idx - 8];
    } else copyArr[2][idx - 15] = !time[2][idx - 15];
    setTime(copyArr);
    console.log(time);
  };

  const row_1 = [1, 2, 3, 4, 5, 6, 7];
  const row_2 = [8, 9, 10, 11, 12, 13, 14];
  const row_3 = [15, 16, 17, 18, 19, 20, 21];

  return (
    <div>
      <Row justify="center" className="row-1">
        <Col span={3}>Thứ 2</Col>
        <Col span={3}>Thứ 3</Col>
        <Col span={3}>Thứ 4</Col>
        <Col span={3}>Thứ 5</Col>
        <Col span={3}>Thứ 6</Col>
        <Col flex="194px">Thứ 7</Col>
        <Col span={3} style={{ marginLeft: "-100px" }}>
          Chủ Nhật
        </Col>
      </Row>
      <div className="tt-table-container">
        <Row justify="center" className="row-2">
          {row_1.map((o) => (
            <Col span={3}>
              <input
                type="checkbox"
                className={`btn-${o}`}
                onChange={() => onChange(o)}
                name={`btn-${o}`}
                id={`btn-${o}`}
              />
              <label htmlFor={`btn-${o}`} className={`btn-label`}>
                SÁNG
              </label>
            </Col>
          ))}
        </Row>

        <Row justify="center" className="row-2">
          {row_2.map((o) => (
            <Col span={3}>
              <input
                type="checkbox"
                className={`btn-${o}`}
                onChange={() => onChange(o)}
                name={`btn-${o}`}
                id={`btn-${o}`}
              />
              <label htmlFor={`btn-${o}`} className={`btn-label`}>
                CHIỀU
              </label>
            </Col>
          ))}
        </Row>

        <Row justify="center" className="row-2">
          {row_3.map((o) => (
            <Col span={3}>
              <input
                type="checkbox"
                className={`btn-${o}`}
                onChange={() => onChange(o)}
                name={`btn-${o}`}
                id={`btn-${o}`}
              />
              <label htmlFor={`btn-${o}`} className={`btn-label`}>
                TỐI
              </label>
            </Col>
          ))}
        </Row>
        <Row justify="center" className="time-table-btn">
          <Button type="primary">Cập nhật thông tin</Button>
        </Row>
      </div>
    </div>
  );
};
export default TimeTable;
