import './index.css';
import AllCountries from './components/AllCountries';
import CountryInfo from './components/CountryInfo';
import { GetThemeValue } from './components/contextTheme';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  >
    <Route index  element={<AllCountries/>} />
    <Route path='/country/:countryName' element={<CountryInfo/>} />
    </Route>
  )
)

function App() {
  const {darkTheme} = GetThemeValue();


  return (
    <div className={`${darkTheme ? 'bg-[#F2F2F2]' : 'bg-[#202C36]'} ${darkTheme ? 'text-[#2B3844]' : 'text-[#F2F2F2]'} min-h-screen`}>
        <RouterProvider router={router} />
    </div>

  );
}

export default App;
