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

const TwitchSvg = styled.svg`
	width: 160px;
	height: 160px;
`;

const svgVariants = {
	start: { fill: 'rgba(255,255,255,0)', pathLength: 0, scale: 0.9 },
	end: { fill: 'rgba(255,255,255,1)', pathLength: 1, scale: 1, transition: { duration: 3 } },
};

function Motion6(): JSX.Element {
	return (
		<BoxContainer>
			Motion example 6.
			<Card>
				<TwitchSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<motion.path
						variants={svgVariants}
						initial="start"
						animate="end"
						stroke="white"
						strokeWidth="4"
						d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"
					/>
				</TwitchSvg>
			</Card>
		</BoxContainer>
	);
}

export default Motion6;
