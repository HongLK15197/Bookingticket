import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
  <BrowserRouter>
    <div className="App">

      <Header />

      {/* Liên kết các page  */}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/resgister" component={Register} />

      {/* Route mặc định để dưới cuối cùng của ứng dụng */}
        <Route exact path="/" component={Home}/>

      {/* Switch và exact là lệnh để gọi đúng trang mà người dùng muốn đến (so sánh/break ra từng trang) */}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
