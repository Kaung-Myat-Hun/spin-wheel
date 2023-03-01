import React, { useState } from "react";
import "./App.css";
import WheelComponent from "react-wheel-of-prizes";
// import "react-wheel-of-prizes/dist/index.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function App() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [winner, setWinner] = useState("");
  const [win, setWin] = useState(false);
  const [contact, setContact] = useState(false); // ဆက်သွယ်ရန်
  const [history, setHistory] = useState(false); // မှတ်တမ်း
  const [about, setAbout] = useState(false); //အကြောင်း
  const [winner10, setWinner10] = useState(false); //အနိုင်ရရှိသူ ၁၀ဦး
  const [freeAcc, setFreeAcc] = useState(false); // ဖရီးအကောင့်

  const historyHandler = () => {
    setContact(false);
    setAbout(false);
    setWinner10(false);
    setFreeAcc(false);
    setHistory(true);
    setWin(false);
    setOpen(true);
  };

  const winner10Handler = () => {
    setContact(false);
    setAbout(false);
    setWinner10(true);
    setFreeAcc(false);
    setHistory(false);
    setWin(false);
    setOpen(true);
  };

  const contactHandler = () => {
    setContact(true);
    setAbout(false);
    setWinner10(false);
    setFreeAcc(false);
    setHistory(false);
    setWin(false);
    setOpen(true);
  };

  const aboutHandler = () => {
    setContact(false);
    setAbout(true);
    setWinner10(false);
    setFreeAcc(false);
    setHistory(false);
    setWin(false);
    setOpen(true);
  };

  const freeAccountHandler = () => {
    setContact(false);
    setAbout(false);
    setWinner10(false);
    setFreeAcc(true);
    setHistory(false);
    setWin(false);
    setOpen(true);
  };

  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#7f7f7f50",
    "#EE4040",
    "#7f7f7f50",
    "#EE4040",
    "#7f7f7f50",
    "#EE4040",
    "#7f7f7f50",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => {
            onFinished(winner);
            setOpen(true);
            setWinner(winner);
            setWin(true);
          }}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "600px",
          margin: "auto",
          marginTop: "-70px",
        }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginRight: "50px", fontSize: "20px", color: "#fff" }}>Lucky Code ထည့်ရန်</p>{" "}
          <div>
            <input
              type="text"
              style={{
                padding: "3px 20px",
                borderRadius: "20px",
                backgroundColor: "transparent",
                color: "#fff",
              }}
            />{" "}
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "20px",
                border: "2px solid gold",
                backgroundColor: "crimson",
                color: "#fff",
              }}>
              OK
            </button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={aboutHandler}
              style={{
                margin: "3px",
                padding: "5px 10px",
                borderRadius: "20px",
                border: "2px solid gold",
                backgroundColor: "crimson",
                color: "#fff",
              }}>
              အကြောင်း
            </button>
            <button
              onClick={contactHandler}
              style={{
                margin: "3px",
                padding: "5px 10px",
                borderRadius: "20px",
                border: "2px solid gold",
                backgroundColor: "crimson",
                color: "#fff",
              }}>
              ဆက်သွယ်ရန်
            </button>
          </div>
          <div>
            <button
              onClick={winner10Handler}
              style={{
                margin: "3px",
                padding: "5px 20px",
                borderRadius: "20px",
                border: "2px solid gold",
                backgroundColor: "crimson",
                color: "#fff",
              }}>
              ထိပ်တန်းအနိုင်ရရှိသူ ၁၀ဦး
            </button>
            <div>
              <button
                onClick={historyHandler}
                style={{
                  margin: "3px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "2px solid gold",
                  backgroundColor: "crimson",
                  color: "#fff",
                }}>
                မှတ်တမ်း
              </button>
              <button
                onClick={freeAccountHandler}
                style={{
                  margin: "3px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "2px solid gold",
                  backgroundColor: "crimson",
                  color: "#fff",
                }}>
                ဖရီးအကောင့်
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {win ? (
            <>
              <p>
                Congratulation! <br /> You Won <span style={{ color: "green" }}>{winner}</span>
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  margin: "3px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "2px solid gold",
                  backgroundColor: "crimson",
                  color: "#fff",
                }}>
                Ok
              </button>{" "}
            </>
          ) : history ? (
            <div>
              <p>Lucky Draw Code ထည့်ပါ</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                <input
                  type="text"
                  placeholder="Lucky Draw Code ထည့်ပါ"
                  style={{
                    width: "80%",
                    padding: "10px",
                    borderRadius: "20px",
                    margin: " 10px auto",
                  }}
                />
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  style={{
                    margin: "auto",
                    padding: "5px 10px",
                    width: "100px",
                    borderRadius: "20px",
                    border: "2px solid gold",
                    backgroundColor: "crimson",
                    color: "#fff",
                  }}>
                  Ok
                </button>{" "}
              </div>
            </div>
          ) : about ? (
            <div>
              About{" "}
              <p>
                Agent သက်တမ်းသုံးနှစ်ရှိတဲ့ ဂျပန်ကြီး Yogo မှာ ငွေကြေးယုံကြည်စိတ်ချစွာဖြင့်
                ဆော့ကစားနိုင်ပါသည်။
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  margin: "3px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "2px solid gold",
                  backgroundColor: "crimson",
                  color: "#fff",
                }}>
                Ok
              </button>{" "}
            </div>
          ) : contact ? (
            <div>
              Contact{" "}
              <p>
                ငွေသွင်းကစားလိုပါက <br /> Viber - 09876543210 သို့ဆက်သွယ်ပေးပါ။
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  margin: "3px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "2px solid gold",
                  backgroundColor: "crimson",
                  color: "#fff",
                }}>
                Ok
              </button>{" "}
            </div>
          ) : winner10 ? (
            <div>
              Winner 10
              <ul style={{ listStyleType: "number" }}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  margin: "3px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "2px solid gold",
                  backgroundColor: "crimson",
                  color: "#fff",
                }}>
                Ok
              </button>{" "}
            </div>
          ) : freeAcc ? (
            <div>
              <p>Free Account ရယူရန် ဖုန်းနံပတ် ထည့်ပါ</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                <input
                  type="text"
                  placeholder="ဖရီးအကောင့်ရယူရန် ဖုန်းနံပတ်ထည့်ပါ"
                  style={{
                    width: "80%",
                    padding: "10px",
                    borderRadius: "20px",
                    margin: " 10px auto",
                  }}
                />
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  style={{
                    margin: "auto",
                    padding: "5px 10px",
                    width: "100px",
                    borderRadius: "20px",
                    border: "2px solid gold",
                    backgroundColor: "crimson",
                    color: "#fff",
                  }}>
                  Ok
                </button>{" "}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </Box>
      </Modal>
    </>
  );
}
