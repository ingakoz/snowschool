import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import "./formstyle.css";


export const Form = (props) => {
    
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
 
  const [dateuntil, setDateuntil] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  const [datefrom, setDateFrom] = React.useState([dayjs(today), dayjs(today)]);

  let content = {
    English: {
      block1: "Request availability",
      block2: "Name & Lastname",
      block3: "Email address",
      block4: "From",
      block5: "Until",
      block6: "I accept the terms of service",
      block7: "Send",
    },
    Polski: {
      block1: "Sprawdź dostępność",
      block2: "Imię i nazwisko",
      block3: "Email",
      block4: "Od",
      block5: "Do",
      block6: "Akceptuję politykę serwisu",
      block7: "Wyślij",
    },
  };

  props.props.language === "Polski"
    ? (content = content.Polski)
    : (content = content.English);

  return (
    <form
      className="formbody"
      action="https://formspree.io/f/mvoeqgbg"
      method="POST"
    >
      <h1 class="formtitle">{content.block1}</h1>

      <label>
        {content.block2}:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        {content.block3}:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <label>
            <DatePicker
              className="datepick"
              id="datefrom"
              name="datefrom"
              label={content.block4}
              value={datefrom}
              onChange={(newValue) => setDateFrom(newValue)}
            />
          </label>
          <label>
            <DatePicker
              className="datepick"
              id="dateuntil"
              name="dateuntil"
              label={content.block5}
              value={dateuntil}
              onChange={(newValue) => setDateuntil(newValue)}
            />
          </label>
        </DemoContainer>
      </LocalizationProvider>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={(e) => setAcceptedTerms(e.target.value)}
          required
        />
        {content.block6}
      </label>

      <button>{content.block7}</button>
    </form>
  );

};
