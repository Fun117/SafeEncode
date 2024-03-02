import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import { _locales } from '../_locales';

type DocsPageGroupProps = {
    children?: React.ReactNode;
};
export const DocsPageGroup: React.FC<DocsPageGroupProps> = ({ children }) => {
	return (
		<>
			<div className='flex w-full h-full box-border'>
                {children}
			</div>
		</>
	);
};

type DocsContentGroupProps = {
    children?: React.ReactNode;
};
export const DocsContentGroup: React.FC<DocsContentGroupProps> = ({ children }) => {
	return (
		<>
            <div className='max-w-[1200px] w-full h-full pt-10 mx-auto'>
                <div className='flex flex-col w-full h-full p-3 md:p-5 md:pr-[20%] *:mb-[30px]'>
                    {children}
                </div>
            </div>
		</>
	);
};

type DocsContentProps = {
    children?: React.ReactNode;
};
export const DocsContent: React.FC<DocsContentProps> = ({ children }) => {
	return (
		<>
            <div className='flex flex-col w-full h-full *:mb-[25px]'>
                {children}
            </div>
		</>
	);
};

type DocsContentCardGroupProps = {
    children?: React.ReactNode;
};
export const DocsContentCardGroup: React.FC<DocsContentCardGroupProps> = ({ children }) => {
	return (
		<>
			<article>
				<section className='flex-wrap grid grid-cols-2 items-stretch'>
					{children}
				</section>
			</article>
		</>
	);
};

type DocsContentCardProps = {
	href: string;
	title: string;
	description: string;
};
export const DocsContentCard: React.FC<DocsContentCardProps> = ({ href, title, description }) => {
	return (
		<>
			<article className='max-w-[395px] w-full h-full px-3 mb-5'>
				<a href={href} className='flex flex-col overflow-hidden border-neutral-200 hover:border-green-500 border-solid border w-full h-full p-[2rem] rounded-lg shadow hover:shadow-lg active:shadow-sm active:scale-95 transition duration-300'>
					<h2 className='text-[1.2rem] text-ellipsis whitespace-nowrap overflow-hidden'>{title}</h2>
					<p className='text-[.8rem] text-ellipsis whitespace-nowrap overflow-hidden'>{description ? description : '...'}</p>
				</a>
			</article>
		</>
	);
};

type DocsContentNavGroupProps = {
    children?: React.ReactNode;
};
export const DocsContentNavGroup: React.FC<DocsContentNavGroupProps> = ({ children }) => {
	return (
		<>
            <div className='grid grid-cols-2 max-w-[1026px] w-full gap-3'>
                {children}
            </div>
		</>
	);
};

type DocsContentNavButtonProps = {
	type: string;
	href: string;
	Label: string;
	subLabel?: string;
};
export const DocsContentNavButton: React.FC<DocsContentNavButtonProps> = ({ type, href, Label, subLabel }) => {
	return (
		<>
			<a href={href} className={`flex flex-col justify-center ${type === 'next'? 'items-end': type === 'back'? 'items-start': ''} border-neutral-300 hover:border-green-500 border-[1px] w-full p-3 rounded-lg shadow hover:shadow-lg active:shadow-sm active:scale-95 transition duration-300`}>
				<span>{subLabel ? subLabel : type === 'next'? _locales(`Next`): type === 'back'?  _locales(`Previous`): ''}</span>
				<span className='text-green-500 font-bold'>
				{type === 'next'? (
					<>
						{Label} <FontAwesomeIcon icon={faAnglesRight} />
					</>
				):(
					<>
						{type === 'back'? (
							<>
								<FontAwesomeIcon icon={faAnglesLeft} /> {Label}
							</>
						):(
							<>
								{Label}
							</>
						)}
					</>
				)}
				</span>
			</a>
		</>
	);
};