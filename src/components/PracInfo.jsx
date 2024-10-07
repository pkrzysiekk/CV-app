import { useState } from "react";

function PracInfo() {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    mainResp: "",
    timeWorked: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };
  const handleEdit = (event) => {
    event.preventDefault();
    setIsSubmitted(false);
  };

  return (
    <div className="prac-wrapper">
      <h2 className="prac-title">Practical experience</h2>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        onChange={(e) => handleChange(e)}
        disabled={isSubmitted}
      />
      <input
        type="text"
        name="position"
        placeholder="Position Title"
        onChange={(e) => handleChange(e)}
        disabled={isSubmitted}
      />
      <input
        type="text"
        name="mainResp"
        placeholder="Main responsibilities"
        onChange={(e) => handleChange(e)}
        disabled={isSubmitted}
      />
      <input
        type="date"
        name="timeWorked"
        placeholder="Time worked"
        onChange={(e) => handleChange(e)}
        disabled={isSubmitted}
      />
      <div className="prac-buttons">
        <button className="prac-submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        <button className="prac-edit" onClick={(e) => handleEdit(e)}>
          Edit
        </button>
      </div>
    </div>
  );
}
export default PracInfo;
