'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faChevronRight, faCircleExclamation, faCloud, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/element/footer';
import Main from '@/components/element/main';
import { FormEvent, useEffect, useState } from 'react';
import Loading from '@/components/element/loading';
import { _locales } from '@/components/_locales';
import { links_config } from '../../../../public/assets/links';
import { DocsHeader, DocsSidebar } from '@/components/docs/sidebar';
import { DocsContent, DocsContentGroup, DocsContentNavButton, DocsContentNavGroup, DocsPageGroup } from '@/components/docs/docs';
import { HeadCustom_config } from '@/components/headCustom';

const sidebar = [
    { name: _locales('Welcome'), href: links_config['/docs/welcome'], now: false },
    { name: _locales('Getting Started'), href: links_config['/docs/getting-started'], now: true },
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
		title:`${_locales('Getting Started')} | SafeEncode`,
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
                                        <h1 className='font-bold text-5xl'>{_locales('Getting Started')}</h1>
                                        <p>{_locales(`Learn how to get started with SafeEncode!`)}</p>
										<h1 className='font-bold text-3xl'><FontAwesomeIcon icon={faTriangleExclamation} className='mr-1'/>{_locales('Note')}</h1>
                                        <p>{_locales(`To decrypt encrypted content, you must use the same key that was used for encryption. Attempting decryption with a different key may result in the content not being decrypted correctly. Please ensure you use the correct key for decryption.`)}</p>
                                    </DocsContent>
                                    <DocsContentNavGroup>
										<DocsContentNavButton type='back' href={links_config['/docs']} Label={_locales('Welcome')}/>
										<DocsContentNavButton type='next' href={links_config['/docs/api-reference']} Label={_locales('API Reference')}/>
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
