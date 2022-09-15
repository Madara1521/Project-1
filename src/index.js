import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 16},
    {id: 2, message: 'It\'s my first post', likesCount: 13}
]

let dialogs = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Slavik'},
    {id: 3, name: 'Stas'},
    {id: 4, name: 'Vlad'},
    {id: 5, name: 'Andreu'}
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is your neki4?'},
    {id: 3, message: 'Yo'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
