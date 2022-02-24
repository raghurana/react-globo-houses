import "./EnquiryForm.css";

const EnquiryForm = () => {
  return (
    <div className="enquiry-container">
      <div>Name</div>
      <input type="text" id="name" />
      <div>Email</div>
      <input type="text" id="email" />
      <div>Comments</div>
      <textarea id="comments" />
      <button>Submit</button>
    </div>
  );
};

export default EnquiryForm;
