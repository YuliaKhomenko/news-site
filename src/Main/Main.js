import React from 'react'

import '../common/style/style.css'
import '../common/style/bootstrap.css'
import '../common/style/style.css'

const Main = () => {
	return (
        <main className="main">
			<div className="container">			
				<div className="row">
					<div className="search col-md-4"/>
					<div className="search col-md-4"></div>
					<div className="search col-md-4">
						<ul className="register">
							<li><a href=''>Sign in</a></li>
							<li><a href=''>Register</a></li>
						</ul>
					</div>
				</div>
					<div className= "left col-md-3">
						<div className="teme"><a href=''>H o t</a>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top" /></a></div>
								<div className="text"><a href=''>12 dead in California bar shooting</a></div>
							</div>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top" /></a></div>
								<div className="text"><a href=''>69-year-old Dutchman starts legal bid to become 20 years younger</a></div>
							</div>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top" /></a></div>
								<div className="text"><a href=''>Brazilian Grand Prix: Reliving Lewis Hamilton's first world title 10 years on</a></div>
							</div>
						</div>
						<div className="teme"><a href=''>C e l e b r e t i e s</a>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top" /></a></div>
								<div className="text"><a href=''>Having surrendered her royal status, what will Princess Ayako wear to her wedding?</a></div>
							</div>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top" /></a></div>
								<div className="text"><a href=''>US report: Kate Middleton pregnant with baby number four</a></div>
							</div>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top"/></a></div>
								<div className="text"><a href=''>Bella Hadid seemingly responds to skinny-shamers on Instagram: 'All body types are different'</a></div>
							</div>
						</div>
					</div>
					<div className= "main-content col-md-6">
						<div className="row">
							<div className="teme-main"><a href=''>B r e a k i n g N e w s</a>
								<iframe width="500" height="370" src="https://www.youtube.com/embed/PQJvQjC2ptE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								<div className="text-main"><a href=''>Democrats regain the House as record number of women elected to Congress</a></div>
								<div className="row">
									<div className="col-md-6">
										<div className="top">
											<div className="picture-right"><a href=''><img className="picture-top"/></a></div>
											<div className="text"><a href=''>Michelle Obama: I'll never forgive Trump</a></div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="top">
											<div className="picture-right"><a href=''><img className="picture-top" /></a></div>
											<div className="text"><a href=''>London as you've never seen it</a></div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="top">
											<iframe width="210" height="165" src="https://www.youtube.com/embed/55vAmEL8nrk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
											<div className="text"><a href=''>Man pleads guilty to killing pregnant wife, daughters</a></div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="top">
											<iframe width="210" height="165" src="https://www.youtube.com/embed/D4rT90ESIjg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
											<div className="text"><a href=''>Daylight saving time, marijuana legalization among ballot initiatives</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
							
					<div className= "right col-md-3">
						<div className="teme"><a href=''>P o p u l a r</a>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top" /></a></div>
								<div className="text"><a href=''>Bombardier cutting 5,000 jobs</a></div>
							</div>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top"/></a></div>
								<div className="text"><a href=''>World's largest underwater restaurant nears completion</a></div>
							</div>
							<div className="top">
								<div className="picture-right"><a href=''><img className="picture-top"/></a></div>
								<div className="text"><a href=''>Your Grandma may be old, but that doesn't mean you will be, researchers say</a></div>
							</div>
						</div>
						<div className="teme"><a href=''>W a t c h</a>
							<iframe width="210" height="165" src="https://www.youtube.com/embed/8AOjbUzYfgU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							<div className="text"><a href=''>"Appreciate every moment": MakSim first told about the incurable illness of the father you will be, researchers say</a></div>
							<iframe width="210" height="165" src="https://www.youtube.com/embed/D0CfjoBfXlI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							<div className="text"><a href=''>More than 27K evacuated as fire destroys town</a></div>
							<iframe width="210" height="165" src="https://www.youtube.com/embed/P4wwoVxp9ZI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							<div className="text"><a href='' >Teen describes surviving great white shark bite</a></div>

					</div>
				</div>
			</div>
		</main>
        )
    }

    export default Main;