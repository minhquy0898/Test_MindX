import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import PageNotFound from '../pages/PageNotFound/Pagenotfound';
import Register from '../pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../pages/Auth/Login';
// import HomePage from '../pages/HomePage/HomePage';
function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/' element={<HomePage />} /> */}
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default AppRouter;