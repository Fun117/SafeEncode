'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faChevronRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/element/footer';
import Main from '@/components/element/main';
import { FormEvent, useEffect, useState } from 'react';
import Loading from '@/components/element/loading';
import { _locales } from '@/components/_locales';
import { links_config } from '../../../public/assets/links';
import { DocsHeader, DocsSidebar } from '@/components/docs/sidebar';
import { DocsContent, DocsContentGroup, DocsContentNavButton, DocsContentNavGroup, DocsPageGroup } from '@/components/docs/docs';
import { HeadCustom_config } from '@/components/headCustom';

const sidebar = [
    { name: _locales('Welcome'), href: links_config['/docs/welcome'], now: true },
    { name: _locales('Getting Started'), href: links_config['/docs/getting-started'], now: false },
    { name: _locales('API Reference'), href: links_config['/docs/api-reference'], now: false, subItems: [
		{
			name: _locales('encrypt'), href: links_config['/docs/api-reference/encrypt'], now: false
		},
		{
			name: _locales('decrypt'), href: links_config['/docs/api-reference/decrypt'], now: false
		}
	]},
	{ name: _locales('Privacy Policy'), href: links_config['/docs/privacy-policy'], now: false },
];

export default function Page() {

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
		title:`${_locales('Welcome')} | SafeEncode`,
	};
	HeadCustom_config(Head_config);

	return (
		<>
			{isLangLoaded ? (
				<>
					<DocsHeader sidebar={sidebar} />
					<Main>
						<>
                            <DocsPageGroup>
                                <DocsSidebar sidebar={sidebar} />
                                <DocsContentGroup>
                                    <DocsContent>
                                        <h1 className='font-bold text-5xl'>{_locales('Welcome')}</h1>
                                        <p>{_locales(`SafeEncode is a tool designed for encoding and decoding data with a focus on security and privacy. It aims to securely convert sensitive data, such as confidential information and personal data, into a safe format for storage and transmission. This tool can be used for various secure data processing tasks, including secure communication and storage in databases.`)}</p>
                                        <h1 className='font-bold text-3xl'>{_locales('Contributing to the Docs')}</h1>
                                        <p>{_locales('Contributing to the documentation is simple and easy. To contribute to the documentation, please visit the official repository.')}</p>
                                    </DocsContent>
                                    <DocsContentNavGroup>
                                        <DocsContentNavButton type='next' href={links_config['/docs/getting-started']} Label={_locales('Getting Started')}/>
                                    </DocsContentNavGroup>
                                </DocsContentGroup>
                            </DocsPageGroup>
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
