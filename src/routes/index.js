import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Generic } from '../pages/Generic';
import { Element } from '../pages/Element';
export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generic" element={<Generic />} />
            <Route path="/element" element={<Element />}  />
         
        </Routes>
    </Router>
)