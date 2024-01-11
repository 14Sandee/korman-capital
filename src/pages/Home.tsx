import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import HeroImage from '../images/hero.png'
import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Box as="section" pt={{ lg: "10", base: "5" }} pb="12" overflow="hidden">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack spacing={0} alignItems={'center'}>
                        <Heading as="h2" size="2xl" mt="8" fontWeight={400} color={'primary.500'}>Invest in the
                            <Text as='em' color={'secondary.500'} fontWeight={500}> India opportunity</Text>
                        </Heading>
                        <Image mt={-10} src={HeroImage} alt="hero image" />
                    </Stack>
                </Box>
            </Box>
        </motion.div>

    )
}
