import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App.tsx";

import Home from "./pages/Home.tsx";
import Ninjas from "./pages/Ninjas.tsx";

import "./index.css";

const getData = async (linkToFetch: string) => {
	const result = await axios.get(linkToFetch);
	return result;
};

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/ninjas",
				element: <Ninjas />,
				loader: () => {
					return getData("http://localhost:4242/api/ninjas/");
				},
			},
			// {
			// 	path: "/villages",
			// 	element: <Villages />,
			// },
			// {
			// 	path: "/jutsus",
			// 	element: <Jutsus />,
			// },
			// {
			// 	path: "/missions",
			// 	element: <Missions />,
			// },
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
