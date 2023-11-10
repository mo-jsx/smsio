import { useEffect, useState } from "react";
import { Home, Login } from "./pages";
import checkLocalStorageKey from "./utils/checkLocalStorageKey";
import "./App.css";

const App = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  const userId = "id";

  useEffect(() => {
    checkLocalStorageKey(userId, setIsAvailable);

    const intervalId = setInterval(() => {
      checkLocalStorageKey(userId, setIsAvailable);
    }, 60000);

    return () => clearInterval(intervalId);
  }, [isAvailable]);

  if (!isAvailable) {
    return <Login />;
  } else {
    return <Home />;
  }
};

export default App;
