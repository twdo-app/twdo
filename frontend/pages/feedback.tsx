import { useState } from "react";
import { FiArrowLeft, FiSend } from "react-icons/fi";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";
import { api } from "../services/api";

export default function Feedback() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    api.post("/utils/send-feedback", {
      message: message,
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <p>Type your feedback message:</p>
      <textarea
        className="border border-solid border-primary-border h-80 w-96 p-8 rounded-xl resize-none"
        name="feedback-content"
        id="feedback"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <Button icon={<FiSend />} onClick={handleSubmit}>
        Send Feedback
      </Button>
      <Hyperlink href="/inbox">
        <FiArrowLeft /> Back to Inbox
      </Hyperlink>
    </div>
  );
}
