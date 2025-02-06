/* eslint-disable jsx-a11y/alt-text */
import { Text, Button, Container, Flex } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import { IconSend } from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';
import HeroSection from 'components/HeroSection';
import { useRouter } from 'next/router';
import Logo from '../../public/images/logo.svg';

export default function Home() {
  const router = useRouter();
  const handleOnboardingRoute = () => {
    router.push('/onboarding');
  };
  return (
    <Container size="xl">
      <Head>
        <title>Julieth AI</title>
        <meta name="description" content="Juliet AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex py={20} align={'center'} justify={'space-between'}>
        <Text fw={600} fz={30}>
          TINKTEQ
        </Text>

        <Button
          rightIcon={<IconSend size={16} />}
          sx={{ background: '#93278F', fontSize: 14 }}
          mah={38}
          onClick={handleOnboardingRoute}
        >
          Book
        </Button>
      </Flex>
      <HeroSection />
    </Container>
  );
}
