import React from 'react';

const Card = ({id, name, email}) => {
	return(
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${id}??set=set4`}/>
			<div>
				<h2>{id}</h2>
				<h2>{name}</h2>
				<h2>{email}</h2>
			</div>
		</div>
	);
}

export default Card;