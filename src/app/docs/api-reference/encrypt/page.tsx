'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faChevronRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/element/footer';
import Main from '@/components/element/main';
import { Code, UI_Code, formatJSON } from '@/components/element/ui_code';
import { FormEvent, useEffect, useState } from 'react';
import Loading from '@/components/element/loading';
import { _locales } from '@/components/_locales';
import { links_config } from '../../../../../public/assets/links';
import { DocsHeader, DocsSidebar } from '@/components/docs/sidebar';
import { DocsContent, DocsContentGroup, DocsContentNavButton, DocsContentNavGroup, DocsPageGroup } from '@/components/docs/docs';
import { HeadCustom_config } from '@/components/headCustom';

const sidebar = [
    { name: _locales('Welcome'), href: links_config['/docs/welcome'], now: false },
    { name: _locales('Getting Started'), href: links_config['/docs/getting-started'], now: false },
    { name: _locales('API Reference'), href: links_config['/docs/api-reference'], now: false, subItems: [
		{
			name: _locales('encrypt'), href: links_config['/docs/api-reference/encrypt'], now: true
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
		title:`${_locales('encrypt')} | SafeEncode`,
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
                                        <h1 className='font-bold text-5xl'>{_locales('Encrypt Endpoint')}</h1>
                                        <p>{_locales(`This endpoint is used to encrypt content using a provided key.`)}</p>
                                        <h1 className='font-bold text-3xl'>{_locales('Endpoint')}</h1>
										<UI_Code lang='bash' copy code={`GET /api/generation`}/>
										<h1 className='font-bold text-3xl'>{_locales('Parameters')}</h1>
                                        <p><Code>key</Code>{_locales('(required): The encryption key.')}</p>
										<p><Code>content</Code>{_locales('(required): The content to be encrypted.')}</p>
										<h1 className='font-bold text-3xl'>{_locales('Response')}</h1>
                                        <p><Code>content</Code>{_locales(': The encrypted content.')}</p>
										<h1 className='font-bold text-3xl'>{_locales('Errors')}</h1>
                                        <p>{_locales('400 Bad Request: If any of the required parameters are missing or invalid.')}</p>
										<h1 className='font-bold text-3xl'>{_locales('Example')}</h1>
                                        <p>{_locales('Request')}</p>
										<UI_Code lang='tsx' copy code={
`fetch('http://${links_config.SiteOrigin}/api/generation?key=<_key>&content=<_content>')
	.then(response => response.json())
	.then(data => {
		console.log(data.content);
		if (!data.error) {
			// ${_locales('Handle successful response here')}
		}
	})
	.catch(error => {
		console.error('${_locales('Error fetching data:')}', error);
	});`}/>
                                    </DocsContent>
                                    <DocsContentNavGroup>
                                        <DocsContentNavButton type='back' href={links_config['/docs/api-reference']} Label={_locales('API Reference')}/>
                                        <DocsContentNavButton type='next' href={links_config['/docs/api-reference/decrypt']} Label={_locales('decrypt')}/>
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
