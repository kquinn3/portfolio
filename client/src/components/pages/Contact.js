import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/Contact.css";

const Contact = () => {
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    onResume();
    // eslint-disable-next-line
  }, []);
  const onResume = async () => {
    try {
      let res = await axios("/resume", {
        method: "GET",
        responseType: "blob"
      });
      let file = await new Blob([res.data], {
        type: "application/pdf"
      });

      const fileURL = await URL.createObjectURL(file);
      setResumeUrl(fileURL);
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  return (
    <Fragment>
      <div className="contact"></div>
      <div className="container mx-auto">
        <div className="h-10v"></div>
        <div className="text-center my-2">
          <h1>Resume</h1>
        </div>
        <div className="iframe-container">
          <iframe
            src={resumeUrl}
            title="resumeFrame"
            // width="1000"
            // height="500"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
