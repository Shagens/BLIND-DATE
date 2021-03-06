//import React, {useState, useRef, useEffect} from 'react';
//import Header from './components/Header';
//import io from 'socket.io-client';
//import TextField from '@material-ui/core/TextField';
//import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client";
// import ChatAndSearch  from './Components/Landing/Search/ChatAndSearch';
//import TinderCard from "react-tinder-card";
//import "./TinderCards.css";

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });

// // const client = new ApolloClient({
// //   request: (operation) => {
// //     const token = localStorage.getItem('id_token')
// //     operation.setContext({
// //       headers: {
// //         authorization: token ? `Bearer ${token}` : ''
// //       }
// //     })
// //   },
// //   uri: '/graphql',
// // })

// function App() {
// 	const [ state, setState ] = useState({ message: "", name: "" })
// 	const [ chat, setChat ] = useState([])

// 	const socketRef = useRef()

// 	useEffect(
// 		() => {
// 			socketRef.current = io.connect("http://localhost:4000")
// 			socketRef.current.on("message", ({ name, message }) => {
// 				setChat([ ...chat, { name, message } ])
// 			})
// 			return () => socketRef.current.disconnect()
// 		},
// 		[ chat ]
// 	)

// 	const onTextChange = (e) => {
// 		setState({ ...state, [e.target.name]: e.target.value })
// 	}

// 	const onMessageSubmit = (e) => {
// 		const { name, message } = state
// 		socketRef.current.emit("message", { name, message })
// 		e.preventDefault()
// 		setState({ message: "", name })
// 	}

// 	const renderChat = () => {
// 		return chat.map(({ name, message }, index) => (
// 			<div key={index}>
// 				<h3>
// 					{name}: <span>{message}</span>
// 				</h3>
// 			</div>
// 		))
// 	}

// 	return (
// 		<div className="card">
// 			<form onSubmit={onMessageSubmit}>
// 				<h1>Messenger</h1>
// 				<div className="name-field">
// 					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
// 				</div>
// 				<div>
// 					<TextField
// 						name="message"
// 						onChange={(e) => onTextChange(e)}
// 						value={state.message}
// 						id="outlined-multiline-static"
// 						variant="outlined"
// 						label="Message"
// 					/>
// 				</div>
// 				<button>Send Message</button>
// 			</form>
// 			<div className="render-chat">
// 				<h1>Chat Log</h1>
// 				{renderChat()}
// 			</div>
// 		</div>
// 	)

//   const [currentPage, handlePageChange] = useState('Header');
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Header':
//         return <Header />;
//       // case 'Portfolio':
//       //   return <Portfolio />;
//       // case 'Contactme':
//       //   return <ContactForm />;
//       //   case 'Resume':
//       //   return <Resume />
//       // default:
//       //   return <Aboutme />;
//     }
//   };
//   return (
//     <div>
//     <Header handlePageChange={handlePageChange}/>
//     {/* <Nav/>
//     <div>{renderPage(currentPage)}</div>
//     {/* <Aboutme/>
//     <Portfolio/>
//     <Resume/>
//     <ContactForm/> */}
//     {/* <Footer/> */}
//     </div>

//   );
// }

// export default App;


// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem('id_token')
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     })
//   },
//   uri: '/graphql',
// })
import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home"
import Footer from "./components/Footer"
import Chat from "./components/Chat"
// import Signup from "./components/Signup"
// import login from "./components/Login"
// import Datingcards from "./components/DatingCards";
// import io from "socket.io-client";
// import TextField from "@material-ui/core/TextField";
// import {BrowserRouter, Route} from 'react-router-dom';
import TinderCards from './components/TinderCards';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
// import ChatAndSearch  from './Components/Landing/Search/ChatAndSearch';
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

function App() {
      
      const [currentPage, handlePageChange] = useState('Home');
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Header':
        return <Header />;
      case 'TinderCards':
        return <TinderCards />;
      case 'Chat':
        return <Chat />;
      // case 'Signup':
      //   return <Signup />;
      // case 'Login':
      //   return <Login />;
      default:
        return <Home />;
    };
  }
  return (
    <div id="body">
    <Header handlePageChange={handlePageChange}/>
    {/* <Nav/> */}
    <div>{renderPage(currentPage)}</div>
    {/* <Aboutme/>
    <Portfolio/>
    <Resume/>
    <ContactForm/> */}
    <Footer/>
    </div>
    
  );
  
}
export default App;
