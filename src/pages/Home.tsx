import { useState } from "react";
import Header from "../components/Header";
import "../App.css";
import { Input } from "../components";

const Home = () => {
  const [sms, setSms] = useState("");

  const isDisabled = sms.length >= 160 || sms.length === 0 ? true : false;
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSms("");
  };

  return (
    <main>
      <Header text={"SMSio"} />
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          name={"sms"}
          value={sms}
          handleChange={setSms}
          label={"Enter your message:"}
          autoComplete="off"
          autoCapitalize="on"
          maxLength={160}
        />
        <button type="submit" disabled={isDisabled}>
          Send
        </button>
        <p className="alert">
          {sms.length >= 160 && "Maximum SMS length is 160 characters!"}
        </p>
      </form>
    </main>
  );
};

export default Home;
