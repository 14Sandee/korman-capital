import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BreadCrumb } from '../components/layout/BreadCrumb'

export const Contact = () => {
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
                    { name: 'Contact', url: '/contact', isCurrent: true },
                ]}>
            </BreadCrumb>
            <Box as="section" pb="20" overflow="hidden">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Heading as='em' fontSize={'3xl'} color={'secondary.500'}>Contact</Heading>
                </Box>
            </Box>
        </motion.div>
    )
}
