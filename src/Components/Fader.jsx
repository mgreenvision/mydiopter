import React from "react";
import styled from "styled-components";

/* 
	#### Logic of the functionality ####

	mount: 	display: none
			opacity: 0;

	show:	display: block
			opacity: transition to >> 1

	unmount:opacity: transition to 0
			display: delay 1sec >> none;
*/

function Fader({ fadeDuration, status, children }) {
	// when mount the display will be false
	const [isDisplay, setIsDisplay] = React.useState(false);
	const [isOpacity, setIsOpacity] = React.useState(false);

	React.useEffect(() => {
		// if on >> set the opacity to 1
		if (status) {
			setIsDisplay(true);
			setTimeout(() => setIsOpacity(true), 25);
		}
		// unmount the element
		if (!status && isDisplay) {
			setIsOpacity(false);
			setTimeout(() => setIsDisplay(false), fadeDuration - 10);
		}
	}, [status]);

	return (
		<FadeWrapper
			duration={fadeDuration}
			opacity={isOpacity ? 1 : 0}
			isDisplay={isDisplay}
		>
			{children}
		</FadeWrapper>
	);
}

const FadeWrapper = styled.div`
	display: ${(props) => (props.isDisplay ? "block" : "none")};
	opacity: ${(props) => props.opacity};
	transition: opacity ${(props) => props.duration}ms ease-out;
`;

export default Fader;
