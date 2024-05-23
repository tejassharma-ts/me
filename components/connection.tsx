'use client';

import Image from 'next/image';
import Button from './button';
import Reveal from './reveal';
import { toast } from 'sonner';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { emailAddress } from '@/constants';

export default function Connection() {
	return (
		<div id='contact' className='relative w-full pt-[250px]'>
			<img
				src='/images/dexterity-wave.svg'
				className='absolute left-0 top-0 w-full'
			/>
			<div className='flex justify-center'>
				<div className='relative'>
					<h1 className="font-main text-7xl leading-[90px] text-secondary-700 text-center lg:text-[65px] sm:text-5xl">
						<Reveal direction='down'>
							<span className='block'>
								Thanks for stopping by!
							</span>
						</Reveal>
						<Reveal direction='down'>
							<span className='block'>
								Stay connected
							</span>
						</Reveal>
					</h1>

					<Image
						src='/images/smiley.svg'
						alt='thankyou'
						width={50}
						height={50}
						className='absolute -right-[50px] -top-[30px]'
					/>

					<Reveal direction='down' className='mt-8 text-center'>
						<CopyToClipboard
							text={emailAddress}
							onCopy={() => toast('Email copied')}>
							<Button>Get in Touch</Button>
						</CopyToClipboard>
					</Reveal>
				</div>
			</div>
		</div>
	);
}