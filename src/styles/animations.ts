import { keyframes } from 'styled-components';

export const toastInRight = keyframes`
	from {
	  transform: translateX(100%);
	  
	}
	to {
	  transform: translateX(0);
	}
`;

export const toastInLeft = keyframes`
	from {
		transform: translateX(-100%);
		
	}
	to {
		transform: translateX(0);
	}
`;
