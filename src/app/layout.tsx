import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Disable the automatic CSS injection

export const metadata: Metadata = {
	title: {
		template: '%s | SafeEncode',
		default: 'SafeEncode'
	},
	description: "SafeEncode is an application that provides secure encoding of data. This application encrypts strings or data, allowing for safe storage and transmission. Encrypted data is protected from unauthorized access and eavesdropping, ensuring confidentiality and privacy. SafeEncode serves as a reliable tool for users to handle data securely and safeguard sensitive information.",

	generator: "Next.js",
	metadataBase: new URL('https://safe-encode.vercel.app'),

	manifest: "/webmanifest.json",

	appleWebApp: { capable: true, title: "SafeEncode", statusBarStyle: "black-translucent" },
	verification: { "me": "https://github.com/Fun117" },
	publisher: "Vercel",
	creator: "Fun117",
	authors: [{ name: "Fun117", url: "https://github.com/Fun117" }],

	category: "SafeEncode",
	classification: "SafeEncode",
	keywords: "fun117,Encrypted,encrypts",

	applicationName: "SafeEncode",
	openGraph: {
		type: "website",
		url: "https://safe-encode.vercel.app/",
		title: "SafeEncode",
		description: "SafeEncode is a tool designed for encoding and decoding data with a focus on security and privacy. It aims to securely convert sensitive data, such as confidential information and personal data, into a safe format for storage and transmission. This tool can be used for various secure data processing tasks, including secure communication and storage in databases.",
		siteName: "SafeEncode",
		images: [{
			url: "/images/Send.png",
		}],
	},

	bookmarks: "https://safe-encode.vercel.app/"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${inter.className}`}>{children}</body>
		</html>
	);
}
