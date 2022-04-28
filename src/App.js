import Header from './components/Header';
import FeebackItem from "./components/FeedbackItem";
import PropTypes from 'prop-types'
function App() {
  return (
    <>
      <Header text="My App"/>
      <div className='container'>
        <FeebackItem />
      </div>
    </>
  );
}

Header.defaultProps ={

}

Header.propTypes = {
  text: PropTypes.string
}

export default App;
