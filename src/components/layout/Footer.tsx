import { Box, Heading, Image, Link as ChakraLink, Stack, Text, TextProps, useColorModeValue, Button, ButtonProps, HStack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { IoCallOutline, IoDocumentTextOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";

export const Footer = () => {
    return (
        <Box as="footer" role="contentinfo" overflow="hidden" mx="auto" bg="primary.500">
            <Box maxW="7xl" mx="auto" px={{ base: '4', md: '8' }} py="12">
                <Stack spacing="10">
                    <Stack w='full' justifyContent='space-between' direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
                        <Stack>
                            <Box flex="1">
                                <Box maxW={{ base: "80px", md: "150px" }}>
                                    <Image src={Logo} alt="Korman capital" />
                                </Box>
                            </Box>
                        </Stack>
                        <QuickLinks />
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '10', md: '20' }}>
                            <ContactLinks />
                            {/* <SubscribeForm width={{ base: 'full', md: 'sm' }} /> */}
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ base: 'column-reverse', md: 'row' }}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Copyright />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export const Copyright = (props: TextProps) => (
    <Text fontSize="sm" color={'gray.50'} {...props}>
        &copy; {new Date().getFullYear()} Korman Capital. All rights reserved.
    </Text>
)

export const QuickLinks = () => {
    return (
        <Stack spacing={{ base: '4', md: '8' }}>
            <Heading as="h3" color={useColorModeValue('gray.50', 'white')} fontSize="2xl" fontWeight="medium" letterSpacing="wider">
                Quick Links
            </Heading>
            <Stack spacing={4}>
                <Link to={'/about'}> <LinkItem>About Us</LinkItem></Link>
                <Link to={'/philosophy'}> <LinkItem>Philosophy</LinkItem></Link>
                <Link to={'/risk-management'}> <LinkItem>Risk Management</LinkItem></Link>
                <Link to={'/blogs'}> <LinkItem>Blogs</LinkItem></Link>
                <Link to={'/contact'}> <LinkItem>Contact Us</LinkItem></Link>
                <Link to={'/disclosure'}> <LinkItem>Disclosure</LinkItem></Link>
            </Stack>
            <Button variant={'outline'} leftIcon={<IoDocumentTextOutline size={20} />} _hover={{ bg: 'white', color: 'primary.500' }} color={'white'} size="md" fontWeight={400} textTransform={'uppercase'} rounded="md"
                as={ChakraLink} href="" isExternal>
                Investor Charter
            </Button>
        </Stack>
    )
}


export const LinkItem = (props: ButtonProps) => {
    return (
        <Button variant={'link'} color='white' textTransform={'uppercase'} fontSize={14} fontWeight={'regular'}  {...props}>{props.children}</Button>
    )
}

export const ContactLinks = () => (
    <Stack spacing={{ base: '4', md: '8' }}>
        <Heading as="h3" color={useColorModeValue('gray.50', 'white')} fontSize="2xl" fontWeight="medium" letterSpacing="wider">
            Contact Us
        </Heading>
        <Stack spacing={6}>
            <HStack spacing={3}>
                <Stack justifyContent={'center'} alignItems={'center'} boxSize={8} rounded={'full'} borderWidth={'1px'} borderColor='white'>
                    <IoCallOutline color={'white'} />
                </Stack>
                <ChakraLink fontWeight={400} color='white' href="tel:+919611877783">+91 9611877783</ChakraLink>
            </HStack>
            <HStack spacing={3}>
                <Stack justifyContent={'center'} alignItems={'center'} boxSize={8} rounded={'full'} borderWidth={'1px'} borderColor='white'>
                    <IoMailOutline color={'white'} />
                </Stack>
                <ChakraLink fontWeight={400} color='white' href="mailto:gaurav@kormancapital.com">gaurav@kormancapital.com</ChakraLink>
            </HStack>
            <HStack alignItems={'start'} spacing={3}>
                <Stack justifyContent={'center'} alignItems={'center'} boxSize={8} rounded={'full'} borderWidth={'1px'} borderColor='white'>
                    <IoLocationOutline color={'white'} />
                </Stack>
                <Text color='white'>Korman Capital Investment Advisors LLP,<br /> Wework Prestige Atlanta, 80 Feet Main Road,<br /> Koramangala 1A Block,<br /> Bangalore, Karnataka 560034</Text>
            </HStack>
        </Stack>
    </Stack >
)