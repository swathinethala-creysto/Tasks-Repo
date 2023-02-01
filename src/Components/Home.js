import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
  return (
    <div className="d-flex justify-content-center">
      <div>
        <button
          style={{
            fontSize: "14px",
            backgroundColor: "rgb(8,160,255)",
            height: "34px",
          }}
          className="rounded-3 m-2 bg-primary text-white border border-white px-2"
          onClick={()=>{
            navigate('/subscribe')
          }}
        >
          Subscribe
        </button>
      </div>
      <div>
        <button
          style={{
            fontSize: "14px",
            backgroundColor: "rgb(8,160,255)",
            height: "34px",
          }}
          className="rounded-3 m-2 bg-primary text-white border border-white px-2"
          onClick={()=>{
            navigate('/unsubscribe')
          }}
        >
          Un-Subscribe
        </button>
      </div>
      <div>
        <button
          style={{
            fontSize: "14px",
            backgroundColor: "rgb(8,160,255)",
            height: "34px",
          }}
          className="rounded-3 m-2 bg-primary text-white border border-white px-2"
          onClick={()=>{
            navigate('/createtemplate')
          }}
        >
          Create Template
        </button>
      </div>
      <div>
        <button
          style={{
            fontSize: "14px",
            backgroundColor: "rgb(8,160,255)",
            height: "34px",
          }}
          className="rounded-3 m-2 bg-primary text-white border border-white px-2"
          onClick={()=>{
            navigate('/sendmsg')
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Home;
