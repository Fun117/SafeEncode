import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { links_config } from '../../../public/assets/links';
import { _locales } from '../_locales';

const currentYear = new Date().getFullYear();

const Socials = [
	{ name: 'GitHub', href: links_config['Social/GitHub'], target: '_block' },
	{ name: 'Scratch', href: links_config['Social/Scratch'], target: '_block' },
	{ name: 'Youtube', href: links_config['Social/Youtube'], target: '_block' },
	{ name: _locales(`Developer Discord`), href: links_config['Socials/DeveloperDiscord'], target: '_block' },
]

const Development = [
	{ name: _locales(`Repository`), href: links_config['Development/Repository'], target: '_block' },
	{ name: _locales(`Documentation`), href: links_config['/docs'], target: '_self' },
]

const Resources = [
	{ name: _locales(`Privacy Policy`), href: links_config['/docs/privacy-policy'], target: '_self' },
]

export default function Footer() {
	return (
		<>
			<footer className='bg-[#f0f0f0] text-zinc-400 flex flex-col justify-center items-center w-full h-full px-2 md:px-10 py-10 gap-10'>				
                <div className='flex flex-row justify-center items-center mx-auto gap-2 pointer-events-none select-none'>
					<Image
						src="/assets/brand/SafeEncode/safe-encode512x512.png"
						alt='Logo'
						width={40}
						height={40}
					/>
                    <h1 className='font-semibold'>SafeEncode</h1>
                </div>
				<section className='flex flex-col md:flex-row justify-around items-start md:items-center gap-8'>
					<div className='flex flex-col gap-2 mb-auto'>
						<h1 className='text-zinc-900 font-bold'>{_locales(`Socials`)}</h1>
						<section className='flex flex-col items-start'>
							{Socials.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target={item.target}
								className={`hover:text-zinc-500 transition duration-200`}
							>
								{item.name}
							</a>
							))}
						</section>
					</div>
					<div className='flex flex-col gap-2 mb-auto'>
						<h1 className='text-zinc-900 font-bold'>{_locales(`Development`)}</h1>
						<section className='flex flex-col items-start'>
							{Development.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target={item.target}
								className={`hover:text-zinc-500 transition duration-200`}
							>
								{item.name}
							</a>
							))}
						</section>
					</div>
					<div className='flex flex-col gap-2 mb-auto'>
						<h1 className='text-zinc-900 font-bold'>{_locales(`Resources`)}</h1>
						<section className='flex flex-col items-start'>
							{Resources.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target={item.target}
								className={`hover:text-zinc-500 transition duration-200`}
							>
								{item.name}
							</a>
							))}
						</section>
					</div>
				</section>
				<div className="max-w-7xl mx-auto pb-5 select-none">
					<div className="h-px w-full bg-gradient-to-r from-transparent via-[#989AA6]/[0.5] to-transparent" />
					<div className="text-sm pt-4 text-center flex items-center flex-wrap justify-center">
						<p className='text-zinc-400'>
							Copyright &copy; 2023 - {currentYear} Fun117
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
