import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Main</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <span className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Войти</Link>
            </span>
            <span className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </span>
            <span className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <span><Link className="dropdown-item" to="/">Action</Link></span>
                <span><Link className="dropdown-item" to="/">Another action</Link></span>
                <span><hr className="dropdown-divider" /></span>
                <span><Link className="dropdown-item" to="/">Something else here</Link></span>
              </div>
            </span>
            <span className="nav-item">
              <Link to='/' className="nav-link disabled">Disabled</Link>
            </span>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
