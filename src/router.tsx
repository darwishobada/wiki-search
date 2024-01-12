import {createBrowserRouter} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import {ROUTER_PATHS} from './constants';
import Home from './Pages/Home';
const router = createBrowserRouter([
	{
		path: ROUTER_PATHS.DEFAULT,
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'search',
				async lazy() {
					const SearchList = await import('./Pages/SearchList');
					return {Component: SearchList.default};
				},
			},
		],
	},
]);

export default router;
