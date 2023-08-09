import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/home/Home';
import Error from '../Pages/error/error';
import PokeDetails from '../Pages/pokeDetails/PokeDetails';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:name' element={<PokeDetails/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}

export default MainRoutes;