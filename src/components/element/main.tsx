import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

type MainProps = {
    children?: React.ReactNode;
};
const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<>
			<main className='bg-white text-black box-border w-full min-h-[100vh] h-full'>
                {children}
			</main>
		</>
	);
};

export default Main;