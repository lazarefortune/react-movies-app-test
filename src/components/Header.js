import {useAuth} from "../hooks/useAuth";

export const Header = () => {
    const {user, logout} = useAuth();

    return (
        <header className="header__navbar">
            <div className="logo__navbar">
                <h1>Movie App</h1>
            </div>
            <ul className="navbar__list">
                <li className="navbar__item"><a href="/">Home</a></li>
                <li className="navbar__item"><a href="/movies-list">Movies</a></li>
                <li className="navbar__item"><a href="/login" onClick={logout}>Logout</a></li>
            </ul>
        </header>
    );
}