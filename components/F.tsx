'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../components/ui/accordion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'

// --- Custom SVG Icon Components ---
const IconFacebook: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg {...props} fill='rgb(47, 108, 239)' viewBox='0 0 24 24'>
		<path d='M 33.093 27.738 H 29.221 c -0.626 0 -0.821 -0.235 -0.821 -0.821 V 22.185 c 0 -0.626 0.235 -0.821 0.821 -0.821 h 3.872 V 17.922 A 8.687 8.687 0 0 1 34.149 13.5 a 6.489 6.489 0 0 1 3.481 -2.894 a 8.7 8.7 0 0 1 3.011 -0.508 h 3.833 c 0.548 0 0.782 0.235 0.782 0.782 v 4.458 c 0 0.548 -0.235 0.782 -0.782 0.782 c -1.056 0 -2.112 0 -3.168 0.039 a 1.412 1.412 0 0 0 -1.6 1.6 c -0.039 1.173 0 2.307 0 3.52 h 4.537 c 0.626 0 0.86 0.235 0.86 0.86 v 4.732 c 0 0.626 -0.2 0.821 -0.86 0.821 H 39.7 V 40.448 c 0 0.665 -0.2 0.9 -0.9 0.9 H 33.914 c -0.587 0 -0.821 -0.235 -0.821 -0.821 Z' />
	</svg>
)

const IconInstagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg {...props} fill='currentColor' viewBox='0 0 24 24'>
		<path d='M12 2C8.7 2 8.33 2.02 7.85 2.05c-1.89.12-3.23 1.45-3.35 3.34C4.48 5.86 4.5 6.22 4.5 7.5s-.02 1.64-.05 2.12c-.12 1.89-1.45 3.23-3.34 3.35-.48.03-.84.05-2.12.05s-1.64-.02-2.12-.05c-1.89-.12-3.23-1.45-3.35-3.34C2.02 9.14 2 8.78 2 7.5s.02-1.64.05-2.12c.12-1.89 1.45-3.23 3.34-3.35C5.86 4.48 6.22 4.5 7.5 4.5c3.3 0 3.67-.02 4.15-.05c1.89-.12 3.23-1.45 3.35-3.34C15.14 2.02 15.78 2 16.5 2h-4.5M12 4c-3.1 0-3.47.01-3.9.05-1.55.1-2.59 1.15-2.69 2.7C5.36 7.22 5.35 7.59 5.35 8.9c0 1.31.01 1.68.05 2.15.1 1.55 1.15 2.59 2.7 2.69.47.04.83.05 2.15.05s1.68-.01 2.15-.05c1.55-.1 2.59-1.15 2.69-2.7.04-.47.05-.83.05-2.15s-.01-1.68-.05-2.15c-.1-1.55-1.15-2.59-2.7-2.69-.47-.04-.83-.05-2.15-.05M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm6.5-7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z' />
	</svg>
)
const IconX: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg {...props} fill='currentColor' viewBox='0 0 24 24'>
		<path d='M18.9 1.15a1.53 1.53 0 0 1 2.6 1.35L20.15 6.4c-1.86 6.08-6.93 10.8-13.35 11.23a1.53 1.53 0 0 1-1.5-1.8c.28-1.5 1.1-3.34 2.2-4.14C6.54 11.1 5.4 9.1 4.3 7.8c-1.1-1.3-2.2-2.6-2.2-4.13A1.53 1.53 0 0 1 3.5.2c6.08 1.86 10.8 6.93 11.23 13.35l3.8-1.4a1.53 1.53 0 0 1 1.8-1.5c1.5-.28 3.34-1.1 4.14-2.2.6-.8 1.1-2.1 1.3-3.6z' />
	</svg>
)
const IconYouTube: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg {...props} fill='currentColor' viewBox='0 0 24 24'>
		<path d='M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44C3.32 5.67 2.65 6.33 2.42 7.19 2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.52 1.76 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86-.23 1.52-.9 1.75-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z' />
	</svg>
)
const IconLinkedIn: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg {...props} fill='currentColor' viewBox='0 0 24 24'>
		<path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 18H5.5V9H8.5v9zM7 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 18H15.5v-4.6c0-1.1-.02-2.5-1.5-2.5s-1.7.9-1.7 2.4V18H9.5V9h2.8v1.3h.04c.4-.7 1.4-1.4 2.8-1.4 3 0 3.5 2 3.5 4.5V18z' />
	</svg>
)

// --- Data for the footer links ---
const footerSections = [
	{
		title: 'Services',
		links: [
			{ name: 'Digital Transformation', href: '#' },
			{ name: 'Product Development', href: '#' },
			{ name: 'Full Stack Development', href: '#' },
			{ name: 'DevOps Engineering', href: '#' },
			{ name: 'SaaS Product Development', href: '#' },
			{ name: 'AI Agent Development', href: '#' },
			{ name: 'UI/UX Design', href: '#' },
			{ name: 'AI Software Development', href: '#' },
			{ name: 'Offshore Development', href: '#' },
			{ name: 'Software Outsourcing', href: '#' },
			{ name: 'OTT Development', href: '#' },
			{ name: 'Chat App Development', href: '#' },
			{ name: 'Hire Remote Developers', href: '#' },
		],
	},
	{
		title: 'Technologies',
		links: [
			{ name: 'Flutter', href: '#' },
			{ name: 'React Native', href: '#' },
			{ name: 'React.js', href: '#' },
			{ name: 'Angular.js', href: '#' },
		],
	},
	{
		title: 'Company',
		links: [
			{ name: 'Our Blog', href: '#' },
			{ name: 'Case Studies', href: '#' },
			{ name: 'Newsroom', href: '#' },
			{ name: "We're Hiring", href: '#' },
			{ name: 'Contact', href: '#' },
		],
	},
]
// Desktop has a different structure
const desktopLinkColumns = [
	{ title: 'Services', links: footerSections[0].links.slice(0, 7) },
	{ title: 'Services', links: footerSections[0].links.slice(7) },
	{ title: 'Technologies', links: footerSections[1].links },
	{ title: 'Company', links: footerSections[2].links },
]

const FooterLogo = () => (
	<div className='text-white'>
		<div className='flex items-center space-x-1'>
			<div className='h-1 w-6 bg-red-500 rounded-full'></div>
			<div className='h-1 w-6 bg-yellow-400 rounded-full'></div>
			<div className='h-1 w-6 bg-teal-400 rounded-full'></div>
		</div>
		<div className='font-bold leading-none'>
			<span className='text-2xl'>CONTUS</span>
			<span className='text-lg tracking-tighter'>TECH</span>
		</div>
	</div>
)

const AboutAndCta = () => (
	<div className='flex gap-x-8 relative lg:col-span-2'>
		<div className='flex-grow'>
			<h3 className='font-bold text-white uppercase tracking-wider mb-4'>
				About Contus Tech
			</h3>
			<p className='text-sm leading-relaxed'>
				CONTUS Tech is a turnkey partner for product development, design, and
				strategy. As a full-stack software product design & development company,
				We engineer high-performance tech products developed for rapid market
				launch.
			</p>
			<div>
				<h4 className='font-bold text-white text-lg'>
					Want To Build Next-Gen Digital Solutions?
				</h4>
				<p className='mt-1'>Let's create something extraordinary together!</p>
				<Button
					asChild
					className='mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6'>
					<Link href='/contact-sales'>Contact Sales</Link>
				</Button>
			</div>
		</div>
		<div className="hidden lg:block w-[2px] bg-slate-300/30 flex-shrink-0"></div>
	</div>
)

const F = () => {
	return (
		<footer className=' bg-[#003b38] text-gray-300'>
			<div className='container mx-auto px-4 pt-16 pb-8'>
				<div className='hidden lg:grid grid-cols-6 gap-8'>
					<AboutAndCta />
					{desktopLinkColumns.map((section, index) => (
						<div key={index}>
							<h3 className='font-bold text-white uppercase tracking-wider mb-4'>
								{section.title}
							</h3>
							<ul className='space-y-3'>
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className='text-gray-300 hover:text-white transition-colors text-sm'>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className='block lg:hidden'>
					<AboutAndCta />
					<Accordion type='single' collapsible className='w-full mt-8'>
						{footerSections.map((section) => (
							<AccordionItem
								key={section.title}
								value={section.title}
								className='border-b border-gray-700'>
								<AccordionTrigger className='py-4 text-white font-bold uppercase tracking-wider hover:no-underline'>
									<span>{section.title}</span>
									{/* <ChevronDown className='h-5 w-5 shrink-0 transition-transform duration-200' /> */}
								</AccordionTrigger>
								<AccordionContent className='pt-2 pb-4'>
									<ul className='space-y-3 pl-2'>
										{section.links.map((link) => (
											<li key={link.name}>
												<Link
													href={link.href}
													className='text-gray-300 hover:text-white transition-colors text-sm'>
													{link.name}
												</Link>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>

			<div className='bg-[#003b38]'>
				<div className='container mx-auto'>
					
					<section className='flex flex-col gap-4 py-8 lg:hidden'>					

						<div className='flex items-center justify-between gap-4 '>
							{/* Left Line - visible on desktop px-4 pt-16 pb-8 */}
							<div className=' w-[200px] h-[3px] bg-gray-500 opacity-50'></div>

							<ul className='flex items-center gap-4'>
								<li>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										className='lucide lucide-instagram-icon lucide-instagram'>
										<rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
										<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
										<line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
									</svg>
								</li>
								<li>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										className='lucide lucide-facebook-icon lucide-facebook'>
										<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
									</svg>
								</li>
								<li>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										className='lucide lucide-youtube-icon lucide-youtube'>
										<path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
										<path d='m10 15 5-3-5-3z' />
									</svg>
								</li>
								<li>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										className='lucide lucide-x-icon lucide-x'>
										<path d='M18 6 6 18' />
										<path d='m6 6 12 12' />
									</svg>
								</li>
								<li>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										className='lucide lucide-linkedin-icon lucide-linkedin'>
										<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
										<rect width='4' height='12' x='2' y='9' />
										<circle cx='4' cy='4' r='2' />
									</svg>
								</li>
							</ul>

							{/* Right Line - visible on desktop */}
							<div className=' w-[200px] h-[3px] bg-gray-500 opacity-50'></div>
						</div>

						<div className='flex items-center justify-center'>
							<FooterLogo />
						</div>
					</section>
				</div>
			</div>
			{/* bottom footer */}
			<section className='bg-[#01403D]'>
				<div className='container mx-auto'>
					<div className="flex items-center justify-center lg:justify-between py-4 px-4">
						<p className='text-sm text-gray-400 text-center sm:text-left mb-4 sm:mb-0'>
							© Copyrights {new Date().getFullYear()} by CONTUS TECH.
						</p>
						
						<div className='hidden lg:flex items-center justify-center'>
							<FooterLogo />
						</div>
					</div>
				</div>
			</section>
		</footer>
	)
}

export default F
