interface SafeEncodeObject {
    console: {
        log: (text: string) => void;
        warn: (text: string) => void;
        error: (text: string) => void;
    };
}

interface SextensionsObject {
    name: string
}

let SafeEncode: SafeEncodeObject;
let extensions: SextensionsObject;

extensions = {
    name: "SafeEncode"
}

SafeEncode = {
    console: {
        log: function (text: string) {
            var styleArray = [
                "padding: 0.2rem",
                "padding-left: .5rem",
                "padding-right: .4rem",
                "background-color: #ff9f00",
                "border-radius: 0.75rem",
                "color: white",
                "border-top-right-radius: 0rem",
                "border-bottom-right-radius: 0rem",
                "font-family: Inter",
                "width: 2rem",
            ];
            console.log(`%c${extensions.name}`, styleArray.join(";"), text);
        },
        warn: function (text: string) {
            var styleArray = [
                "padding: 0.2rem",
                "padding-left: .5rem",
                "padding-right: .4rem",
                "background-color: yellow",
                "border-radius: 0.75rem",
                "color: black",
                "border-top-right-radius: 0rem",
                "border-bottom-right-radius: 0rem",
                "font-family: Inter",
                "width: 2rem",
            ];
            console.warn(`%c${extensions.name}`, styleArray.join(";"), text);
        },
        error: function (text: string) {
            var styleArray = [
                "padding: 0.2rem",
                "padding-left: .5rem",
                "padding-right: .4rem",
                "background-color: red",
                "border-radius: 0.75rem",
                "color: white",
                "border-top-right-radius: 0rem",
                "border-bottom-right-radius: 0rem",
                "font-family: Inter",
                "width: 2rem",
            ];
            console.error(`%c${extensions.name}`, styleArray.join(";"), text);
        },
    },
};

export { SafeEncode }