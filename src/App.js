import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage.js';
import SearchPage from './components/pages/SearchPage.js';
import ProfilePage from './components/pages/ProfilePage.js';
import NavBar from './components/NavBar.js';
import NotFoundPage from './components/pages/NotFoundPage.js';
import SongPage from './components/pages/SongPage.js';

function App() {
	

return (
	<div className="App-header">
		Poke App Pages

		{/* // app.com/ HomePage
		// app.com/searfh SearchPage
		// app.com/profile/# ProfilePage */}
		
		<NavBar />

		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/profile/:id" element={<ProfilePage />} />

			<Route path="/artist/:artist/song/:song" element={<SongPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>


	</div>
);
}

export default App;
