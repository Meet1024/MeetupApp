import { Routes, Route } from "react-router-dom";
//import MainNavigation from './components/layout/MainNavigation';
import NewMeeetupPage from './pages/NewMeetup';
import AllMeetupPage from './pages/AllMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from "./components/layout/Layout";
function App() {
  return (

    <>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupPage />} />
        </Routes>
        <Routes>
          <Route path='/new-meetup' element={<NewMeeetupPage />} />
        </Routes>
        <Routes>
          <Route path='/favourites' element={<FavouritesPage />} />
        </Routes>
      </Layout>
    </>

  );
}

export default App;
