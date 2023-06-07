import React from 'react'

const Home = () =>{
    return(
        <div className="home">
          <div className="container">
		<div className="row">
			<div className="col-md-6">
				<p style={{fontSize: "300%"}}><b>Easy <br/> scheduling</b></p>
				<p style={{fontSize: "300%", color: "blue", fontWeight: "bold"}}>ahead</p>
				<p style={{textAlign: "justify"}}>Calendly is your hub for scheduling meetings<br/> professionally and efficiently, eliminatitng the hastle of<br/> back-and-forth emails so you can go back to work</p>
				<form>
					<input type="email" name="email" Value="Enter your email"></input><button>Sign Up</button>
				</form>
				<p style={{fontSize: "x-small"}}>Create free account. No credit card required.</p>
			</div>
      
			<div className="col-md-6 cal2">
				<img  src="images/cal2.png" className="img-responsive"  alt="cal2" />
			</div>
		</div>
	</div>	


	<div className="container-fluid content">
		<div className="subscribers"><p style={{textAlign: "center", fontSize: "150%" }}><b>Simplified scheduling for more than<br/> <span style={{color: "blue"}}>10,000,000 </span> users worldwide</b></p></div>
	  <div className="partners">	
		<div><img style={{width: "100px" , height: "100px"}} src="images/compass.png" className="img-responsive"  alt="partner-compass" /></div>
		<div><img style={{width: "100px" , height: "100px"}} src="images/dropbox.png" className="img-responsive"  alt="partner-dropbox" /></div>
		<div><img style={{width: "100px" , height: "100px"}} src="images/ebay.png" className="img-responsive"  alt="partner-ebay" /></div>
		<div><img style={{width: "100px" , height: "100px"}} src="images/lazboy.jpeg" className="img-responsive"  alt="partner-lazboy" /></div>
		<div><img style={{width: "100px" , height: "100px"}} src="images/twillio.png" className="img-responsive"  alt="partner-twillio" /></div>
	  </div>	
	</div>

	<div className="container-fluid guide">
		<div>
			<div className="number">1.</div>
			<h3> Create<br/> simple rules</h3>
			<p>let calendly know your <br/>availability preferences and <br/> it'll do the work for you.</p>
		</div>

		<div>
			<div className="number">2.</div>
			<h3> Share your<br/> link</h3>
			<p>Share guests your calendly<br/> link or embed it on your<br/> website</p>
		</div>

		<div>
			<div className="number">3.</div>
			<h3> Get booked</h3>
			<p>They pick a time and the<br/> event is added to your<br/> calendar.</p>
		</div>

	</div>
   </div>

    )
}

export default Home;