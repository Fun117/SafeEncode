import { _locales_en, _locales_ja } from "../../public/_locales/message";
import { SafeEncode } from "./main";

export function GetUserLanguage() {
    if (typeof window !== 'undefined') {
        const userLanguage = navigator.language.split('-')[0];
        return userLanguage;
    }
    return 'error';
}

export function _locales(text: string) {
    if(typeof window !== 'undefined') {
        const res = GetUserLanguage() === 'ja'? _locales_ja[text] : _locales_en[text];
        if(res){
            return res || "";
        }
        SafeEncode.console.error(`_locales: ${text} not found`);
    }
    return "";
}
