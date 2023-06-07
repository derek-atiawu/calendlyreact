import React from 'react'

const Individuals = () =>{
    return(
        <div className="individuals">

<div className="container indcont1">
		<div className="row">
			<div className="col-md-4">
				<p style={{fontSize: "300%"}}><b>The genius way <br/> to work <span style={{color: "blue"}}> better</span></b></p>
				<p>calendly makes it easy to work smarter when you are working solo. Meetings, scheduling and appointment becomes more efficient ways to achieve success and accomplish goals.</p>
				<button className="free" style={{fontSize: "x-small"}}>Sign Up for free</button>
		
			</div>
			<div className="col-md-8 cal12">
				<img  src="images/cal12.png" className="img-responsive"  alt="cal12" />
			</div>
		</div>
	</div>


	<div className="container indcont2">
		<div className="row">
		<div className="col-md-8 cal13">
			<img  src="images/cal13.png" className="img-responsive"  alt="cal13" />
		</div>
				
		<div className="col-md-4">
			<p>A CURATED CALENDAR</p>
			<p style={{fontSize: "200%"}}><b>Book up efficiently</b></p>
			<p>when invitees select a meeting slot from your schedules, they only see the times you are available, and only the length and types of meetings you want to have. Your schedule fills up efficiently and everyone avoids excess email exchanges</p>
		</div>
		</div>
	</div>

	<div className="container indcont3">
		<div className="row">
		<div className="col-md-4">
			<p>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
			<p style={{fontSize: "200%"}}><b>Work like you have a personal assistant</b></p>
			<p>Because calendly automates administrative stuffs like sending reminder emails and follow-ups, you can focus on the work that builds your buiness and brings your customers back for more</p>
		</div>

		<div className="col-md-8 cal14">
			<img  src="images/cal14.png" className="img-responsive"  alt="cal14" />
		</div>
		</div>
	</div>

	<div className="container-fluid fplans">
		<p style={{color: "white", fontSize: "300%"}}>Find just right plans<br/> for individuals and<br/> small teams</p>
		<button className="plans" style={{fontSize: "x-small"}}><b>see our plans</b></button>
	</div>

	<div className="container-fluid guide">
		<div>
			<h3> Easy <br/> ahead</h3>
			<p>we take the work out of connecting with others so that you can accomplish more<br/> it'll do the work for you.</p>
		  <section className="lang-type">
  		  <select id="lang" name="lang">
    	  <option value="sesame">English</option>
    	  <option value="potato">French</option>
    	  <option value="cabbage">German</option>
  		  </select>   
          </section>
		</div>

		<div>
			<ul className="aboutlist">
			<h3> About </h3>
				<li><a href="about">About Calendly</a></li>
				<li><a href="contact">Contact Sales</a></li>
				<li><a href="newsroom">Newsroom</a></li>
				<li><a href="careers">Careers</a></li>
				<li><a href="security">Security</a></li>
			</ul>
		</div>

		 <div>
			<ul className="aboutlist">
			<h3> Solutions </h3>
				<li><a href="customer">Customer Service</a></li>
				<li><a href="sales">Sales</a></li>
				<li><a href="recruiting">Recruiting</a></li>
				<li><a href="education">Education</a></li>
				<li><a href="marketing">Marketing</a></li>
			</ul>
		</div>

		<div>

			<ul className="aboutlist">	
				<h3> Popular Features </h3>
				<li><a href="embed">Embed Calendly</a></li>
				<li><a href="availability">Availability</a></li>
				<li><a href="sending">Sending Notifications</a></li>
				<li><a href="mobile">Using Calendly mobile</a></li>
			</ul>
		</div> 

	</div>
           
        </div>
    )
}

export default Individuals;