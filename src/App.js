import './index.css';
import AllCountries from './components/AllCountries';
import CountryInfo from './components/CountryInfo';
import { GetThemeValue } from './components/contextTheme';
import {BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const {darkTheme} = GetThemeValue();


  return (
    <div className={`${darkTheme ? 'bg-[#F2F2F2]' : 'bg-[#202C36]'} ${darkTheme ? 'text-[#2B3844]' : 'text-[#F2F2F2]'} min-h-screen`}>
    <BrowserRouter >
      <Routes >
        <Route index  element={<AllCountries />} />
        <Route path='/country/:countryName' element={<CountryInfo />} />
     </Routes>
    {/* <RouterProvider router={ router} /> */}
    <AllCountries />
    </BrowserRouter>
    </div>
    

  );
}

export default App;
