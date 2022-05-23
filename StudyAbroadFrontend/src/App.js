import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Home from './Body/Home/index';
import Register from './Body/Register/Register';
import Login from './Body/Login/Login';
import Countries from './Body/Countries/countries';
// import LoginRegister from './Body/signup_signin/login_register';
import CountriesDetails from './Body/CountriesDetails/CountriesDetails'
import AddCountries from './Body/AddCountries/addCountries';
import NewsandPolicy from './Body/NewsandPolicy/news';
import AddNews from './Body/AddNews/AddNews';
import NewsDetails from './Body/NewsDetails/newsDetails';
import Universities from './Body/Universities/universities';
import Footer  from './Footer/Footer'
import UniversityDetails from './Body/UniversityDetails/UniversityDetails';
import AddUniversity from './Body/AddUniversity/AddUniversity';
import MockTest from './Body/MockTest/mockTest';
import Reading from './Body/MockTest/Reading/reading';
import Speaking from './Body/MockTest/Speaking/speaking';
import Listening from './Body/MockTest/Listening/listening';
import Writing from './Body/MockTest/Writing/writing';
import InstructionPage from './Body/MockTest/InstructionsPage/instructionpage';
import ReadingTest from './Body/MockTest/Reading/test';
import Reset from './Body/ResetPassword/reset';
import LoginGoogle from './Body/Login/googleLogin/googlelogin'
import QuizSummary from './Body/MockTest/Reading/quizSummary';
import Mailer from './Body/Mailer/mailer';
import UserProfile from './Body/UserProfile/userprofile';
import WishList from './Body/Wishlist/wishList';
import FAQ from './Body/FAQ/faq'
// import AboutUs from './Body/AboutUs/AboutUs';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// CHATRA
(function (d, w, c) {
  w.ChatraID = 'BxdpcQGaebZdaFXuc';
  var s = d.createElement('script');
  w[c] = w[c] || function () {
    (w[c].q = w[c].q || []).push(arguments);
  };
  s.async = true;
  s.src = 'https://call.chatra.io/chatra.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/login' component = {Login}/>
        <Route path = '/register' component = {Register}/>
        <Route path='/news' component={NewsandPolicy} />
        <Route path='/addNews' component={AddNews}/>
        <Route path='/newsdetails/:id' component={NewsDetails}/>
        <Route path = '/countries'  component ={Countries}/>
        <Route path = '/countriessssss/:id' component = {CountriesDetails}/>
        <Route path ='/addCountries' component={AddCountries}/>
        <Route path ='/Universities' component={Universities}/>
        <Route path = '/universitydetails/:id' component ={UniversityDetails}/>
        <Route path = '/addUniversity' component={AddUniversity}/>
        <Route path = '/exams' component= {MockTest}/>
        <Route path ='/reading/test' component={Reading}/>
        <Route path = '/listening/test' component={Listening}/>
        <Route path = '/writing/test' component={Writing}/>
        <Route path = '/speaking/test' component={Speaking}/>
        <Route path = '/instruction/page' component={InstructionPage}/>
        <Route path = '/test/reading' component={ReadingTest} />
        <Route path = '/quizSummary' component={QuizSummary}/>
        <Route path = '/reset' component={Reset}/>
        <Route path ='/googlelogin' component={LoginGoogle}/>
        <Route path ='/book/counseling' component={Mailer}/>
        <Route path ='/user/profile' component={UserProfile}/>
        <Route path ='/wishlist' component={WishList}/>
        <Route path ='/faq' component={FAQ}/>



        {/* <Route path ='/login/register' component={LoginRegister}/> */}

      </Switch>
      <Footer/>
      <ToastContainer />
    </Router>
    
     </>
  )


}

export default App;
