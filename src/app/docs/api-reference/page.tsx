'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faChevronRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/element/footer';
import Main from '@/components/element/main';
import { FormEvent, useEffect, useState } from 'react';
import Loading from '@/components/element/loading';
import { _locales } from '@/components/_locales';
import { links_config } from '../../../../public/assets/links';
import { DocsHeader, DocsSidebar } from '@/components/docs/sidebar';
import { DocsContent, DocsContentCard, DocsContentCardGroup, DocsContentGroup, DocsContentNavButton, DocsContentNavGroup, DocsPageGroup } from '@/components/docs/docs';
import { HeadCustom_config } from '@/components/headCustom';

const sidebar = [
    { name: _locales('Welcome'), href: links_config['/docs/welcome'], now: false },
    { name: _locales('Getting Started'), href: links_config['/docs/getting-started'], now: false },
    { name: _locales('API Reference'), href: links_config['/docs/api-reference'], now: true, subItems: [
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
		title:`${_locales('API Reference')} | SafeEncode`,
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
                                        <h1 className='font-bold text-5xl'>{_locales('API Reference')}</h1>
										<DocsContentCardGroup>
											<DocsContentCard href={links_config['/docs/api-reference/encrypt']} title={_locales('encrypt')} description="" />
											<DocsContentCard href={links_config['/docs/api-reference/decrypt']} title={_locales('decrypt')} description="" />
										</DocsContentCardGroup>
                                    </DocsContent>
                                    <DocsContentNavGroup>
                                        <DocsContentNavButton type='back' href={links_config['/docs/getting-started']} Label={_locales('Getting Started')}/>
                                        <DocsContentNavButton type='next' href={links_config['/docs/api-reference/encrypt']} Label={_locales('encrypt')}/>
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
