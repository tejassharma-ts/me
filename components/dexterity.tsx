'use client';
import { useRef, useState } from 'react';
import Section from '@/ui/section';
import SectionHeading from '@/ui/section-heading';
import Panaroma from '@/ui/panaroma';
import Image from 'next/image';
import SectionLink from './section-link';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Reveal from './reveal';
import Button from './button';
import SkillCard from './skill-card';
import useDeviceDetection from '@/hooks/useDeviceDetection';

const tabs = [
	{
		title: 'Languages',
		icons: [
			{ src: '/images/tech/languages/typescript.svg', alt: 'TypeScript' },
			{ src: '/images/tech/languages/js.svg', alt: 'JavaScript' },
			{ src: '/images/tech/languages/html5.svg', alt: 'HTML5' },
			{ src: '/images/tech/languages/css3.svg', alt: 'CSS3' },
			{ src: '/images/tech/languages/python.svg', alt: 'Python' },
			{ src: '/images/tech/languages/c++.svg', alt: 'C++' },
		],
	},
	{
		title: 'Frameworks',
		icons: [
			{ src: '/images/tech/web-dev/reactjs.svg', alt: 'React' },
			{ src: '/images/tech/web-dev/nextjs.svg', alt: 'Next.js' },
			{ src: '/images/tech/web-dev/redux.svg', alt: 'Redux' },
			{ src: '/images/tech/web-dev/tanstack-query.svg', alt: 'TanStack Query' },
			{ src: '/images/tech/web-dev/framer-motion.svg', alt: 'Framer Motion' },
			{ src: '/images/tech/testing/jest.svg', alt: 'Jest' },
		],
	},
	{
		title: 'Styling',
		icons: [
			{ src: '/images/tech/web-dev/tailwindcss.svg', alt: 'Tailwind CSS' },
			{ src: '/images/tech/styling/sass.svg', alt: 'Sass' },
			{ src: '/images/tech/styling/css-modules.svg', alt: 'CSS Modules' },
			{ src: '/images/tech/styling/radix-ui.svg', alt: 'Radix UI' },
			{ src: '/images/tech/styling/mui.svg', alt: 'MUI' },
			{ src: '/images/tech/styling/bootstrap.svg', alt: 'Bootstrap' },
		],
	},
];

export default function Dexterity() {
	const { isDesktopOrLaptop: isDesktop} = useDeviceDetection();

	const [currentTab, setCurrentTab] = useState(1);
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: '-200px', once: true });

	return (
		<>
			<Section id='dexterity'>
				<Reveal direction='right'>
					<SectionHeading text='dexterity' />
				</Reveal>
				<div className='grid grid-cols-2 gap-x-20 lg:grid-cols-1'>
					<div className='order-1 text-secondary-500 lg:order-none'>
						<Panaroma text='Development' />
						<Reveal direction='down'>
							<p>
								I create stunning and effective websites for contemporary
								businesses. A modern business needs a website that builds
								customer trust and supports your operations. I ensure your
								website meets those high standards.
							</p>
						</Reveal>
						<Panaroma text='Design' className='mt-10' />
						<Reveal direction='down'>
							<p>
								I excel in translating designs from Figma into responsive
								websites tailored for clients needs. Leveraging my expertise in
								React.js, and modern CSS frameworks like Tailwind CSS.
							</p>
						</Reveal>
					</div>

					<div>
						<div className='text-sm'>
							<div className='flex justify-between space-x-8 overflow-hidden whitespace-nowrap px-4 pb-4 pt-2 lg:pt-12'>
								{tabs.map(({ title }, idx) => {
									return (
										<TabTitle
											key={idx}
											onClick={setCurrentTab}
											activeTab={currentTab}
											title={title}
											tabIndex={idx + 1}
										/>
									);
								})}
							</div>
							<div className='relative mt-8'>
								<AnimatePresence mode='wait'>
									<motion.div
										key={currentTab}
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -5, opacity: 0 }}
										transition={{
											duration: 0.5,
											ease: [0.22, 1, 0.36, 1],
										}}
										className='absolute flex w-full justify-center'>
										<div className='grid grid-cols-3 gap-x-20 gap-y-8'>
											{tabs[currentTab - 1].icons.map((icon) => (
												<Image
													key={icon.alt}
													src={icon.src}
													alt={icon.alt}
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
											))}
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
				<div className='container relative mt-60 lg:max-w-sm [@media(max-width:1363px)]:p-0'>
					<Image
						src='/images/gist-arrow.svg'
						alt='gist-direction'
						width={180}
						height={140}
						className='absolute -top-[200px] right-[150px] lg:-right-[200px] lg:top-0 sm:hidden tiny:hidden'
					/>
					<motion.div
						ref={ref}
						className='grid grid-cols-3 gap-x-20 font-inter lg:grid-cols-1 lg:gap-x-0 lg:gap-y-20 [@media(max-width:1363px)]:gap-x-4'>
						<SkillCard
							imageSrc='/images/design.svg'
							heading='Designing'
							desc='Designing interfaces that are intuitive, efficient, and enjoyable to use.'
							animateUpBy={isInView && isDesktop ? -30 : 0}
						/>
						<SkillCard
							imageSrc='/images/code.svg'
							heading='Development'
							desc='Building fast, type-safe web applications with React, Next.js, and TypeScript.'
							animateUpBy={isInView && isDesktop ? -100 : 0}
						/>
						<SkillCard
							imageSrc='/images/landing-dev.svg'
							heading='Landing Page'
							desc='Crafting compelling landing pages that captivate users and drive conversions.'
							animateUpBy={isInView && isDesktop ? -60 : 0}
						/>
					</motion.div>
				</div>
			</Section>
			<div className='text-center'>
				<SectionLink href='projects'>
					Next up <span className='text-primary-500'>projects</span>
				</SectionLink>
			</div>
			<img
				src='/images/dexterity-wave.svg'
				className='absolute -z-10 w-full -translate-y-80 lg:hidden'
			/>
		</>
	);
}

function TabTitle({
	title,
	tabIndex,
	onClick,
	activeTab,
}: {
	title: string;
	tabIndex: number;
	onClick: (tabIndex: number) => void;
	activeTab: number;
}) {
	const isActive = tabIndex === activeTab;
	return (
		<div onClick={() => onClick(tabIndex)}>
			<Button
				variant='ghost'
				className={cn({
					'bg-secondary-700/30': isActive,
				})}>
				{title}
			</Button>
		</div>
	);
}
