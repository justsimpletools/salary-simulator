import { ReactElement } from "react";

import Landing from "@/pages/Landing";

interface IRoute {
	path: string;
	element: ReactElement;
}

interface IRoutes {
	noAuth: {
		landing: IRoute;
	};
	auth: {
		home: IRoute;
	};
}

export const routes: IRoutes = {
	noAuth: {
		landing: {
			path: "/",
			element: <Landing />,
		},
	},
	auth: {
		home: {
			path: "/home",
			element: <Landing />,
		},
	},
};
