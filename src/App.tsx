import { useState } from "react";
import "./App.css";

const App = () => {
  const [sms, setSms] = useState("");

  const isDisabled = sms.length >= 160 || sms.length === 0 ? true : false;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSms(e.currentTarget.value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSms("");
  };

  return (
    <div className="app">
      <header>
        <img src={"/logo.png"} alt="SMSio logo" />
        <h1>SMSio</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="sms">
            Enter your message:
            <br />
            <input
              type="text"
              name="sms"
              id="sms"
              value={sms}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              autoCapitalize="on"
              maxLength={160}
            />
          </label>
          <button type="submit" disabled={isDisabled}>
            Send
          </button>
          <p>{sms.length >= 160 && "Maximum SMS length is 160 characters!"}</p>
        </form>
      </main>
    </div>
  );
};

export default App;
