import Card from "./components/Card";

// import Chatbot from "./components/Chatbot";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <header className="App-header">
        <df-messenger
          df-cx="true"
          location="australia-southeast1"
          chat-title="Turner&#x27;s chatbot"
          agent-id="452c67d6-7092-467a-944f-82a4302f963f"
          language-code="en"
        ></df-messenger>
      </header>
      {/* <Chatbot /> */}
    </>
  );
}

export default App;
