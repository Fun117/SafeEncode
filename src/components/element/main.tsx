import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

type MainProps = {
    children?: React.ReactNode;
};
const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<>
			<div className='bg-white text-black box-border w-full min-h-[100vh] h-full'>
                {children}
			</div>
		</>
	);
};

export default Main;