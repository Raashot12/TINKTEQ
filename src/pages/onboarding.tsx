import { Box, Container, Flex, Text } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons';
import ProgressBar from 'components/Onboarding/ProgressBar';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from 'state/hooks';
import UserAccountInfo from 'components/Onboarding/UserAccountInfo';
import UserPrivacyInfo from 'components/Onboarding/UserPrivacyInfo';
import ReviewUserData from 'components/Onboarding/ReviewUserData';

const getProgress = (param: number) => {
  if (param === 1) return 33.33;
  if (param === 2) return 66.66;
  if (param === 3) return 100;
  return 0;
};
const OnboardingPage = () => {
  const pageStage = useAppSelector((state) => state.user.Stage);

  return (
    <div>
      <Head>
        <title>TINKTEQ</title>
      </Head>
      <Container size={'xl'}>
        <Flex justify={'space-between'} align={'center'}>
          <Flex py={20} columnGap={25} align={'center'}>
            <Link href={'/'}>
              <IconArrowBack />
            </Link>
            <Box component="article">
              <Text fz={18} fw={500} lh={'1.5'}>
                Welcome!
              </Text>
              <Text fz={18} fw={300}>
                Register to get started
              </Text>
            </Box>
          </Flex>
          <Text
            sx={{ fontSize: 25, fontWeight: 600, fontStyle: 'italic' }}
            color="#93278F"
          >
            TINKTEQ
          </Text>
        </Flex>

        <ProgressBar progressPercent={getProgress(pageStage)} />
        <Container size={'md'}>
          <Box component="section">
            {pageStage === 1 && (
              <div>
                <UserAccountInfo
                  pageTitle={'User Form:'}
                  submitButtonText={'Next'}
                  previousButton={false}
                />
              </div>
            )}
            {pageStage === 2 && (
              <div>
                <UserPrivacyInfo
                  pageTitle={'Privacy Form:'}
                  submitButtonText={'Next'}
                  previousButton={true}
                />
              </div>
            )}
            {pageStage === 3 && (
              <div>
                <ReviewUserData
                  pageTitle={'Review Form:'}
                  submitButtonText={'Submit'}
                  previousButton={true}
                />
              </div>
            )}
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default OnboardingPage;
