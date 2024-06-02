import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import '../styles/global.css';
import "../styles/sooner.css";

// Main heading font
const fontMain = localFont({
	src: '../assets/AbrilFatface-Regular.ttf',
	display: 'swap',
	variable: '--font-main',
});

// Secondary font
const inter = localFont({
	src: '../assets/Inter-VariableFont_slnt,wght.ttf',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'tejas.dev',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${fontMain.variable} ${inter.variable}`}>
			<body>
                {/* :where([data-sonner-toast]) :where([data-title]) */}
				<Toaster
					className='font-inter flex justify-end' 
					position='bottom-right'
                    theme='dark'
                    duration={1000}
					toastOptions={{ className: 'bg-secondary-700 text-secondary-50 !sm:w-96 text-[15px] border-none rounded-lg !h-10 '  }}
				/>
				{children}
			</body>
		</html>
	);
}
