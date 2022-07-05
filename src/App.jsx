import './App.css';
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sideBar/SideBar";
import SendMsg from './components/sendMsg/SendMsg';
import Loading from './components/loading/Loading';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase_config';

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    loading ? <Loading/>:
    <div className='container'>
      <Sidebar/>
      <div className="main-wrapper">
        <div className='top'>
        Hello!<br/>
        Welcome to zakcord.
        </div>
        {/* <Login accessible={user}/> */}
        <Chat accessible={user}/>
        <div className='filler'></div>
        <div className="send-wrapper">
          <SendMsg />
        </div>
      </div>
    </div>
  );
}

export default App;