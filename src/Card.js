import React from 'react'
import "./Card.css"

export const Card = () => {
  return (
    <>
<div class="card-container">
	{/* <span class="pro">PRO</span> */}
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Ricky Park</h3>
	<h6>full stack developer</h6>
	<p>User interface designer and front-end developer User interface designer and front-end developer.</p>
	<div class="buttons">
		<button class="primary">
			follow
		</button>
	
	</div>
</div>
    </>
  )
}
