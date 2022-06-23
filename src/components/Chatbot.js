import React from "react";

const Chatbot = () => {
  return (
    <>
      <head>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1"></script>
      </head>
      <div
        dangerouslySetInnerHTML={{
          __html: (
            <df-messenger
              df-cx="true"
              location="australia-southeast1"
              chat-title="Turner&#x27;s chatbot"
              agent-id="452c67d6-7092-467a-944f-82a4302f963f"
              language-code="en"
            ></df-messenger>
          ),
        }}
      />
    </>
  );
};

export default Chatbot;
