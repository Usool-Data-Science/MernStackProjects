import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from '../components/Layouts/UserLayout';
import Home from '../pages/Home/Home';
import { Toaster } from 'sonner';
import Login from '../pages/Login/Login';

function App() {
	return (
		<BrowserRouter>
			<Toaster position="top-right" />
			<Routes>
				<Route path="/" element={<UserLayout />}>
					{/* Landing page */}
					<Route index element={<Home />} />
					{/* Login page */}
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
