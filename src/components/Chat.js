import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../style/Chat.css";

export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queeryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    const unsuscribe = onSnapshot(queeryMessages, (snapshot) => {
      const _messages = [];

      snapshot?.forEach((doc) => {
        _messages.push({ ...doc?.data(), id: doc?.id });
      });

      setMessages(_messages);
    });

    return () => {
      unsuscribe();
    };
  }, []);

  const handleSubmit = async (event) => {
    event?.preventDefault(); //prevent the reloading of form
    if (newMessage === "") return; //if message is empty then return (end the fun)

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Welcome to:{room.toUpperCase()}</h1>
      </div>
      <div className="messages">
        {messages?.map((message) => {
          return (
            <div className="message" key={message.id}>
              <span className="user">{message.user}</span>
              {message.text}
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="new -message-form">
        <input
          className="new-message-input"
          placeholder="Type your message here"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
