import React from 'react';


const appStyles = {
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '32px',
    fontFamily: 'sans-serif',
  },
  container: {
    border: '2px solid black', 
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '100%',
    maxWidth: '32rem',
  },
  title: {
    fontSize: '1.5rem', 
    fontWeight: '600', 
  },
};

const parentStyles = {
  container: {
    border: '2px solid black',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
  },
  title: {
    fontSize: '1.25rem', 
    fontWeight: '600',
  },
};

const childStyles = {
  container: {
    border: '2px solid black',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: '600',
  },
  messageText: {
    fontSize: '1.25rem',
    fontWeight: '700',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
};

function Child({ message }) {
  return (
    <div style={childStyles.container}>
      <h3 style={childStyles.title}>Child Component</h3>
      <p>I have received the message:</p>
      <p style={childStyles.messageText}>
        "{message}"
      </p>
    </div>
  );
}

function Parent({ message }) {
  return (
    <div style={parentStyles.container}>
      <h2 style={parentStyles.title}>Parent Component</h2>
      <p>I am the parent. I am now passing the message to my child.</p>
      <Child message={message} />
    </div>
  );
}

export default function App() {
  const message = "Hello from the App component!";

  return (
    <div style={appStyles.main}>
      <div style={appStyles.container}>
        <h1 style={appStyles.title}>App Component</h1>
        <p>I am holding the original message: "{message}"</p>
        <p>I will pass it to the Parent component.</p>
        
        <Parent message={message} />
      </div>
    </div>
  );
}