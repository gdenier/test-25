import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AuthProvider, useAuth } from "shared";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <AuthProvider>
        <Test />
      </AuthProvider>
    </>
  );
}

const Test = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <p>{user?.email ?? "not connected"}</p>
      <button
        onClick={() => (user ? logout() : login({ email: "test@test.fr" }))}
      >
        {user ? "logout" : "login"}
      </button>
    </div>
  );
};

export default App;
