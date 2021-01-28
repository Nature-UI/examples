import {Box,  Image, Badge} from '@nature-ui/core'
import {StarIcon} from '@nature-ui/icons'

function App() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div className="p-6">
      <Box className='max-w-sm border border-gray-200 rounded-lg overflow-hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box className='p-6'>
        <Box className='flex items-baseline'>
          <Badge className='rounded-full px-2' variant='solid' color='blue-500'>
            New
          </Badge>
          <Box className='text-gray-500 font-medium text-xs tracking-wide uppercase ml-2'>
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box className='mt-3 font-semibold leading-tight' as='h4'>
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' className='text-gray-600 text-sm'>
            / wk
          </Box>
        </Box>

        <Box className='flex mt-2 items-center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                className={
                  i < property.rating ? 'text-blue-500' : 'text-gray-300'
                }
              />
            ))}
          <Box className='text-gray-600 ml-2 text-sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
    </div>
  );
}


export default App