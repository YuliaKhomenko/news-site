import React from 'react'

import '../common/style/style.css'
import '../common/style/bootstrap.css'
import '../common/style/style.css'
import Logo from '../Logo'

const Header = () => {
	return (
		
            <header className="header">
				<div className="container">
					<div className="row">
						<div className= "col-md-12"><Logo/></div>
						<div className="col-md-12">
							<ul className="menu">
								<li><a href=''>Home Page</a></li>
								<li><a href=''>Bussiness</a>
									<ul className="submenu">  
										<li><a href=''>Economy</a></li>
										<li><a href=''>Trade</a></li>
										<li><a href=''>Insurance</a></li>
										<li><a href=''>Agriculture</a></li>
										<li ><a className="special" href=''>Scandal</a></li>
									</ul>
								</li>
								<li><a href=''>Politics</a>
									<ul className="submenu">  
										<li><a href=''>Election</a></li>
										<li><a href=''>Missions</a></li>
										<li><a href=''>Conflicts</a></li>
										<li><a href=''>EU</a></li>
										<li><a className="special" href=''>Scandal</a></li>
									</ul>
								</li>
								<li><a href=''>Sport</a>
									<ul className="submenu">  
										<li><a href=''>Football</a></li>
										<li><a href=''>Basketball</a></li>
										<li><a href=''>Swimming</a></li>
										<li><a href=''>Olympiad</a></li>
										<li><a className="special" href=''>Scandal</a></li>
									</ul>
								</li>
								<li><a href=''>Fashion</a></li>
								<li><a href=''>Art</a>
									<ul className="submenu">  
										<li><a href=''>Music</a></li>
										<li><a href=''>Artistic Art</a></li>
										<li><a href=''>Writings</a></li>
										<li><a href=''>Sculpture</a></li>
										<li><a className="special" href=''>Scandal</a></li>
									</ul>
								</li>
								<li><a href=''>Health</a></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		
)
    }

    export default Header;
