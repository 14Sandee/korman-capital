import { Box, Button, Flex, HStack, VisuallyHidden, useColorModeValue, Link as ChakraLink, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { HamburgerMenu, SidebarMenu } from './layout/HamburgerMenu'

export const Navbar = () => {
    // const [active, setActive] = useState(false)
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box as="header" bg={useColorModeValue('white', 'gray.800')} position="sticky" top="0" width="full" zIndex="999">
            {/* <AnnouncementBar /> */}
            <Box maxW="7xl" mx="auto" py={{ md: "8", base: "4" }} px={{ base: '6', md: '8' }}>
                <Flex as="nav" justify="space-between">
                    <HStack spacing="8">
                        <Box as={Link} to="/" rel="home">
                            <VisuallyHidden>Korman Capital</VisuallyHidden>
                            <Image src={Logo} alt="Korman Capital" w={'36'} />
                        </Box>
                        <HStack display={{ base: 'none', lg: 'flex' }} spacing="8">
                        </HStack>
                    </HStack>
                    <Flex align="center">
                        <HStack spacing="8" display={{ base: 'flex', md: 'flex' }}>
                            <Button colorScheme='secondary' size="md" textTransform={'uppercase'} rounded="md"
                                as={ChakraLink} href="" isExternal>
                                Invest with us
                            </Button>
                            <HamburgerMenu active={isOpen} setActive={onToggle} />
                        </HStack>
                    </Flex>
                </Flex>
                <SidebarMenu active={isOpen} />
            </Box>
        </Box>
    )
}
