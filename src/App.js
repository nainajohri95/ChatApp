import { useState, useRef } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";

const cookies = new Cookies(); // Create a cookies object
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  // const signUserOut = (async = () => {});

  if (!isAuth) {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room ">
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
      {/* <div className="sign-out">
        <button onClick={signUserOut}>Sign Out</button>
      </div> */}
    </>
  );
}

export default App;
