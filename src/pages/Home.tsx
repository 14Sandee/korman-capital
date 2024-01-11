import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import HeroImage from '../images/hero.png'

export const Home = () => {
    return (
        <Box as="section" pt={{ lg: "10", base: "5" }} pb="12" overflow="hidden">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Stack spacing={0} alignItems={'center'}>
                    <Heading as="h2" size="2xl" mt="8" fontWeight={400} color={'primary.500'}>Invest in the
                        <Text as='em' color={'secondary.500'} fontWeight={600}> India opportunity</Text>
                    </Heading>
                    <Image src={HeroImage} alt="hero image" />
                </Stack>
            </Box>
        </Box>
    )
}
