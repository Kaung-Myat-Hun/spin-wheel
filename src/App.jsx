import React, { useState, useEffect } from "react";
import "./App.css";
import WheelComponent from "react-wheel-of-prizes";
// import "react-wheel-of-prizes/dist/index.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Wheel } from "react-custom-roulette";
import arrow from "./assets/arrow.svg";
import prize1 from "./assets/Spin wheel UI/png/Prize/Mi Pad 5.png";
import prize2 from "./assets/Spin wheel UI/png/Prize/Mi watch color (sports Version).png";
import prize3 from "./assets/Spin wheel UI/png/Prize/Redmi (11) pro 5G.png";

import GetApi from "./components/SpinWheels/services/getfunction.js";
import Slider from "./components/Slider/Slider.jsx";

export default function App() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState("");
  const [newPrize, setNewPrize] = useState({});
  const [win, setWin] = useState(false);
  const [contact, setContact] = useState(false); // ဆက်သွယ်ရန်
  const [history, setHistory] = useState(false); // မှတ်တမ်း
  const [about, setAbout] = useState(false); //အကြောင်း
  const [winner10, setWinner10] = useState(false); //အနိုင်ရရှိသူ ၁၀ဦး
  const [freeAcc, setFreeAcc] = useState(false); // ဖရီးအကောင့်
  const [lang, setLang] = useState(false);

  const historyHandler = () => {
    setContact(false);
    setAbout(false);
    setWinner10(false);
    setFreeAcc(false);
    setHistory(true);
    setWin(false);
    setLang(false);
    setOpen(true);
  };

  const winner10Handler = () => {
    setContact(false);
    setAbout(false);
    setWinner10(true);
    setFreeAcc(false);
    setHistory(false);
    setWin(false);
    setLang(false);
    setOpen(true);
  };

  const contactHandler = () => {
    setContact(true);
    setAbout(false);
    setWinner10(false);
    setFreeAcc(false);
    setHistory(false);
    setWin(false);
    setLang(false);
    setOpen(true);
  };

  const aboutHandler = () => {
    setContact(false);
    setAbout(true);
    setWinner10(false);
    setFreeAcc(false);
    setHistory(false);
    setWin(false);
    setLang(false);
    setOpen(true);
  };

  const freeAccountHandler = () => {
    setContact(false);
    setAbout(false);
    setWinner10(false);
    setFreeAcc(true);
    setHistory(false);
    setWin(false);
    setLang(false);
    setOpen(true);
  };

  const langHandler = () => {
    setContact(false);
    setAbout(false);
    setWinner10(false);
    setFreeAcc(false);
    setHistory(false);
    setWin(false);
    setLang(true);
    setOpen(true);
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    // console.log("data", data[newPrizeNumber]);
    setNewPrize(data[newPrizeNumber]);
  };
  const data = [
    // { option: "hello", style: { backgroundColor: "crimson", textColor: "black" } },
    // { option: "hello1", style: { backgroundColor: "white" } },
    // { option: "hello2", style: { backgroundColor: "crimson", textColor: "black" } },
    // { option: "hello3", style: { backgroundColor: "white" } },
    // { option: "hello4", style: { backgroundColor: "crimson", textColor: "black" } },
    // { option: "hello5", style: { backgroundColor: "white" } },
    // { option: "hello6", style: { backgroundColor: "crimson", textColor: "black" } },
    // { option: "hello7", style: { backgroundColor: "white" } },
  ];

  // console.log(newPrize);

  const { dataRes } = GetApi("api/prizes");
  console.log(dataRes, "response");

  for (let i = 0; i < dataRes.length; i++) {
    data[i] = {
      option: dataRes[i].name,
      style: (i + 1) % 2 === 0 ? { backgroundColor: "crimson" } : { backgroundColor: "white" },
    };
  }

  return (
    <>
      <div>
        {/* <nav className="navbar">
        <button className="nav-btn">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <button onClick={langHandler} className="nav-btn1">
          ဘာသာစကား
        </button>
      </nav> */}
        <div className="container-main">
          <div
            style={{
              height: "200px",
              margin: "20px",
              display: "block",
            }}>
            <Slider></Slider>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <button
              onClick={langHandler}
              style={{
                borderRadius: "3px",
                margin: "3px",
                padding: "5px 20px",
                border: "none",
                backgroundColor: "crimson",
                color: "#fff",
              }}>
              အမြင့်ဆုံးဆုလက်ဆောင်
            </button>
            <button
              onClick={winner10Handler}
              style={{
                borderRadius: "3px",
                margin: "3px",
                padding: "5px 20px",
                border: "none",
                backgroundColor: "crimson",
                color: "#fff",
              }}>
              အမြင့်ဆုံးအနိုင်ရရှိသူ ၁၀ဦး
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}>
            <div className="container" style={{ position: "relative" }}>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                outerBorderColor="gold"
                onStopSpinning={() => {
                  setMustSpin(false);
                  setOpen(true);
                  setWin(true);
                  // setNewPrize(prizeNumber);
                }}
              />
              <button className="btn-spin" onClick={handleSpinClick}>
                SPIN
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              margin: "60px auto",
              // marginTop: "-70px",
            }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {/* <p style={{ marginRight: "20px", fontSize: "20px", color: "#fff" }}>Lucky Code ထည့်ရန်</p>{" "} */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input
                  type="text"
                  style={{
                    padding: "12px 10px",
                    width: "350px",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                  }}
                  placeholder="lucky draw code"
                />{" "}
                <button
                  style={{
                    padding: "12px 10px",
                    textAlign: "center",
                    border: "none",
                    backgroundColor: "crimson",
                    borderRadius: "0px 4px 4px 0px",
                    color: "#fff",
                  }}>
                  OK
                </button>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ display: "flex" }}>
                <button
                  className="button"
                  onClick={aboutHandler}
                  style={{
                    width: "127px",
                    margin: "20px 3px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "crimson",
                    color: "#fff",
                  }}>
                  အကြောင်း
                </button>
                <button
                  className="button"
                  onClick={contactHandler}
                  style={{
                    width: "127px",
                    margin: "20px 3px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "crimson",
                    color: "#fff",
                  }}>
                  ဆက်သွယ်ရန်
                </button>
                <button
                  className="button"
                  onClick={historyHandler}
                  style={{
                    width: "127px",
                    margin: "20px 3px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "crimson",
                    color: "#fff",
                  }}>
                  မှတ်တမ်း
                </button>
              </div>
            </div>
            <button
              className="btn-full"
              onClick={freeAccountHandler}
              style={{
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "crimson",
                margin: "0px 4px",
                color: "#fff",
              }}>
              ဖရီးအကောင့်
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {win ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ margin: "10px", fontSize: "16px" }}>
                Congratulation! <br /> You Won{" "}
                <span style={{ color: "green", fontWeight: "700", fontSize: "20px" }}>
                  {newPrize?.option}
                </span>
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                  // window.location.reload(true);
                }}
                style={{
                  width: "50%",
                  margin: "3px auto",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "2px solid gold",
                  backgroundColor: "crimson",
                  color: "#fff",
                }}>
                Ok
              </button>{" "}
            </div>
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
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>About</span>
              <p>
                Agent သက်တမ်းသုံးနှစ်ရှိတဲ့ ဂျပန်ကြီး Yogo မှာ ငွေကြေးယုံကြည်စိတ်ချစွာဖြင့်
                ဆော့ကစားနိုင်ပါသည်။
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  width: "50%",
                  margin: "3px auto",
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
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>Contact</span>
              <p>
                ငွေသွင်းကစားလိုပါက <br /> Viber - 09876543210 သို့ဆက်သွယ်ပေးပါ။
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  width: "50%",
                  margin: "3px auto",
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
            <div className="winner-container">
              <h3>Winners List</h3>
              <ul style={{ listStyleType: "number" }}>
                <li>testing</li>
                <li>demo</li>
                <li>hello</li>
                <li>customer</li>
                <li>admin</li>
                <li>customer service</li>
                <li>client</li>
                <li>htet</li>
                <li>master</li>
                <li>zero</li>
              </ul>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  margin: "3px auto",
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
                    width: "100%",
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
          ) : lang ? (
            <>
              <p>အမြင့်ဆုံးဆုလက်ဆောင်များ</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "28%",
                    height: "100px",
                    margin: "5px",
                  }}>
                  <img src={prize1} alt="" style={{ width: "100%", height: "100%" }} />{" "}
                  <span>Prize</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "28%",
                    height: "100px",
                    margin: "5px",
                  }}>
                  <img src={prize2} alt="" style={{ width: "100%", height: "100%" }} />{" "}
                  <span>Prize</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "28%",
                    height: "100px",
                    margin: "5px",
                  }}>
                  <img src={prize3} alt="" style={{ width: "100%", height: "100%" }} />{" "}
                  <span>Prize</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "28%",
                    height: "100px",
                    margin: "5px",
                  }}>
                  <img src={prize1} alt="" style={{ width: "100%", height: "100%" }} />{" "}
                  <span>Prize</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "28%",
                    height: "100px",
                    margin: "5px",
                  }}>
                  <img src={prize2} alt="" style={{ width: "100%", height: "100%" }} />{" "}
                  <span>Prize</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "28%",
                    height: "100px",
                    margin: "5px",
                  }}>
                  <img src={prize3} alt="" style={{ width: "100%", height: "100%" }} />{" "}
                  <span>Prize</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  style={{
                    margin: "auto",
                    padding: "10px 10px",
                    width: "100px",
                    borderRadius: "20px",
                    border: "2px solid gold",
                    backgroundColor: "crimson",
                    color: "#fff",
                  }}>
                  OK
                </button>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </Box>
      </Modal>
    </>
  );
}
