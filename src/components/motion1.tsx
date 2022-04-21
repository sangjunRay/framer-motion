import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Card = styled(motion.div)`
	box-sizing: border-box;
	width: 300px;
	height: 200px;
	background-color: rgb(50, 50, 50);
	color: white;
	border-radius: 10px;
	padding: 1rem;
	margin-top: 1rem;
`;

function Motion1(): JSX.Element {
	return (
		<Container>
			<BoxContainer>
				Motion example 1.
				<Card transition={{ type: 'spring', damping: 7 }} initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }}>
					motion component
				</Card>
			</BoxContainer>
		</Container>
	);
}

export default Motion1;
