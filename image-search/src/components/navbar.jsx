const navbar = ({search}) => {
  
  return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Image Search!</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" id='search' placeholder="Search" aria-label="Search" autoComplete="off"/>
                    <button className="btn btn-primary" type="button" onClick={() => search(document.getElementById('search').value)}>Search</button>
                </form>
            </div>
        </nav>
  )
}

export default navbar