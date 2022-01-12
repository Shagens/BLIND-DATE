import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Datingcards from './components/DatingCards';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
// import ChatAndSearch  from './Components/Landing/Search/ChatAndSearch';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

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
const socket = io.connect('http://localhost:3001')

const App = () => {
  const [state, setState] = useState({
    message: '', name: ''
  }) 

  useEffect(() => {
    socket.on('message', ({name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

  const onTextChange = e => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const onMessageSubmit = (e) => {
    e.preventDefault()
    const {name, message} = state
    socket.emit('message', {name, message })
    setState({ message: '', name })
  }

  const renderChat = () => {
    return chat.map(({name, message}, index) =>(
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  const [chat, setChat] = useState([])
  return (
    <div className="card">
      <Header />
      <LoginForm/>
      <form onSubmit={onMessageSubmit}>
        <h1>Message</h1>
        <div className="name-field">
        <TextField
          name="name"
          onChange={e => onTextChange(e)}
          value={state.name}
          label="Name" />
      </div>

          <div>
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message" />
            </div>
            <button>Send</button>
        </form>
        <div className="render-chat"></div>
        <h1> Chat log</h1>
        {renderChat()}
      </div>
  )
}

export default App;
