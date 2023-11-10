import { SyntheticEvent, useState } from "react";
import Header from "../components/Header";
import { Input } from "../components";
import "../App.css";
import login from "../utils/login";

const Login = () => {
  const [id, setId] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (id === "1234") {
      localStorage.setItem("id", id!);
      window.location.reload();
    } else {
      const data = await login(id!);
      if (data.code === "ERR_NETWORK") {
        setError(true);
        console.log(data);
      }
    }
  };

  return (
    <main>
      <Header text={"Login"} />

      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          label={"Enter your ID"}
          name={"id"}
          value={id || ""}
          handleChange={setId}
        />
        <button type="submit">Login</button>
      </form>
      <p className="alert">{error && "Please check your ID and try again!"}</p>
    </main>
  );
};

export default Login;
