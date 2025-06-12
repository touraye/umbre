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

			<div className='relative z-10 container mx-auto px-4 py-12 text-center'>
				<h1 className='text-[22px] md:text-[30px] lg:text-[55px] font-bold leading-tight mb-10'>
					Hire The World's Top OTT <br /> Developers
					<br />
					To Build Smarter & Launch Faster
				</h1>

				<p className='hidden md:block mb-10 text-[19px] md:text-[24px] text-gray-200'>
					Create, nurture, and grow your streaming service with CONTUS Tech OTT
					app development.
				</p>

				<ul className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl mx-auto text-[24px] mb-10'>
					{features.map((feature) => (
						<li
							key={feature}
							className='flex items-center justify-center sm:justify-start'>
							<CheckCircle2 className='h-6 w-6 text-green-400 mr-3 flex-shrink-0' />
							<span className='font-medium'>{feature}</span>
						</li>
					))}
				</ul>

				<div className='mb-10'>
					<Button
						asChild
						className='bg-orange-500 hover:bg-orange-600 text-white text-[36px] font-bold  rounded-lg  inline-flex gap-4 justify-center transition-colors duration-300 py-8 '>
						<Link href='/contact'>
							Let's Talk
							<ArrowRight className='ml-4 w-[32px] h-16 ' />
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
