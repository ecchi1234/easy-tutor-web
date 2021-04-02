import React from "react";
import { Card } from "antd";
import "./OldClass.scss";

const listClass = [
  {
    id: 1,
    title: "Cần thuê người dạy Tiếng Anh tại Cầu Giấy",
    name: "Nguyễn Phương Thảo",
    subject: ["Tiếng Anh", "Toán"],
    method: "Offline",
    address: "144 Xuân Thủy, Cầu Giấy, Hà Nội",
    type_gender: ["Nam", "Nữ"],
    number_student: 1,
    period: "Tuần 2 buổi (2h/buổi)",
    salary: 160000,
    },
    {
        id: 2,
        title: "Cần thuê người dạy Tiếng Anh tại Cầu Giấy",
        name: "Lương Thế Đại",
        subject: ["Tiếng Anh", "Toán"],
        method: "Offline",
        address: "144 Xuân Thủy, Cầu Giấy, Hà Nội",
        type_gender: ["Nam", "Nữ"],
        number_student: 1,
        period: "Tuần 2 buổi (2h/buổi)",
        salary: 160000,
    },
    {
        id: 3,
        title: "Cần thuê người dạy Tiếng Anh tại Cầu Giấy",
        name: "Nguyễn Đức Tới",
        subject: ["Tiếng Anh", "Toán"],
        method: "Offline",
        address: "144 Xuân Thủy, Cầu Giấy, Hà Nội",
        type_gender: ["Nam", "Nữ"],
        number_student: 1,
        period: "Tuần 2 buổi (2h/buổi)",
        salary: 160000,
  },
  {
    id: 4,
    title: "Cần thuê người dạy Tiếng Anh tại Cầu Giấy",
    name: "Nguyễn Ngọc Chi",
    subject: ["Tiếng Anh", "Toán"],
    method: "Offline",
    address: "144 Xuân Thủy, Cầu Giấy, Hà Nội",
    type_gender: ["Nam", "Nữ"],
    number_student: 1,
    period: "Tuần 2 buổi (2h/buổi)",
    salary: 160000,
  },
];

function OldClass() {
  return (
    <div>
      <div className="old-class-container">
        {listClass.map((o, index) => (
          <Card
            title={o.title}
            style={{ width: "100%", marginTop: "3%" }}
            key={index}
            className='old-class-card'
          >
            <div className="old-class-content">
              <div className="old-class-col">
                <div className="old-class-row">
                  Người thuê:&nbsp;
                  <div style={{ color: "#FAAD14" }}>{o.name}</div>
                </div>
                <div className="old-class-row">
                  Môn học:&nbsp;
                  <div style={{ color: "#1890FF" }}>
                    {o.subject.map((tg) => {
                      {
                        if (tg != o.subject[o.subject.length - 1]) {
                          return <>{tg},&nbsp;</>;
                        } else return <>{tg}</>;
                      }
                    })}
                  </div>
                </div>
                <div className="old-class-row">
                  Hình thức học:&nbsp;
                  <div style={{ color: "#FAAD14" }}>{o.method}</div>
                </div>
                <div className="old-class-row">
                  Địa chỉ:&nbsp;
                  <div style={{ color: "#1890FF" }}>{o.address}</div>
                </div>
              </div>
              <div className="old-class-col">
                <div className="old-class-row">
                  Tìm gia sư: &nbsp;
                  <div style={{ color: "#1890FF" }}>
                    {o.type_gender.map((tg) => {
                      {
                        if (tg != o.type_gender[o.type_gender.length - 1]) {
                          return <>{tg},&nbsp;</>;
                        } else return <>{tg}</>;
                      }
                    })}
                  </div>
                </div>
                <div className="old-class-row">
                  Số học viên:&nbsp;
                  <div style={{ color: "#FAAD14" }}>{o.number_student}</div>
                </div>
                <div className="old-class-row">
                  Thời lượng:&nbsp;
                  <div style={{ color: "#1890FF" }}>{o.period}</div>
                </div>
                <div className="old-class-row" style={{ color: "#FAAD14" }}>
                  Học phí 1 buổi:&nbsp;
                  {o.salary.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OldClass;
