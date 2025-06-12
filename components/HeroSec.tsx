import Image from 'next/image'
import Link from 'next/link'

import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

// --- DATA ---
const features = [
	'Flexible Hiring Model',
	'Pay As You Use',
	'Ready To Work Team',
	'Faster Time To Market',
]

const HeroSec = () => {
	return (
		<section className='relative text-white overflow-hidden'>
			<div className='absolute inset-0 z-0'>
				<Image
					src='/assets/bannerBg.webp'
					alt='Abstract green hexagonal background'
					layout='fill'
					objectFit='cover'
					priority
				/>
				<div className='absolute inset-0 bg-brand-teal opacity-90'></div>
			</div>

			<div className='relative z-10 container mx-auto px-4 py-8 sm:py-32 text-center'>
				<h1 className='text-[28px] md:text-[38px] lg:text-6xl font-extrabold leading-tight'>
					Hire The World's Top OTT Developers
					<br />
					To Build Smarter & Launch Faster
				</h1>

				<p className='hidden md:block mt-6 max-w-2xl mx-auto text-lg text-gray-200'>
					Create, nurture, and grow your streaming service with CONTUS Tech OTT
					app development.
				</p>

				<ul className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-md mx-auto'>
					{features.map((feature) => (
						<li
							key={feature}
							className='flex items-center justify-center sm:justify-start'>
							<CheckCircle2 className='h-6 w-6 text-green-400 mr-3 flex-shrink-0' />
							<span className='font-medium'>{feature}</span>
						</li>
					))}
				</ul>

				<div className='mt-10'>
					<Button
						asChild
						className='bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 py-2 px-[28px] min-w-[200px] text-lg rounded-lg'>
						<Link href='/contact'>
							Let's Talk
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</Button>
				</div>

				<Image
					src='/assets/rewive.webp'
					alt='Customer Reviews'
					width={250}
					height={250}
					className='hidden md:block mt-12 mx-auto rounded-lg shadow-lg'
				/>
			</div>
		</section>
	)
}

export default HeroSec
