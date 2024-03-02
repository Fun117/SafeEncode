import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { _locales } from '../_locales';

export default function Top({ title }: { title: string }) {
	return (
		<>
			<div className='bg-teal-400 text-zinc-50 border-stone-200 border-b-[1px] w-full h-full' style={{backgroundImage: `linear-gradient(to right bottom, #5780b5, #4695c4, #38aacd, #3dbdd1, #56d0cf, #53d5c7, #59dabc, #66deaf, #4fd79a, #38cf83, #22c769, #06bf4d)`}}>
                <div className='bg-cover bg-left bg-no-repeat w-full h-full md:pt-10' style={{backgroundImage: `url('/images/bgWhite.png')`}}>
                    <div className='flex flex-col md:flex-row justify-between items-center max-w-[800px] w-full h-full m-auto p-5 pt-10 pb-0 gap-10'>
                        <div className='max-w-[500px] md:max-w-[400px] w-full p-2'>
                            <h1 className='font-bold text-4xl md:text-6xl text-left'>{title}</h1>
                        </div>
                        <div className='mt-auto select-none pointer-events-none'>
                            <Image
                                src="/images/Send.png"
                                alt="Cloud Server"
                                width={300}
                                height={300}
                                className='max-w-[300px] w-full'
                            />
                        </div>
                    </div>
                </div>
			</div>
		</>
	);
}
