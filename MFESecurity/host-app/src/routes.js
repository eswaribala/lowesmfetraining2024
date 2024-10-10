// container/src/routes.js
import React, {Suspense} from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom';

const RemoteApp1 = React.lazy(() => import('mfe1/Login'));
const RemoteApp2 = React.lazy(() => import('mfe2/Dashboard'));
//import MFE1App from 'mfe1/App'; // Remote MFE1 component
//import MFE2App from 'mfe2/App';


const AppRoutes = () => {
    return (
        <div>

            <Routes>

                <Route
                    path="/"
                    element={
                        <Suspense fallback={<div>Loading Remote App...</div>}>
                            <RemoteApp1 /> {/* Remote app will handle its own routing */}
                        </Suspense>
                    }
                />
                    {/* MFE1 has its own nested routes */}
                <Route
                    path="/dashboard"
                    element={
                        <Suspense fallback={<div>Loading Remote App...</div>}>
                            <RemoteApp2 /> {/* Remote app will handle its own routing */}
                        </Suspense>
                    }
                />
            </Routes>
            <Outlet/>
        </div>
    );
};
export default AppRoutes;