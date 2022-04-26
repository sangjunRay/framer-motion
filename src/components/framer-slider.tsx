import styled from 'styled-components';

const Container = styled.section`
	padding-left: 10rem;
`;

const SliderTitle = styled.h1`
	font-size: 1.5rem;
	font-weight: 700;
`;

function FramerSlider(): JSX.Element {
	return (
		<Container>
			<SliderTitle>Framer-Slider</SliderTitle>
			<div>slider</div>
		</Container>
	);
}

export default FramerSlider;
