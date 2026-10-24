import Panaroma from '@/ui/panaroma';
import Section from '@/ui/section';

import SectionHeading from '@/ui/section-heading';
import SectionLink from './section-link';
import Reveal from './reveal';
import DaySpend from './day-spend';
import Button from './button';

export default function About() {
	return (
		<Section id='about' className='flex min-h-screen items-center mt-0 sm:pt-12'>
			<div>
				{/* section heading */}
				<Reveal direction='left'>
					<SectionHeading className='justify-start' text='about' />
				</Reveal>

				{/* section main content */}
				<div className='grid grid-cols-2 items-center gap-x-20  lg:grid-cols-1'>
					<div className='text-[16px] text-secondary-500'>
						<Panaroma text='myself' />
						<Reveal direction='down'>
							<p>
								Getting straight to the point, I&apos;m a front-end developer
								working with React, Next.js, and TypeScript. At Trackier I
								shipped a client-approved admin access system that helped close
								deals with ICICI Bank and SBI, built a cohort retention report,
								and migrated a production codebase to TypeScript.
							</p>
						</Reveal>
						<Reveal direction='down'>
							<p className='mt-2'>
								Before that, at Kaliper, I built an HRMS platform 0-to-1 as the
								sole front-end engineer, covering payroll, attendance, leave, and
								onboarding, and took it to production in about six months.
							</p>
						</Reveal>
						<Reveal direction='down'>
							<p className='mt-2'>
								I don&apos;t like to work with a black box, which has led me to
								learn the ins and outs of the web technologies mentioned above,
								and I plan to continue doing so. And the most important thing: I
								USE VIM; trust me, you should too.
							</p>
						</Reveal>
						<Button className='mt-8'>
							<a
								className='resume-button'
								href='/tejas_sharma_resume.pdf'
								target='_blank'
								rel='noopener noreferrer'>
								Download résumé
							</a>
						</Button>
					</div>

					<div className='relative flex justify-end lg:mt-16 lg:justify-center'>
						<DaySpend className='w-[80%] lg:w-[70%] sm:w-full' />
					</div>
				</div>

				<div className='mt-6 lg:mt-28 '>
					<SectionLink href='experience'>
						Next up <span className='text-primary-500'>experience</span>
					</SectionLink>
				</div>
			</div>
		</Section>
	);
}
