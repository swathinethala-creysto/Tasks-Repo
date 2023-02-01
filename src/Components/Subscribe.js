import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

var mobileNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
function Subscribe() {
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [openSuc, setOpenSec] = useState(false);
  const [stateData, setStateData] = useState({
    isOpen: false,
    isError: false,
    isSuccess: false,
    isFailure: false,
    isFinished: false,
  });

  useEffect(() => {
    document.title = "subscribe";
  }, []);

  const handleChange = (e) => {
    console.log("e", e.target.value);
    setNumber(e.target.value);
  };

  const handleSubscribe = () => {
    setOpen(true);
    axios
      .get(`http://216.48.182.12:5555/optin?number=${number}`)
      .then((res) => {
        console.log("response", res);
        setStateData((prev) => {
          return {
            ...prev,
            isOpen: false,
            isSuccess: true,
          };
        });
      })
      .catch((err) => {
        setStateData((prev) => {
          return {
            ...prev,
            isFailure: true,
          };
        });
        console.log("error", err);
      });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="fw-bold" style={{ fontSize: "20px" }}>
        OPT In WhatsApp Number
      </div>
      <button
        style={{
          fontSize: "14px",
          backgroundColor: "rgb(8,160,255)",
          height: "34px",
        }}
        className="rounded-3 m-2 bg-primary text-white border border-white px-2"
        onClick={() => {
          setStateData((prev) => {
            return {
              ...prev,
              isOpen: true,
            };
          });
        }}
      >
        OPT In
      </button>
      {stateData.isOpen && (
        <div
          className="px-3 rounded-4 h-50"
          style={{
            paddingBottom: 50,
            backgroundColor: "#f2f2f2",
            boxShadow: "rgb(39 33 33 / 37%) -200px 300px 200px 800px",
            width: "38%",
            marginTop: -45,
          }}
        >
          <div className="">
            <i
              className="bi bi-x"
              style={{ fontSize: "40px" }}
              onClick={() => {
                setStateData((prev) => {
                  return {
                    ...prev,
                    isOpen: false,
                  };
                });
              }}
            ></i>
          </div>
          <div className="d-flex flex-column p-3">
            <img
              alt="Whatsapp icon"
              height="60px"
              width="60px"
              style={{ borderRadius: "50%" }}
              src="data:image/png;base64,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"
            />
            <div className="fw-bold fs-2">Updates over WhatsApp</div>
            <div>
              <span className="fs-5">Do you want to </span>
              <span className="fs-5">
                receive important information and updates over{" "}
              </span>
              <span className="fw-bold fs-5">WhatsApp?</span>
            </div>
            <div className="fw-bold my-2">Please enter your phone number</div>
            <div
              className="d-flex flex-row justify-content-between my-2"
              style={{ marginBottom: 100, flexWrap: "wrap", width: "100%" }}
            >
              <input
                className="bg-white rounded-4  py-1 border border-white "
                style={{ width: "60%", height: "36px" }}
                placeholder="Enter mobile no."
                value={number}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={() => {
                  if (number.length === 10 && number.match(mobileNumberRegex)) {
                    setStateData((prev) => {
                      return {
                        ...prev,
                        isError: false,
                      };
                    });
                  } else {
                    setStateData((prev) => {
                      return {
                        ...prev,
                        isError: true,
                      };
                    });
                  }
                }}
              ></input>
              <button
                className="text-white rounded-4 border border-white  py-1"
                style={{
                  backgroundColor: "#27D566",
                  width: "30%",
                  height: "36px",
                }}
                onClick={() => {
                  if (!stateData.isError && number.length === 10) {
                    console.log("sbcale");
                    handleSubscribe();
                  }
                }}
              >
                SUBSCRIBE
              </button>
            </div>
            {stateData.isError && (
              <div className="text-danger">In Valid Mobile Number</div>
            )}
          </div>
        </div>
      )}
      {stateData.isFailure && (
        <div
          className="p-3 rounded-2 h-40 d-flex flex-column justify-content-center align-items-center"
          style={{
            paddingTop: 10,
            paddingBottom: 50,
            backgroundColor: "#f2f2f2",
            boxShadow: "rgb(39 33 33 / 37%) -200px 300px 200px 800px",
            width: "40%",
            marginTop: "-30%",
          }}
        >
          <i
            className="bi bi-x-circle"
            style={{ fontSize: "80px", color: "rgb(242,116,116" }}
          ></i>
          <div className="my-2"></div>
          <div className="fw-bold fs-2" style={{ color: "#4a4747" }}>
            Error
          </div>
          <div className="my-3" style={{ color: "#5a5757" }}>
            The phone number has already been marked as Opt-out
          </div>
          <button
            style={{ marginBottom: 15, backgroundColor: "#7066e0" }}
            className="px-3 py-2  rounded-2 border border-white text-white fw-bold"
            onClick={() =>
              setStateData((prev) => {
                return {
                  ...prev,
                  isFailure: false,
                };
              })
            }
          >
            OK
          </button>
        </div>
      )}
      {stateData.isSuccess && (
        <>
          <div
            className="p-3 rounded-2 h-40 d-flex flex-column justify-content-center align-items-center"
            style={{
              paddingTop: 10,
              paddingBottom: 50,
              backgroundColor: "#f2f2f2",
              boxShadow: "rgb(39 33 33 / 37%) -200px 300px 200px 800px",
              width: "40%",
            }}
          >
            <i
              className="bi bi-check-circle"
              style={{ color: "rgb(165,220,134)", fontSize: "90px" }}
            ></i>
            <div className="fw-bold fs-2 mt-3" style={{ color: "#4a4747" }}>
              Optin Successfully
            </div>
            <div className="my-3" style={{ color: "#5a5757" }}>
              {number} Optin Successfully !!
            </div>
            <button
              style={{ marginBottom: 15, backgroundColor: "#7066e0" }}
              className="px-3 py-2  rounded-2 border border-white text-white fw-bold"
              onClick={() => {
                setStateData((prev) => {
                  return {
                    isFailure: false,
                    isOpen: false,
                    isSuccess: false,
                    isFinished: true,
                  };
                });
              }}
            >
              OK
            </button>
          </div>
        </>
      )}
      {stateData.isFinished && (
        <>
          <div className="back_data">
            <div
              className="p-3 rounded-4 h-20 d-flex flex-column justify-content-center align-items-center"
              style={{
                paddingTop: 10,
                paddingBottom: 50,
                backgroundColor: "#f2f2f2",
                boxShadow: "rgb(39 33 33 / 37%) -200px 300px 200px 800px",
                width: "60%",
                marginTop: "-20%",
                textAlign: "center",
                backgroundColor: "rgb(39,213,102)",
                color: "white",
              }}
            >
              <div>
                <div>
                  <i
                    className="bi bi-whatsapp"
                    style={{ fontSize: "60px", color: "white" }}
                  ></i>
                </div>
                <div className="mt-3">
                  <h1>Thank You!</h1>
                </div>
                <p className="fs-4">
                  You have been successfully subscribed to notification and
                  updates over WhatsApp
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Subscribe;

