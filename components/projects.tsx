'use client';
import Panaroma from '@/ui/panaroma';
import Section from '@/ui/section';
import SectionHeading from '@/ui/section-heading';
import Image from 'next/image';
import Button from './button';
import Reveal from './reveal';

export default function Projects() {
	return (
		<Section id='projects'>
			<div className='relative'>
				<Reveal direction='left'>
					<SectionHeading className='justify-start' text='projects' />
				</Reveal>
				<Image
					src='/images/direction.svg'
					alt='direction'
					width={150}
					height={150}
					className='absolute left-[280px] top-[22px] -scale-x-100 tiny:hidden'
				/>
			</div>

			<div className='grid gap-y-10'>
				<div className='grid grid-cols-2 items-center lg:grid-cols-1'>
					<div>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Diamond Valley
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								React
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Zustand
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCSS
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Framer Motion
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Zod
							</span>
						</div>
						<div className='mt-5 text-[16px] text-secondary-500'>
							<p>
								A production e-commerce storefront for a fine jewellery brand,
								built freelance. Designed an S3 path convention keyed by
								jewellery, stone, and metal type, so product images resolve on the
								client when a shopper switches variants, with no API call per
								selection.
							</p>
							<p className='mt-2'>
								Built a filtering system that keeps Zustand state in sync with URL
								parameters, so every filtered product view can be shared as a link
								and survives a page refresh.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>
								<a href='https://diamondvalley.in' target='_blank'>
									Watch live
								</a>
							</Button>
						</div>
					</div>

					<div className='flex  justify-end lg:mt-16 lg:justify-center'>
						<div className='relative'>
							<Image
								src='/images/diamond-valley.png'
								alt='diamond-valley'
								width={350}
								height={350}
								quality={100}
								className='h-[350px] w-[350px] object-cover'
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute bottom-0 right-0 translate-x-[30px] translate-y-[25px] transition-transform duration-300 sm:hidden'
							/>
						</div>
					</div>
				</div>

				{/* Second project */}
				<div className='grid grid-cols-2 items-center pt-20 lg:grid-cols-1'>
					<div className='order-1 lg:order-none'>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Pastor &amp; Co
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								React
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCSS
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Zustand
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Radix UI
							</span>
						</div>
						<div className='mt-4 text-[16px] text-secondary-500'>
							<p>
								A luxury resale storefront, migrated from Shopify to a custom
								build. Built an admin panel with drag-and-drop media management to
								replace Shopify&apos;s admin, so the client could manage products
								and images in the workflow they already knew.
							</p>
							<p className='mt-2'>
								Added multi-currency pricing so international shoppers see prices
								in their own currency, plus URL-synced product filtering for
								shareable search results.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>
								<a href='https://pastorandco.com' target='_blank'>
									Watch live
								</a>
							</Button>
						</div>
					</div>

					<div className='flex pl-[25px] lg:mt-16 lg:justify-center'>
						<div className='relative'>
							<Image
								src='/images/pastor-and-co.png'
								alt='pastor-and-co'
								width={350}
								height={350}
								quality={100}
								className='h-[350px] w-[350px] object-cover'
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute -bottom-0 left-0 -scale-x-100 translate-y-[25px] -translate-x-[30px] transition-transform duration-300 sm:hidden'
							/>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-2 items-center pt-20 lg:grid-cols-1'>
					<div>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Cosmetologist Portfolio
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Gatsby
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCSS
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Framer Motion
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Contentful CMS
							</span>
						</div>
						<div className='mt-5 text-[16px] text-secondary-500'>
							<p>
								Efficiently fetched and rendered images using the headless
								Contentful CMS, implemented lazy loading for large images to
								optimize performance. 
							</p>
							<p className='mt-2'>
								One of the key challenges I faced was optimizing the loading and
								rendering of large images, especially on mobile devices, without
								compromising performance. To address this, I leveraged the
								powerful Contentful CMS.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>
								<a href='https://nainamakeover.vercel.app/' target='_blank'>
									Watch live
								</a>
							</Button>
							<Button variant='secondary'>
								<a
									href='https://github.com/tejassharma-ts/Client-Portfolio'
									target='_blank'>
									Get to code
								</a>
							</Button>
						</div>
					</div>

					<div className='flex  justify-end lg:mt-16 lg:justify-center'>
						<div className='relative'>
							<Image
								src='/images/client-portfolio.png'
								alt='client-portfolio'
								width={350}
								height={350}
								quality={100}
								className=''
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute bottom-0 right-0 translate-x-[30px] translate-y-[25px] transition-transform duration-300 sm:hidden'
							/>
						</div>
					</div>
				</div>
				{/* Blogging application */}
				<div className='grid grid-cols-2 items-center pt-20 lg:grid-cols-1'>
					<div className='order-1 lg:order-none'>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Blogging application
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								NextJs
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Framer motion
							</span>

							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCss
							</span>

							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Contentful CMS
							</span>
						</div>
						<div className='mt-4 text-[16px] text-secondary-500'>
							<p>
								The website integrates a blog section, allowing users to view
								and read blog posts. This feature adds value by providing
								relevant content and insights to visitors.
							</p>
							<p className='mt-2'>
								Website use dynamic content sourced from JSON files or a content
								management system (CMS). This approach allows for easier content
								updates and management.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>
								<a
									href='https://exampleportfoliowithblog.vercel.app'
									target='_blank'>
									Watch live
								</a>
							</Button>
						</div>
					</div>

					<div className='flex pl-[25px] lg:mt-16 lg:justify-center'>
						<div className='relative'>
							<Image
								src='/images/blog.png'
								alt='client-portfolio'
								width={350}
								height={350}
								quality={100}
								className=''
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute -bottom-0 left-0 -scale-x-100 translate-y-[25px] -translate-x-[30px] transition-transform duration-300 sm:hidden'
							/>
						</div>
					</div>
				</div>

			</div>
		</Section>
	);
}
