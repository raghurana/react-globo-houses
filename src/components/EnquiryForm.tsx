import React, { useState } from "react";
import "./EnquiryForm.css";

type EnquiryData = { name: string; email: string; comments: string };

const EnquiryForm = () => {
  const [enquityData, setEnquiryData] = useState<EnquiryData>({ name: "", email: "", comments: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnquiryData({ ...enquityData, [e.target.id]: e.target.value });
  };
  const onSubmit = () => {
    alert(`Email sent with data: ${JSON.stringify(enquityData, null, 1)}`);
  };

  return (
    <form className="enquiry-container">
      <input type="text" id="name" placeholder="Name" onChange={onChange} />
      <input type="text" id="email" placeholder="Email" onChange={onChange} />
      <textarea id="comments" placeholder="Comments" onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};

export default EnquiryForm;
