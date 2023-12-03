import './index.css';
import AllCountries from './components/AllCountries';
import CountryInfo from './components/CountryInfo';
import { Routes,Route } from 'react-router-dom'
import { GetThemeValue } from './components/contextTheme';

function App() {
  const {darkTheme} = GetThemeValue();

  return (
    <div className={`${darkTheme ? 'bg-[#F2F2F2]' : 'bg-[#202C36]'} ${darkTheme ? 'text-[#2B3844]' : 'text-[#F2F2F2]'} min-h-screen`}>
      <Routes>
      <Route path='/' element={<AllCountries />} />
      <Route path='/country/:countryName' element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;
