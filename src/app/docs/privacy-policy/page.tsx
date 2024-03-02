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
import { DocsContent, DocsContentGroup, DocsContentNavButton, DocsContentNavGroup, DocsPageGroup } from '@/components/docs/docs';
import { HeadCustom_config } from '@/components/headCustom';

const sidebar = [
    { name: _locales('Welcome'), href: links_config['/docs/welcome'], now: false },
    { name: _locales('Getting Started'), href: links_config['/docs/getting-started'], now: false },
    { name: _locales('API Reference'), href: links_config['/docs/api-reference'], now: false, subItems: [
		{
			name: _locales('encrypt'), href: links_config['/docs/api-reference/encrypt'], now: false
		},
		{
			name: _locales('decrypt'), href: links_config['/docs/api-reference/decrypt'], now: false
		}
	]},
    { name: _locales('Privacy Policy'), href: links_config['/docs/privacy-policy'], now: true },
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
		title:`${_locales('Privacy Policy')} | ${links_config.SiteTitle}`,
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
                                        <h1 className='font-bold text-5xl'>{_locales('Privacy Policy')}</h1>
                                        <p>{_locales(`This page provides information about the data collection and handling practices of this service.`)}</p>
                                        <h1 className='font-bold text-3xl'>{_locales('Operator Information')}</h1>
                                        <p>{_locales('This feature is operated and developed by an individual (Fun117).')}</p>
										<h1 className='font-bold text-3xl'>{_locales('Information Collected')}</h1>
                                        <p>{_locales('When using this service, information is collected only when making API requests. The collected information is used to track the usage frequency of the API. However, individual details such as URLs or their content are not collected.')}</p>
										<h1 className='font-bold text-3xl'>{_locales('Contact Information')}</h1>
                                        <p>{_locales('If you have any questions or concerns, please feel free to contact us at the following email address:')}</p>
										<div>
											<li>{_locales('Operator Name: Fun117')}</li>
										</div>
										<h1 className='font-bold text-3xl'>{_locales('Notification of Changes')}</h1>
                                        <p>{_locales('This privacy policy may be updated periodically. Any changes will be notified on this page. Please check back regularly for updates.')}</p>
                                    </DocsContent>
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
