import { Box, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { BreadCrumb } from '../components/layout/BreadCrumb'

export const QuarterlyNewsletter = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <BreadCrumb
                pages={[
                    { name: 'Home', url: '/' },
                    { name: 'Quarterly Newsletter', url: '/quarterly-newsletter', isCurrent: true },
                ]}>
            </BreadCrumb>
            <Box as="section" pb="20" overflow="hidden">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack spacing={4} >
                        <Heading as='em' fontSize={'3xl'} color={'secondary.500'}>Quarterly Newsletter</Heading>
                        <Stack spacing={0} mt={8} rounded={20} overflow={'hidden'} borderWidth={3} borderColor={'secondary.500'}>
                            <HStack px={{ base: 4, md: 14 }} py={{ base: 4, md: 8 }} justifyContent={'space-between'} bg={'secondary.500'}>
                                <Text fontSize={{ base: 16, md: 18 }} color={'white'} textTransform={'uppercase'}>Quarter</Text>
                                <Text fontSize={{ base: 16, md: 18 }} color={'white'} textTransform={'uppercase'}>PDF Links</Text>
                            </HStack>
                            <HStack px={{ base: 4, md: 14 }} py={{ base: 4, md: 8 }} justifyContent={'space-between'} bg={'transparent'}>
                                <Text fontSize={{ base: 16, md: 18 }} >Quarterly Report – Feb 2024</Text>
                                <Link href="https://www.google.com" fontSize={{ base: 16, md: 18 }} variant={'link'} color={'secondary.500'}>Click Here</Link>
                            </HStack>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </motion.div>
    )
}
