import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCloud, faCopy } from '@fortawesome/free-solid-svg-icons';
import { TextCopyToClipboard } from '../copy';

export const UI_Code = ({ code, lang, copy, pre_css, code_css }: { code: string, lang: string, copy?: boolean, pre_css?: string, code_css?: string }) => {

    const element_pre_css = pre_css ? pre_css : 'bg-zinc-800 text-white text-left w-full h-full p-2 rounded-lg overflow-scroll';
    const element_code_css = code_css ? code_css : '';

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        if(await TextCopyToClipboard(code)){
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // 2秒後に状態を元に戻す
        } else {
            alert('コードをコピーできませんでした！');
        }
    };

    // シンタックスハイライト用のスタイル
    const highlightSyntax = (text: string, language: string) => {
        switch(language) {
            case 'json':
                // JSON形式の文字列をHTMLに変換してシンタックスハイライトを適用
                return text.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
                        let cls = 'text-blue-300'; // 数値や真偽値などのデフォルトの色
                        if (/^"/.test(match)) {
                            if (/:$/.test(match)) {
                                cls = 'text-blue-300'; // キー名の色
                            } else {
                                cls = 'text-orange-300'; // 文字列の色
                            }
                        } else if (/true|false/.test(match)) {
                            cls = 'text-purple-400'; // 真偽値の色
                        } else if (/null/.test(match)) {
                            cls = 'text-red-400'; // nullの色
                        }
                        return '<span class="' + cls + '">' + match + '</span>';
                    });
            case 'html':
                return text.replace(/&lt;([a-z\/][^\s>]*)/g, '<span class="text-orange-400">&lt;$1</span>');
            case 'css':
                return text.replace(/([.#][\w-]+)(?=[^\{]*\{)/g, '<span class="text-blue-400">$1</span>');
            case 'javascript':
                return text.replace(/(\b(fetch|then|catch|json|console|if)\b)/g, '<span class="text-purple-400">$1</span>')
                            .replace(/(\berror\b)/g, '<span class="text-green-400">$1</span>')
                            .replace(/('[^']*')/g, '<span class="text-orange-400">$1</span>');
            case 'typescript':
            case 'tsx':
                return text.replace(/(\b(export|default|async|await|function|var|let|const|fetch|then|catch|json|console|if)\b)/g, '<span class="text-purple-400">$1</span>')
                        .replace(/(\berror\b)/g, '<span class="text-green-400">$1</span>')
                        .replace(/('[^']*')/g, '<span class="text-orange-400">$1</span>');
            default:
                return text;
        }
    };
    
    return (
        <>
            <div className='group relative w-full h-full overflow-scroll'>
                <pre className={element_pre_css}>
                    <code className={element_code_css} dangerouslySetInnerHTML={{ __html: highlightSyntax(code, lang) }}></code>
                </pre>
                <div className='absolute top-1 right-1 bg-none text-neutral-500 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300'>
                    {copy && (
                        <button onClick={handleCopy} title='copy' className={`${isCopied ? 'cursor-not-allowed pointer-events-none' : ''} group bg-zinc-900/80 hover:text-neutral-400 border-neutral-600 hover:border-neutral-500 border-[1px] py-1 px-2 rounded-md transition ease-in-out duration-300`}>
                            <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} className={`${isCopied ? `text-green-500 hover:text-green-500` : ''} scale-100 group-active:scale-75 ease-in-out duration-300`}/>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export function formatJSON(jsonString: string) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return JSON.stringify(jsonObject, null, 2); // 2はインデントのスペース数です。必要に応じて調整してください。
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return 'Error parsing JSON';
    }
}

type CodeProps = {
    children?: React.ReactNode;
};
export const Code: React.FC<CodeProps> = ({ children }) => {
    return (
        <code className=' border-neutral-300 border-[1px] bg-neutral-100 w-full h-full overflow-scroll break-all px-1 py-[2px] mx-1 rounded-md'>{children}</code>
    )
};