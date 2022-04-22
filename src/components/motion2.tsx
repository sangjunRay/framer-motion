import { motion } from 'framer-motion';
import styled from 'styled-components';

const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
`;

const Card = styled(motion.div)`
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 300px;
	height: 200px;
	background-color: rgb(220, 220, 220);
	color: white;
	border-radius: 10px;
	padding: 1rem;
	margin-top: 1rem;
	border: 2px solid #bcbdc4;
`;

const InnerCircle = styled(motion.div)`
	width: 60px;
	height: 60px;
	background-color: rgb(255, 255, 255);
	border-radius: 100%;
	box-shadow: 2px 3px 4px gray;
	place-self: center;
`;

const cardVariants = {
	start: { opacity: 0, scale: 0 },
	end: {
		opacity: 1,
		scale: 1,
		transition: { type: 'spring', duration: 0.9, bounce: 0.5, staggerChildren: 0.3, delayChildren: 0.5 },
	},
};

const circleVariants = {
	start: {
		opacity: 0,
		y: 10,
	},
	end: {
		opacity: 1,
		y: 0,
	},
};

function Motion2(): JSX.Element {
	return (
		<BoxContainer>
			Motion example 2.
			<Card variants={cardVariants} initial="start" animate="end">
				<InnerCircle variants={circleVariants} />
				<InnerCircle variants={circleVariants} />
				<InnerCircle variants={circleVariants} />
				<InnerCircle variants={circleVariants} />
				<InnerCircle variants={circleVariants} />
				<InnerCircle variants={circleVariants} />
			</Card>
		</BoxContainer>
	);
}

export default Motion2;
