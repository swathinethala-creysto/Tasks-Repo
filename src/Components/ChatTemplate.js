import React, { useState } from "react";
//import "./ChatTemplate.css";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import tick from '../src/assets/tick.png';

const initialValues = {
  name: "",
  type: "Text",
  link: "",
  header: "",
  body: "",
  footer: "",
};
function ChatTemplate() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  let new_template = new FormData();

  const validate = (values) => {
    const errors = {};
    const regex = new RegExp(/^[a-zA-Z0-9_]+$/);
    if (values.name.length <= 1 || !regex.test(values.name)) {
      errors.name = "space and special characters are not allowed";
    }

    if (
      values.type === "Image" ||
      values.type === "Video" ||
      values.type === "Document"
    ) {
      if (!values.link && !values.link.match(/^https?:\/\/[^\s]+$/g)) {
        errors.link = "Please enter valid link";
      }
    }

    if (!values.body) {
      errors.body = "Field is required";
    }
    // console.log('error',errors)
    return errors;
  };

  const onSend = (values) => {
    new_template.append("template_name", values.name);
    new_template.append("body", values.body);
    new_template.append("t_type", values.type);
    new_template.append("header", values.header);
    new_template.append("footer", values.footer);
    new_template.append("link", values.link);
   
    console.log(new_template);
    axios
      .post("http://216.48.182.12:5555/upload_template", new_template)
      .then((res) => {
        console.log("ress", res);
        setSuccess(true);
      })
      .catch((err) => {
        console.log("err", err);
        setError(true)
      });
    console.log("create Template", values);
  };

  const handleClose = () => {
    setSuccess(false);
  };

  return (
    <div className="d-flex flex-column align-items-center p-1">
      <div className="text-black fw-bold p-2 fs-5">
        Create WhatsApp Message Template
      </div>
      <div
        className="card px-4 py-4 pb-5 border border-transparent"
        style={{
          boxShadow: "rgb(178 186 187) 8px 9px 24px 3px",
          width: "40%",
          backgroundColor: "#dbe3fc",
        }}
      >
        <Formik
          initialValues={initialValues}
          //    validationSchema={schema}
          validate={(values) => validate(values)}
          onSubmit={onSend}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex flex-row ">
                    <div className="text-danger ">*</div>
                    <div>Template Name</div>
                  </div>
                  <input
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ height: 38 }}
                    type="text"
                    placeholder="Enter message template name..."
                  ></input>
                  <div
                    className="text-danger d-flex justify-content-end position-relative"
                    style={{
                      marginTop: -10,
                      fontSize: 13,
                    }}
                  >
                    {errors.name && touched.name && errors.name}
                  </div>
                </div>

                <div className="d-flex flex-column mb-2">
                  <div className="d-flex flex-row ">
                    <div className="text-danger ">*</div>
                    <div>Type</div>
                  </div>
                  <select
                    id="type"
                    style={{ height: 38, paddingTop: 4, paddingBottom: 4 }}
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Text">Text</option>
                    <option value="Image">Image</option>
                    <option value="Video">Video</option>
                    <option value="Document">Document</option>
                  </select>
                </div>

                {values.type !== "Text" && values.type !== "" && (
                  <div className="d-flex flex-column mb-3">
                    <div className="d-flex flex-row ">
                      <div className="text-danger ">*</div>
                      <div>Link</div>
                    </div>
                    <input
                      id="link"
                      value={values.link}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ height: 38 }}
                      type="text"
                      placeholder="Enter the link of document"
                    ></input>
                    <div
                      className="text-danger d-flex justify-content-end position-relative"
                      style={{
                        marginTop: -9,
                        fontSize: 13,
                      }}
                    >
                      {errors.link && touched.link && errors.link}
                    </div>
                  </div>
                )}

                <div className="d-flex flex-column mb-2">
                  <div className="d-flex flex-row ">
                    <div className="px-1">Header</div>
                    <div
                      className="rounded-pill px-2"
                      style={{
                        backgroundColor: "#bac4ca",
                        height: 15,
                        marginTop: 6,
                        fontSize: 12,
                      }}
                    >
                      optional
                    </div>
                  </div>
                  <input
                    id="header"
                    value={values.header}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ height: 38 }}
                    type="text"
                    placeholder="Enter header text"
                  ></input>
                </div>

                <div className="d-flex flex-column mb-3">
                  <div className="d-flex flex-row ">
                    <div className="text-danger ">*</div>
                    <div className="mb-2">Body</div>
                  </div>
                  <textarea
                    id="body"
                    value={values.body}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    style={{ border: "1px solid #ced4da", minHeight: 85 }}
                    placeholder="Your template body goes here."
                  ></textarea>
                  <div
                    className="text-danger d-flex justify-content-end"
                    style={{ fontSize: 13, position: "relative" }}
                  >
                    {errors.body && touched.body && errors.body}
                  </div>
                </div>

                <div className="d-flex flex-column mb-2">
                  <div className="d-flex flex-row ">
                    <div className="px-1">Footer</div>
                    <div
                      className="rounded-pill px-2"
                      style={{
                        backgroundColor: "#bac4ca",
                        height: 15,
                        marginTop: 6,
                        fontSize: 12,
                      }}
                    >
                      optional
                    </div>
                  </div>
                  <input
                    id="footer"
                    value={values.footer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ height: 38 }}
                    type="text"
                    placeholder="Enter footer text"
                  ></input>
                </div>

                <button
                  id="submit"
                  type="submit"
                  onClick={handleSubmit}
                  className="w-100 bg-primary text-white border border-white p-2 rounded-2"
                >
                  Create Template
                </button>
              </form>
            </>
          )}
        </Formik>
        {success && (
          <div
            className="m-2 d-flex flex-column align-items-center justify-content-around bg-white position-absolute card_temp"
          >
            <i className="bi bi-check-circle" style={{ color: "rgb(165,220,134)", fontSize: "50px" }}></i>
            <div style={{ color: "grey", fontWeight: "bold", fontSize: 35 }}>
              Template Created
            </div>
            <div style={{ color: "grey" }}>
              New Template Created Successfully..!
            </div>
            <button
              className="rounded-2 fw-bold border border-white p-2 rounded-3 text-white"
              style={{  backgroundColor: "rgb(112,102,224)", width: "15%" }}
              onClick={() => {
                handleClose();
              }}
            >
              OK
            </button>
          </div>
        )}
        {error && (
          <div
            className="m-2 d-flex flex-column align-items-center justify-content-around bg-white position-absolute card_temp"
          >
           <i
            className="bi bi-x-circle"
            style={{ fontSize: "80px", color: "rgb(242,116,116" }}
          ></i>
            <div style={{ color: "grey", fontWeight: "500", fontSize: 30 }}>
              Error
            </div>
            <div style={{ color: "grey" }}>
            Something went wrong !!
            </div>
            <button
              className="rounded-2 fw-bold border border-white p-2 rounded-3 text-white"
              style={{ backgroundColor: "rgb(112,102,224)", width: "15%" }}
              onClick={() => {
                setError(false)
              }}
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatTemplate;