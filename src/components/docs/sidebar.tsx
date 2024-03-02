import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faBars, faCloud, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { links_config } from '../../../public/assets/links';
import React, { useEffect, useState } from 'react';
import { _locales } from '../_locales';

const HeaderNav = [
	{ name: _locales('Home'), href: links_config['/Home'], target: '_self' },
	{ name: _locales('Docs'), href: links_config['/docs'], target: '_self' },
]

export function DocsSidebar({ sidebar }: {
    sidebar: {
        name: string;
        href: string;
        target?: string;
        now: boolean;
        subItems?: { name: string; href: string; now: boolean }[];
    }[]
}) {
    const [openSubItems, setOpenSubItems] = useState<string | null>(null);

    const handleSubItemClick = (name: string) => {
        setOpenSubItems(openSubItems === name ? null : name);
    };

    return (
        <>
            <aside className='hidden md:block sticky border-zinc-300 border-r-[1px] max-w-[280px] w-full min-h-[100vh] ml-2'>
                <div className=''>
                    <nav className=' w-full pt-2'>
                        <ul className='flex flex-col gap-1 w-full *:w-full *:rounded-l-lg'>
                            {sidebar.map((item) => (
                                <React.Fragment key={item.name}>
                                    {item.subItems ? (
                                        <>
                                            <div
                                                className={`group flex flex-row justify-between items-center ${item.now ? 'bg-green-100 text-green-500 hover:bg-green-100' : 'bg-white hover:bg-green-100'} p-2 transition duration-300`}
                                            >
                                                <a href={item.href}>{item.name}</a>
                                                <button className={`flex justify-center items-center ${item.now ? 'bg-green-100 text-green-500 hover:bg-green-200' : 'bg-white hover:bg-green-100'} group-hover:bg-green-100 group-hover:hover:bg-green-200 w-[26px] h-[26px] px-2 rounded-lg transition duration-300`} onClick={() => handleSubItemClick(item.name)}>
                                                    <FontAwesomeIcon icon={openSubItems === item.name ? faAngleDown : faAngleRight} className='w-[26px] h-[26px] m-auto items-center text-center inline-block'/>
                                                </button>
                                            </div>
                                            {openSubItems === item.name && (
                                                <div className='flex flex-col justify-end items-end gap-2 w-full pl-3'>
                                                    {item.subItems.map((subItem) => (
                                                        <a key={subItem.name} href={subItem.href} className={`${subItem.now ? 'bg-green-100 text-green-500 hover:bg-green-100' : 'bg-white hover:bg-green-100'} w-full p-2 pr-0 rounded-l-lg transition duration-300`}>
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            href={item.href}
                                            target={item.target}
                                            className={`${item.now ? 'bg-green-100 text-green-500 hover:bg-green-100' : 'bg-white hover:bg-green-100'} p-2 transition duration-300`}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export function DocsHeader({ sidebar }: {
    sidebar: {
        name: string;
        href: string;
        target?: string;
        now: boolean;
        subItems?: { name: string; href: string; now: boolean }[];
    }[]
}) {
    const [open, setOpen] = useState<boolean | string>('close');

    useEffect(() => {
        const handleBodyOverflow = () => {
            //const bodyElement = document.querySelector(`main`);
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
	
    const [openSubItems, setOpenSubItems] = useState<string | null>(null);

    const handleSubItemClick = (name: string) => {
        setOpenSubItems(openSubItems === name ? null : name);
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
				<div className={`fixed top-0 left-0 bg-black/50 w-full h-full ${open?  open==='close'? 'hidden' : 'fadeLeft' : 'fadeOutLeft hidden'}`}>
					<div className={`flex w-full h-full`}>
						<div className='bg-neutral-100 max-w-[250px] w-full h-full'>
							<div className='flex justify-between items-center gap-2 bg-green-500 p-4 select-none'>
								<a href='/' className='flex justify-center items-center gap-2'>
									<Image
										src="/assets/brand/SafeEncode/safe-encode512x512.png"
										alt='Logo'
										width={38}
										height={38}
									/>
									<h1 className='font-semibold text-[20px]'>SafeEncode</h1>
								</a>
								<div className='px-2'>
									<button onClick={() => handleOpenClick()}>
										<FontAwesomeIcon icon={faXmark} className='text-[25px]'/>
									</button>
								</div>
							</div>
							<div className='text-black h-full pl-2 overflow-scroll'>
                                <nav className=' w-full pt-2'>
                                    <ul className='flex flex-col gap-1 w-full *:w-full *:rounded-l-lg'>
                                        {sidebar.map((item) => (
                                            <React.Fragment key={item.name}>
                                                {item.subItems ? (
                                                    <>
                                                        <div
                                                            className={`group flex flex-row justify-between items-center ${item.now ? 'bg-green-100 text-green-500 hover:bg-green-100' : 'bg-white hover:bg-green-100'} p-2 transition duration-300`}
                                                        >
                                                            <a href={item.href}>{item.name}</a>
                                                            <button className={`flex justify-center items-center ${item.now ? 'bg-green-100 text-green-500 hover:bg-green-200' : 'bg-white hover:bg-green-100'} group-hover:bg-green-100 group-hover:hover:bg-green-200 w-[26px] h-[26px] px-2 rounded-lg transition duration-300`} onClick={() => handleSubItemClick(item.name)}>
                                                                <FontAwesomeIcon icon={openSubItems === item.name ? faAngleDown : faAngleRight} className='w-[26px] h-[26px] m-auto items-center text-center inline-block'/>
                                                            </button>
                                                        </div>
                                                        {openSubItems === item.name && (
                                                            <div className='flex flex-col justify-end items-end gap-2 w-full pl-3'>
                                                                {item.subItems.map((subItem) => (
                                                                    <a key={subItem.name} href={subItem.href} className={`${subItem.now ? 'bg-green-100 text-green-500 hover:bg-green-100' : 'bg-white hover:bg-green-100'} w-full p-2 pr-0 rounded-l-lg transition duration-300`}>
                                                                        {subItem.name}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <a
                                                        href={item.href}
                                                        target={item.target}
                                                        className={`${item.now ? 'bg-green-100 text-green-500 hover:bg-green-100' : 'bg-white hover:bg-green-100'} p-2 transition duration-300`}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
