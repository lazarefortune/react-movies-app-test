import './App.css';
import Router from './routes/index.js';
import {AuthProvider} from "./hooks/useAuth";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Router/>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
