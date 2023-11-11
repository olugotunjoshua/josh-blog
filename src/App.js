// import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

function App() {

  // const title = 'Welcome to Josh blog';
  // let likes = 50;
  // const link = 'http://www.google.com'
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
