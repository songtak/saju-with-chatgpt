import React, { useState } from "react";

import DatePicker from "@mui/lab/DatePicker";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import koLocale from "date-fns/locale/ko";
import moment from "moment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import CalendarPicker from "@mui/lab/CalendarPicker";

import _ from "lodash";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ height: "400px" }}>
      <div>이름과 생년월일 입력 부탁드리는 부분이구여...</div>
      <div style={{ color: "gray", fontSize: "8px" }}>(* 입력값 저장 안함)</div>
      <div style={{ paddingTop: "30px" }}>
        <TextField
          label="이름"
          size="small"
          onChange={(e) => {
            // setUserName(e.target.value);
          }}
        />
      </div>
      <div style={{ paddingTop: "30px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
          <div style={{ backgroundColor: "white" }}>
            <DatePicker
              label="생년월일"
              openTo="year"
              views={["year", "month", "day"]}
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              // disabled={props.disabled}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </div>
        </LocalizationProvider>
      </div>
      <div
      // className={`start_button ${
      //   selectedDate?.toString() === "Invalid Date" ||
      //   !_.isDate(selectedDate) ||
      //   _.isEmpty(props.userName)
      //     ? "disable"
      //     : ""
      // }`}
      // onClick={handleClickSaveBirthDate}
      >
        <ArrowForwardIcon style={{ color: "white", paddingTop: "8px" }} />
      </div>
    </div>
  );
};

export default App;
