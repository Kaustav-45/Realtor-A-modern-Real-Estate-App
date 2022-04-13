import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text,Badge } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import StarIcon from '@material-ui/icons/Star'

const Property =({property:{title,agency,beds,reviewCount,externalID,isVerified,coverPhoto,rating,price,rooms,baths,area,rentFrequency}})=>(
    <a href={`/property/${externalID}`} passHref>
     <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
      <Box>
        <Image src={coverPhoto.url } width={400} height={260} />
      </Box>
      <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
        
          <Flex alignItems='center'>
          <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='grey'>
            New
          </Badge>
          </Box>
            <Box paddingLeft='10' paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
                <StarIcon
                key={i}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {reviewCount} reviews
          </Box>
        </Box>
        <Text fontSize='lg'>
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
    </a>
)

export default Property