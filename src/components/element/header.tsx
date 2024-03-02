import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCloud, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { links_config } from '../../../public/assets/links';
import { _locales } from '../_locales';
import { useEffect, useState } from 'react';

const HeaderNav = [
	{ name: _locales('Home'), href: links_config['/Home'], target: '_self' },
	{ name: _locales('Docs'), href: links_config['/docs'], target: '_self' },
]

export default function Header() {
    const [open, setOpen] = useState<boolean | string>('close');

    useEffect(() => {
        const handleBodyOverflow = () => {
            const bodyElement = document.body;
            if (bodyElement) {
                if (open? open==='close'? false : true : false) {
                    bodyElement.classList.add('overflow-hidden');
                } else {
                    bodyElement.classList.remove('overflow-hidden');
                }
            }
        };

        handleBodyOverflow();

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    const handleOpenClick = () => {
        setOpen(open? open==='close'? true : false : true);
    };
	

	return (
		<>
			<header className='sticky z-[100] top-0 flex flex-row justify-between bg-green-500 text-zinc-50 w-full h-[70px] px-[5%] py-3'>				
				<div className='flex justify-center items-center gap-2 select-none'>
					<a href='/' className='flex justify-center items-center gap-2'>
						<Image
							src="/assets/brand/SafeEncode/safe-encode512x512.png"
							alt='Logo'
							width={40}
							height={40}
						/>
						<h1 className='font-semibold text-[20px]'>SafeEncode</h1>
					</a>
				</div>
				<div className='hidden md:block my-auto overflow-hidden'>
					<div className='flex flex-row gap-5 select-none'>
						{HeaderNav.map((item) => (
						<a
							key={item.name}
							href={item.href}
							target={item.target}
							className={`hover:text-zinc-300 transition duration-200`}
						>
							{item.name}
						</a>
						))}
					</div>
				</div>
				<div className={`block md:hidden my-auto ${open? open==='close'? 'opacity-100' : 'opacity-0' : 'opacity-100'} transition ease-in-out duration-300`}>
					<button onClick={() => handleOpenClick()}>
						<FontAwesomeIcon icon={faBars} className='text-[25px]'/>
					</button>
				</div>
				<div className={`fixed top-0 left-0 bg-black/50 w-full h-full ${open?  open==='close'? 'hidden' : 'fadeLeft' : 'fadeOutLeft'} transition ease-in-out duration-300`}>
					<div className={`flex w-full h-full`}>
						<div className='bg-neutral-100 max-w-[250px] w-full h-full'>
							<div className='flex justify-between items-center gap-2 bg-green-500 p-4 select-none'>
								<a href='/' className='flex justify-center items-center gap-2'>
									<Image
										src="/assets/brand/SafeEncode/safe-encode512x512.png"
										alt='Logo'
										width={35}
										height={35}
									/>
									<h1 className='font-semibold text-[20px]'>SafeEncode</h1>
								</a>
								<div className='px-2'>
									<button onClick={() => handleOpenClick()}>
										<FontAwesomeIcon icon={faXmark} className='text-[25px]'/>
									</button>
								</div>
							</div>
							<div className='py-4'>
								<div className='flex flex-col text-black pl-2 gap-2 select-none'>
									{HeaderNav.map((item) => (
									<a
										key={item.name}
										href={item.href}
										target={item.target}
										className={`bg-white hover:bg-green-100 p-2 transition duration-300`}
									>
										{item.name}
									</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
