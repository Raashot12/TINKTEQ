import { Button, Flex, Grid, Image, Text } from '@mantine/core';
import { IconArrowForward } from '@tabler/icons';
import React from 'react';
import { useRouter } from 'next/router';
import AOSInit from '../Shared/AOSInit';

const HeroSection = () => {
  const router = useRouter();
  const handleOnboardingRoute = () => {
    router.push('/onboarding');
  };
  AOSInit({
    disable: false,
  });
  return (
    <Grid
      sx={{ alignItems: 'center' }}
      gutter={40}
      mt={{ base: 0, lg: 50 }}
      py={{ base: 20, sm: 30, md: 15 }}
    >
      <Grid.Col md={6}>
        <Flex align={'center'}>
          <div
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            <Text
              fw={700}
              fz={{ base: 35, sm: 40, md: 50, lg: 65 }}
              lh={'1.2'}
              color="#93278F"
              mb={{ base: 30, sm: 40 }}
            >
              Hassle-Free Cargo<br></br>Booking,Anytime, Anywhere!
            </Text>
            <Text sx={{ base: 14, sm: 16 }}>
              Easily schedule your cargo shipments with our seamless multi-step
              booking process. Get real-time pricing updates, secure your
              shipment in minutes, and enjoy a smooth, stress-free experience.
            </Text>
            <Button
              mah={38}
              sx={{ backgroundColor: '#93278F', borderRadius: 12 }}
              mt={30}
              rightIcon={<IconArrowForward />}
              onClick={handleOnboardingRoute}
            >
              Click to Book
            </Button>
          </div>
        </Flex>
      </Grid.Col>
      <Grid.Col md={6}>
        <Image
          src={
            'https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="hero section image"
          sx={{
            img: {
              borderRadius: 10,
              maxWidth: '584px',
              maxHeight: '607px',
              margin: '0 auto',
            },
          }}
        />
      </Grid.Col>
    </Grid>
  );
};

export default HeroSection;
