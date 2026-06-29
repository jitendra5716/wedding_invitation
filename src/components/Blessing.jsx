import { useState } from "react";
import { message } from "antd";

const Blessing = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    messages: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.messages.trim()) {
      message.error("Please enter your name and blessing message.");
      return;
    }

    message.success("Thank you! Your blessing has been sent.");
    setFormData({ name: "", mobile: "", messages: "" });
  };

  const containerStyle = {
   
    margin: "40px auto",
    padding: "28px",
    borderRadius: "24px",
    background: "rgba(255, 250, 245, 0.96)",
    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.1)",
    color: "#4d3c2f",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const headingStyle = {
    margin: 0,
    marginBottom: "36px",
    fontSize: "clamp(2rem, 2.5vw, 2.6rem)",
    textAlign: "center",
    letterSpacing: "0.15em",
  };

  const formStyle = {
    maxWidth: "720px",
    display: "grid",
    gap: "18px",
    marginTop: "12px",
    margin:'10px auto'
  };

  const inputStyle = {
    width: "100%",
    minHeight: "50px",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(125, 95, 84, 0.24)",
    background: "#fff",
    fontSize: "1rem",
    color: "#3f2b20",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "140px",
    resize: "vertical",
  };

  const buttonStyle = {
    width: "60%",
    padding: "14px 28px",
    borderRadius: "999px",
    border: "none",
    background: "#8b3b22",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    alignSelf: "start",
    margin:"10px auto"
  };

  const noteStyle = {
    marginTop: "18px",
    fontSize: "0.96rem",
    lineHeight: 1.6,
    color: "#5b4638",
    textAlign:"center"
  };

  return (
    <section id="wishes" style={containerStyle}>
      <h1 style={headingStyle}>Send Us Your Blessings</h1>

      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />

        <input
          style={inputStyle}
          type="tel"
          name="mobile"
          placeholder="Your WhatsApp No. (optional)"
          value={formData.mobile}
          onChange={handleChange}
          inputMode="tel"
          autoComplete="tel"
        />

        <textarea
          style={textareaStyle}
          name="messages"
          placeholder="Your Wishes (Emoji are supported)"
          value={formData.messages}
          onChange={handleChange}
          required
        />

        <button type="submit" style={buttonStyle}>
          Send your wishes
        </button>
      </form>

      <p style={noteStyle}>
        You will receive automated wish confirmation via WhatsApp.
      </p>
      <p style={noteStyle}>
        Only your name and wish will be displayed above.
      </p>
    </section>
  );
};

export default Blessing;
