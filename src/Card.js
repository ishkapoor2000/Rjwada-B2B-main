import React from 'react'
import "./Card.css"

export const Card = () => {
	const openInNewTab = url => {
		window.open(url, '_blank', 'noopener,noreferrer');
	  };
  return (
    <>
<div class="card-container">
	{/* <span class="pro">PRO</span> */}
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Abhinav Verma</h3>
	<h6>Founder & CEO</h6>
	<p>Who is Abhinav Verma?</p>
	<div class="buttons">
		<button class="primary" onClick={() => openInNewTab("https://")}>
			Connect
		</button>
	
	</div>
</div>

<div class="card-container">
	{/* <span class="pro">PRO</span> */}
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Yash Vardhan Singh</h3>
	<h6>Co-Founder & MD</h6>
	<p>Who is YVS?</p>
	<div class="buttons">
		<button class="primary" onClick={() => openInNewTab("https://")}>
			Connect
		</button>
	
	</div>
</div>

<div class="card-container">
	{/* <span class="pro">PRO</span> */}
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Ish Kapoor</h3>
	<h6>product Manager</h6>
	<p>Why is ish Kapoor?</p>
	<div class="buttons">
		<button class="primary" onClick={() => openInNewTab("https://topmate.io/ish")}>
			Connect
		</button>
	
	</div>
</div>
    </>
  )
}
