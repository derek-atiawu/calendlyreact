import React from 'react'

const Teams = () => {
    return(
        <div>
            	<div class="container indcont1">
		<div class="row">
			<div class="col-md-4">
				<p style={{fontSize: "300%"}}><b><span style={{color: "blue"}}>Power up  </span>your<br/>teams</b></p>
				<p>calendly gives you control onver team scheduling with a standardized, scalabe process. It's secure, easy to manage, and integrates with your teams favorite tools, so you can get everyone working as efficiently and effectively as possible.</p>
				<button class="free" style={{fontSize: "x-small"}}>Start for free</button>
				<button class="salescontact" style={{fontSize: "x-small"}}>Contact Sales</button>
		
			</div>
			<div class="col-md-8 cal16">
				<img  src="images/cal16.png" class="img-responsive"  alt="cal16" />
			</div>
		</div>
	</div>
	<p style={{textAlign: "center", fontWeight: "bolder", fontSize: "300%"}}>Steamline task, extend team <br/>reach</p>


	<div class="container indcont2">
		<div class="row">
		<div class="col-md-8 cal17">
			<img  src="images/cal17.png" class="img-responsive"  alt="Responsive-Image" />
		</div>
				
		<div class="col-md-4">
			<p>AUTOMATED ASSIGNMENT</p>
			<p style={{fontSize: "200%"}}><b>Control how your team gets booked</b></p>
			<p> With calendly you can offer sessions that are a few minutes or a few hours, for one invitee or a group. Automated round-robin, first available, or geography based assignment let you easily divvy out meeting in any way that works for your team members.</p>
		</div>
		</div>
	</div>
		<p style={{textAlign:"center", color:"blue", fontWeight: "bold"}}>SOLUTIONS</p>
		<p style={{textAlign: "center", fontWeight: "bolder", fontSize: "200%"}}>The right calendly for the job you do</p>

	<div class="container">
		<div class="row">
			<div class="col-md-3">
			<div class="thumbnail">
              <img src="images/cal18.webp" alt="sales"/>
            <div class="caption">
             <h3>Sales</h3>
             <p> Get to your best leads faster.</p>
             <a href="#" style={{color: "blue"}}>Learn more </a>
            </div>
    		</div>
			</div>

			<div class="col-md-3">
			<div class="thumbnail">
              <img src="images/cal21.webp" alt="recruit"/>
            <div class="caption">
             <h3>Recruiting</h3>
             <p> Less emailing, more closing</p>
             <a href="#" style={{color: "blue"}}>Learn more </a>
            </div>
			</div>
		</div>

			<div class="col-md-3">
			<div class="thumbnail">
              <img src="images/cal20.webp" alt="customerservice"/>
            <div class="caption">
             <h3>Customer Service</h3>
             <p> Connect with customers when it matters</p>
             <a href="#" style={{color: "blue"}}>Learn more </a>
            </div>
			</div>
		</div>

			<div class="col-md-3">
			<div class="thumbnail">
              <img src="images/cal19.webp" alt="education"/>
            <div class="caption">
             <h3>Education</h3>
             <p>Boost student success</p>
             <a href="#" style={{color: "blue"}}>Learn more </a>
            </div>
			</div>
		</div>
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

export default Teams;