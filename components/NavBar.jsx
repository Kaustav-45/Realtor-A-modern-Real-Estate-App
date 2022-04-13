import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { FcMenu, FcHome, FcAbout, FcSearch } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
const Links = ['Dashboard', 'Projects', 'Team'];



export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize='3xl' color='blue.500'>Realtor</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
               
                rounded={'full'}
                
                cursor={'pointer'}
               as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
                
              <MenuList>
                  <a href="/">
                <MenuItem icon={<FcHome/>}>Home</MenuItem>
                </a>
                <a href="/search">
                <MenuItem icon={<FcSearch/>}>Search</MenuItem>
                </a>
                <a href="/search?purpose=for-sale">
                <MenuItem icon={<FcAbout/>}>Buy Home</MenuItem>
                </a>
                <a href="/search?purpose=for-rent">
                <MenuItem icon={<FiKey/>}>Rent  Home</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}