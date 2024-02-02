import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import HomePage from '../Home/HomePage'
import {useRoutes} from 'react-router-dom';
import NotFound from '../NotFound/NotFound'

const AppRouter = () => {
    const element = useRoutes([
        {path:'/', element: <HomePage/>},
        {path:'/login', element:<Login/>},
        {path: '/sign-up', element: <SignUp/>},
        {path: '/404', element:<NotFound/>}
    ])

    return element;
}

export default AppRouter;