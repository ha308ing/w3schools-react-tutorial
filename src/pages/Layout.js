import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div className="columns">
            <div className="column is-two-thirds-tablet mx-auto">
                <nav className="navbar">
                    <h1 className="navbar-item navbar-brand title-4">
                        <Link to="/">W3Schools React Tutorial</Link>
                    </h1>
                    <ul className="navbar-menu is-active">
                        <li className="navbar-item">
                            <Link to="/cars">Cars</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/memo">Memo</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/hooks">Hooks</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}
