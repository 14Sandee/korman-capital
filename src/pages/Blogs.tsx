import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { BreadCrumb } from '../components/layout/BreadCrumb'

export const Blogs = () => {
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
                    { name: 'Blogs', url: '/blogs', isCurrent: true },
                ]}>
            </BreadCrumb>
            <Box as="section" pb="20" overflow="hidden">
                <Box maxW={{ base: 'xl', md: '7xl' }} minH={200} mx="auto" px={{ base: '6', md: '8' }}>
                    <Heading fontSize={'3xl'} color={'secondary.500'} fontFamily={'RecifeDisplay-Italic'} fontWeight={'semibold'}>Blogs</Heading>
                    <Text mt={20} fontSize={{ base: 16, md: 18 }} textAlign={'center'}>Coming shortly. Subscribe to mailing list</Text>
                </Box>
            </Box>
        </motion.div>
    )
}
