import React from 'react';
import { Badge, Box } from '@nature-ui/layout';
import { Image } from '@nature-ui/image';
import { IconButton } from '@nature-ui/button';
import { Hi } from '@nature-ui/icons';

const Index = () => {
	return (
		<div className='relative p-4 shadow-xl rounded-2xl max-w-xs m-12'>
			<div className='relative'>
				<Image
					src='https://cutt.ly/2kr8ISb'
					alt='Two-storey mansion'
					className='rounded-2xl'
				/>
				<Badge
					variant='solid'
					color='green-400'
					className='absolute bottom-3 left-3'
				>
					<Hi.HiLightningBolt size='1.2em' className='mr-1 inline-block' />
					New
				</Badge>
				<span className='absolute top-3 right-3'>
					<IconButton aria-label='Hearth' icon={<Hi.HiHeart />} />
				</span>
			</div>
			<Box className='p-4 font-semibold'>
				<h3 className='text-xl text-purple-500'>$32,000/month</h3>
				<h3 className='text-lg mt-2'>Two-storey mansion</h3>
				<p className='font-normal text-sm opacity-50'>ave, Soborna, 25</p>
			</Box>
		</div>
	);
};

export default Index;
