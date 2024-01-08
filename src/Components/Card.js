import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Button,
  } from '@chakra-ui/react';
const MyCard = ({item}) => {
  return (
    // width: 271px;
// height: 484px;
    <div className='lg:w-[381px] lg:h-[554px] w-[271px] h-[484px] m-auto lg:ml-0'>
       <Card maxW='sm'>
  <CardBody>
    <Image
      src={item.img} 
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading className='text-center lg:text-start text-[#0E2368]'>
        <div className='lg:text-2xl text-lg'>{item.title}</div>
        
      </Heading>
      <Text className='text-start'>
        {item.description}
      </Text>
      <div className='text-center lg:m-0 m-auto'>
      <button className='border rounded-full flex lg:px-[2px]  lg:py-[2px] py-[1px]  w-[131px] h-[42px] justify-center items-center gap-3'>
        Read More
      </button></div>
    </Stack>
  </CardBody>
</Card> 
    </div>
  )
}

export default MyCard
