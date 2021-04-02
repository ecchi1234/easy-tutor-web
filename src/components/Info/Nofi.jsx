import React from "react";
import { Space } from "antd";
import "./Nofi.scss";

const listNofi = [
  {
    id: 1,
    date: "01/04/2021",
    text:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    action: () => (
      <Space size="middle">
        <a>Đánh dấu đã đọc</a>
        <a style={{ color: "red" }}>Xóa</a>
      </Space>
    ),
  },
  {
    id: 3,
    date: "01/04/2021",
    text:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    action: () => (
      <Space size="middle">
        <a>Đánh dấu đã đọc</a>
        <a style={{ color: "red" }}>Xóa</a>
      </Space>
    ),
  },
  {
    id: 2,
    date: "01/04/2021",
    text:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    action: () => (
      <Space size="middle">
        <a>Đánh dấu đã đọc</a>
        <a style={{ color: "red" }}>Xóa</a>
      </Space>
    ),
    },
    {
        id: 4,
        date: "01/04/2021",
        text:
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
        action: () => (
          <Space size="middle">
            <a>Đánh dấu đã đọc</a>
            <a style={{ color: "red" }}>Xóa</a>
          </Space>
        ),
      },
];
function Nofi() {
  return (
    <div>
      <div className="container-nofi">
        {listNofi.map((o) => {
          return (
            <>
              <div className="row-nofi">
                <div className="nofi-col-1">{o.date}</div>
                <div className="nofi-col-2">{o.text}</div>
                <div className="nofi-col-3"> {o.action()}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Nofi;
