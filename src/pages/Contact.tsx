import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Heading, Input, InputGroup, SimpleGrid, Stack, chakra, Link as ChakraLink, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BreadCrumb } from '../components/layout/BreadCrumb'
import { useForm } from 'react-hook-form'
import { isEmailValid, isPhoneNumberValid, isValidName } from '../utils/Validations'
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5'

interface ContactForm {
    name: string;
    email: string;
    phoneNumber: string,
    termsAndConditions: boolean
}

export const Contact = () => {
    const methods = useForm<ContactForm>({ defaultValues: { termsAndConditions: true } });
    const { register, handleSubmit, formState: { errors } } = methods;
    const [loading, setLoading] = useState(false);

    const handleLogin = (data: ContactForm) => {
        setLoading(true);
        console.log(data)
        setLoading(false);
    };
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
                    <Stack spacing={8} >
                        <Heading fontSize={'3xl'} color={'secondary.500'} fontFamily={'RecifeDisplay-Italic'} fontWeight={'semibold'}>Invest with us</Heading>
                        <SimpleGrid columns={[1, 2]} spacing={12} >
                            <chakra.form onSubmit={handleSubmit(handleLogin)}>
                                <Stack spacing="6">
                                    <FormControl id="name" isRequired isDisabled={loading} isInvalid={!!errors?.name}>
                                        <FormLabel htmlFor="name">Name</FormLabel>
                                        <Input {...register("name", { required: "Name is required.", maxLength: { value: 40, message: "Name should be less than 40 characters." }, validate: (name) => isValidName(name) || "Please enter a valid name." })} type="text" name="name" required placeholder="Your name" focusBorderColor='black.100' rounded='md' />
                                        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        id="email"
                                        isInvalid={!!errors?.email}
                                        isRequired
                                        isDisabled={loading}
                                    >
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Input {...register("email", { validate: (email) => isEmailValid(email) || "Please enter a valid email address.", required: "Email is required." })} name="email" type="email" autoComplete="email" required placeholder="e.g. example@gmail.com" tabIndex={0} focusBorderColor='black.100' rounded='md' />
                                        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl id="phoneNumber" isRequired isInvalid={!!errors?.phoneNumber}>
                                        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                                        <InputGroup>
                                            <Input {...register("phoneNumber", { required: "Phone number is required.", validate: (phoneNumber) => isPhoneNumberValid(phoneNumber) || "Please enter a valid phone number." })} placeholder="9876543210" required focusBorderColor='black.100' rounded='md' />
                                        </InputGroup>
                                        <FormErrorMessage>{errors?.phoneNumber?.message}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl>
                                        <FormHelperText lineHeight={'md'}>
                                            <Checkbox {...register("termsAndConditions", { required: "Please accept terms and conditions." })} name="termsAndConditions" mr={2} colorScheme='secondary' isRequired />
                                            I authorise Korman Capital Investment Advisors LLP and its representatives to call / email / SMS me with reference to my application. All investor have an option to invest in the above product / investment approach directly, without intermediation of persons engaged in distribution services.
                                        </FormHelperText>
                                    </FormControl>
                                    <Button type="submit" colorScheme="secondary" isDisabled={!!errors.email || !!errors.name} isLoading={loading}>
                                        Submit
                                    </Button>
                                </Stack>
                            </chakra.form>
                            <Stack spacing={{ base: '4', md: '8' }} px={{ base: 0, md: 8 }} py={{ base: 4, md: 8 }}>
                                <Stack spacing={{ base: '4', md: '8' }}>
                                    <HStack spacing={4}>
                                        <Stack justifyContent={'center'} alignItems={'center'} boxSize={10} rounded={'full'} borderWidth={'1px'} borderColor='primary.500'>
                                            <IoCallOutline size={20} color={'primary.500'} />
                                        </Stack>
                                        <ChakraLink fontWeight={400} color='primary.500' href="tel:+919611877783">+91 9611877783</ChakraLink>
                                    </HStack>
                                    <HStack spacing={4}>
                                        <Stack justifyContent={'center'} alignItems={'center'} boxSize={10} rounded={'full'} borderWidth={'1px'} borderColor='primary.500'>
                                            <IoMailOutline size={20} color={'primary.500'} />
                                        </Stack>
                                        <ChakraLink fontWeight={400} color='primary.500' href="mailto:gaurav@kormancapital.com">gaurav@kormancapital.com</ChakraLink>
                                    </HStack>
                                    <HStack alignItems={'start'} spacing={4}>
                                        <Stack justifyContent={'center'} alignItems={'center'} boxSize={10} rounded={'full'} borderWidth={'1px'} borderColor='primary.500'>
                                            <IoLocationOutline size={20} color={'primary.500'} />
                                        </Stack>
                                        <Text lineHeight={'md'} color='primary.500'>Korman Capital Investment Advisors LLP,<br /> Wework Prestige Atlanta, 80 Feet Main Road,<br /> Koramangala 1A Block,<br /> Bangalore, Karnataka 560034</Text>
                                    </HStack>
                                </Stack>
                            </Stack >
                        </SimpleGrid>
                    </Stack>
                </Box>
            </Box>
        </motion.div >
    )
}


