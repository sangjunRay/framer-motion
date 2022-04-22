import { motion } from 'framer-motion';
import styled from 'styled-components';

const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
`;

const Card = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 300px;
	height: 200px;
	background-color: rgb(50, 50, 50);
	color: white;
	border-radius: 10px;
	padding: 1rem;
	margin-top: 1rem;
	font-size: 1.2rem;
	font-weight: 600;
`;

const cardVariants = {
	start: { scale: 0 },
	end: { scale: 1, rotateZ: 360, transition: { type: 'spring', damping: 7 } },
};

function Motion1(): JSX.Element {
	return (
		<BoxContainer>
			Motion example 1.
			<Card variants={cardVariants} initial="start" animate="end">
				spring motion
			</Card>
		</BoxContainer>
	);
}

export default Motion1;
