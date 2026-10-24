import Panaroma from '@/ui/panaroma';
import Section from '@/ui/section';
import SectionHeading from '@/ui/section-heading';
import SectionLink from './section-link';
import Reveal from './reveal';

const roles = [
	{
		company: 'Trackier (AppTrove)',
		role: 'Front-end Developer',
		period: 'March 2025 – Present',
		location: 'On-site, Noida',
		highlights: [
			'Designed and shipped a client-approved access system for internal admin logins, with request logging and 48-hour lockouts on declined requests. A hard security requirement that helped close deals with ICICI Bank and SBI, now standard in new banking deals.',
			'Built a client-facing cohort retention report from scratch, with a cohort table, retention heatmap, and date filters, replacing manual data exports from the backend team.',
			'Authored MMP SDK integration docs that made client onboarding self-serve, removing routine integration calls for the Android team.',
			'Single-handedly migrated a production codebase from JavaScript to TypeScript over 4 months without disrupting ongoing feature work.',
			'Contributed 10+ reusable React components to a shared UI library used across Trackier, Affnook, and CSNook.',
		],
		stack: ['React', 'TypeScript', 'SCSS', 'ReactStrap'],
	},
	{
		company: 'Kaliper',
		role: 'React / Next.js Developer · Sole front-end engineer',
		period: 'Nov 2023 – March 2025',
		location: 'Remote',
		highlights: [
			'Built an HRMS platform 0-to-1 covering payroll, employee records, attendance, leave management, and onboarding, and took it to its first production release in ~6 months.',
			'Worked directly with the client, an HR professional, to translate complex salary-calculation rules into a clear payroll UI.',
			'Designed the TanStack Query caching strategy (tuned stale times, prefetching on navigation, request deduplication) so revisited pages load instantly from cache.',
		],
		stack: ['Next.js', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
	},
];

export default function Experience() {
	return (
		<Section id='experience'>
			<Reveal direction='right'>
				<SectionHeading text='experience' />
			</Reveal>

			<div className='relative border-l-2 border-secondary-100 pl-10 sm:pl-6'>
				{roles.map((item, idx) => (
					<div key={item.company} className={idx > 0 ? 'mt-20' : ''}>
						<span className='absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-primary-500 bg-white' />
						<Panaroma text={item.period} />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700 sm:text-4xl'>
								{item.company}
							</h2>
						</Reveal>
						<Reveal direction='down'>
							<p className='mt-2 text-[16px] text-secondary-500'>
								{item.role} · {item.location}
							</p>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							{item.stack.map((tech) => (
								<span
									key={tech}
									className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
									{tech}
								</span>
							))}
						</div>
						<ul className='mt-5 max-w-3xl list-disc space-y-2 pl-5 text-[16px] text-secondary-500'>
							{item.highlights.map((highlight) => (
								<li key={highlight}>
									<Reveal direction='down'>
										<span>{highlight}</span>
									</Reveal>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className='mt-16 text-center'>
				<SectionLink href='dexterity'>
					Next up <span className='text-primary-500'>dexterity</span>
				</SectionLink>
			</div>
		</Section>
	);
}
