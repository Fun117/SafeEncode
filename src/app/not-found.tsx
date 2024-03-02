'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Header from '@/components/element/header';
import Footer from '@/components/element/footer';
import Top from '@/components/element/top';
import Main from '@/components/element/main';
import { UI_Code, formatJSON } from '@/components/element/ui_code';
import { FormEvent, useEffect, useState } from 'react';
import Loading from '@/components/element/loading';
import { _locales } from '@/components/_locales';
import { HeadCustom_config } from '@/components/headCustom';

export default function Home() {

	// ページロード
	const [isLangLoaded, setPageLoaded] = useState(false);
	useEffect(() => {
		const fetchLanguage = async () => {
			try {
				setPageLoaded(true);
			} catch (error) {
				console.error("取得エラー:", error);
			}
		};
		if (!isLangLoaded) {
			fetchLanguage();
		}
	}, [isLangLoaded]);

    // headカスタム
	const Head_config = {
		title:`${_locales('Page not found')} | SafeEncode`,
	};
	HeadCustom_config(Head_config);
	
	return (
		<>
			{isLangLoaded ? (
				<>
					<Header/>
					<Top title={`404 ${_locales('Page not found')}`}/>
					<Main>
						<>
							<div className='flex flex-col w-auto mb-8 mx-[15%] p-5 pt-[60px] gap-5'>
								<h1 className='font-bold text-[1.975rem] text-center'>{_locales(`About SafeEncode`)}</h1>
								<p className='text-center'>{_locales(`SafeEncode is a tool designed for encoding and decoding data with a focus on security and privacy. It aims to securely convert sensitive data, such as confidential information and personal data, into a safe format for storage and transmission. This tool can be used for various secure data processing tasks, including secure communication and storage in databases.`)}</p>
							</div>
							<div className='w-full'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1256 190.39" className="w-full box-content overflow-hidden z-[-1]">
									<path className='fill-green-400' d="m1256,85.56v50.57c-39.97,21.07-102.24,41.36-199.06,51.63-16.5,1.75-31.79,2.63-46.02,2.63-34.23,0-62.37-5.1-86.6-15.52-31.34-13.48-51.49-33.92-70.97-53.68-18.6-18.87-36.17-36.69-64.44-50.85-32.85-16.47-75.67-25.18-130.9-26.65-138.67-3.68-198.36,32.06-261.57,69.9-52.91,31.67-107.62,64.42-206.49,74.18-51.43,5.08-96.59.64-134.23-13.19-20.97-7.72-39.62-18.31-55.72-31.63v-65.12c3.55,5.68,7.76,11.49,12.76,17.18,15.38,17.5,35.36,30.73,59.36,39.32,31.17,11.15,69.38,14.59,113.56,10.23,89.19-8.81,137.4-37.68,188.45-68.24C439.88,36.96,507.87-3.75,659.16.28c61.73,1.64,110.54,11.85,149.21,31.23,34.69,17.38,56.59,39.6,75.91,59.19,18.06,18.32,33.66,34.15,57.2,44.27,27.18,11.69,62.41,14.74,110.88,9.6,59.86-6.35,142.41-20.84,195.73-53.82,2.84-1.76,5.48-3.5,7.91-5.19Z"></path>
								</svg>
							</div>
						</>
					</Main>
					<Footer/>
				</>
			):(
				<Loading/>
			)}
		</>
	);
}
