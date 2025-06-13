import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

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
		],
	},
	{
		title: 'Services1',
		links: [
			{ name: 'Offshore Development', href: '#' },
			{ name: 'Software Outsourcing', href: '#' },
			{ name: 'OTT Development', href: '#' },
			{ name: 'Chat App Development', href: '#' },
			{ name: 'Hire Remote Developers', href: '#' },
			{ name: 'AI Software Development', href: '#' },
			{ name: 'IoT & Connected Vehicles', href: '#' },
		],
	},
	{
		title: 'Technologies',
		links: [
			{ name: 'Flutter', href: '#' },
			{ name: 'React Native', href: '#' },
			{ name: 'React.js', href: '#' },
			{ name: 'Angular.js', href: '#' },
			{ name: 'Python', href: '#' },
			{ name: 'Node.js', href: '#' },
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

const FooterLinkColumn = ({
	title,
	links,
}: {
	title: string
	links: { name: string; href: string }[]
}) => (
	<div>
		<h3 className='font-bold text-white text-[23px] uppercase tracking-wider mb-4'>
			{title}
		</h3>
		<ul className='space-y-3'>
			{links.map((link) => (
				<li key={link.name}>
					<Link
						href={link.href}
						className='text-gray-300 hover:text-white transition-colors'>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	</div>
)

const Footer = () => {
	return (
		<footer className='bg-[#01403D] text-gray-300'>
			<div className='container mx-auto '>				
				<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 py-12 px-6'>
					<div className='sm:col-span-2 lg:col-span-2 pr-8'>
						<h3 className='font-bold text-white text-[26px] uppercase tracking-wider mb-4'>
							About Contus Tech
						</h3>
						<p className='text-[16px] leading-relaxed'>
							CONTUS Tech is a turnkey partner for product development, design,
							and strategy. As a full-stack software product design &
							development company, We engineer high-performance tech products
							developed for rapid market launch.
						</p>
						<div className='mt-8'>
							<h4 className='font-bold text-[34px] text-white'>
								Want To Build Next-Gen Digital Solutions?
							</h4>
							<p className='mt-1'>
								Let's create something extraordinary together!
							</p>
							<Button
								asChild
								size="xl"
								className='mt-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg'>
								<Link href='/contact-sales' className=''>Contact Sales</Link>
							</Button>
						</div>
                    </div>
                                        
                    {footerSections.map((section) => (
                        <FooterLinkColumn
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
				</section>
				
				<section className='bg-[#003b38] mt-16 py-4 px-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center'>
					<p className='text-sm text-gray-400 text-center sm:text-left mb-4 sm:mb-0'>
						© Copyrights {new Date().getFullYear()} by CONTUS TECH.
					</p>
					<Image
						src='/assets/contus_logo.png'
						alt='Contus Logo'
						width={80}
						height={40}
						className='mb-4 sm:mb-0'
					/>
				</section>
			</div>
		</footer>
	)
}

export default Footer
