import Logo from '../assets/LogoIS.png'
const navbar = () => {
  
  return (
        <nav className="navbar fixed-top navbar-dark">
            <div className="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={Logo} alt="Image Search!" width="30" height="30"/>
              
            </a>
                
            </div>
        </nav>
  )
}

export default navbar