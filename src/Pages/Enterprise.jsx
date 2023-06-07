import React from 'react'

const Enterprise = () =>{
    return(
        <div className="enterprise">

<div class="container two">
		<p style={{fontSize: "xx-large", fontWeight: "bolder"}}><span style={{color: "blue"}}> Way more </span>than a <br/> scheduling link</p>
		<p>Standardize on the #1 scheduling platform and deliver the power of calendly across your entire organization</p>
		<button>Contact sales</button>
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

	<div class="container">
		<div class="row">
			<div class="col-md-4 thub">
			<div class="thumbnail">
			  <a href="#" style={{color: "blue"}}>Sales</a>
              <img src="images/cal18.webp" alt="sales"/>
              <div class="caption">
              <p> Convert more leads and prospects into meetings and revenue. easily book demos and customer calls without back and forth</p>
            </div>
    		</div>
			</div>

			<div class="col-md-4 thub">
			<div class="thumbnail">
			  <a href="#" style={{color: "blue"}}>Recruiting</a>
              <img src="images/cal21.webp" alt="recruit"/>
              <div class="caption">
              <p> Fill your candidate pipeline and book more interviews and recruiter screens with easy, standardized scheduling</p>
              </div>
			</div>
		</div>

			<div class="col-md-4 thub">
			<div class="thumbnail">
			  <a href="#" style={{color: "blue"}}>Customer Success</a>
              <img src="images/cal19.webp" alt="education"/>
              <div class="caption">
              <p>Deliver better support interaction and customer consultation. Stay connected with automated reminders and follow-ups</p>
              </div>
			</div>
		</div>
	</div>
	<div class="learn">
	<button>Learn more</button>
	</div>
</div>

	<div class="container-fluid guide">
		<div>
			<h3> Easy <br/><span style={{color:"blue"}}> ahead</span></h3>
			<p>we take the work out of connecting with others so that you can accomplish more<br/> it'll do the work for you.</p>
		  <section class="lang-type">
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

export default Enterprise;