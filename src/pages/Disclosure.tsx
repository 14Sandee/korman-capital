import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const Disclosure = () => {
    return (
        <Box as="section" pt={{ lg: "10", base: "5" }} pb="20" overflow="hidden">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Heading as='em' fontSize={'3xl'} color={'secondary.500'}>Disclosure</Heading>
            </Box>
        </Box>
    )
}
