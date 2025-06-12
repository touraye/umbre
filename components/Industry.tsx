import React from 'react'
import CustomTabs from './CustomTabs'
import { industryTabsData } from '@/data/tabsData'
import Heading from './Heading'

const Industry = () => {
	return (
		<section className='bg-white py-16 sm:py-24'>
			<div className='contain'>
				<div className='mb-12'>
					<Heading
						top='A Complete Live Streaming Solution'
						button='For Every Use Case Possible'
					/>
				</div>
				<CustomTabs tabsData={industryTabsData} />
			</div>
		</section>
	)
}

export default Industry
