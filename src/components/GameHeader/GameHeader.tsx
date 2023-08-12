import React from 'react';
import {Box, HStack, Image, Text, View, VStack} from 'native-base';

const Health = () => (
  <Box
    width={'8px'}
    height={'8px'}
    backgroundColor="yellow.600"
    borderWidth={1}
    borderColor="yellow.800"
    borderRadius={2}
  />
);

const elonImageUrl =
  'https://image-prod.iol.co.za/16x9/800/SpaceX-founder-Elon-Musk-Picture-Reuters-Joe-Skipper?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/f06d89d5-c043-5a47-9037-909b8103f880&operation=CROP&offset=0x149&resize=3500x1968&webp=true';

const Profile = ({isLeft, imageUrl}: {isLeft?: boolean; imageUrl?: string}) => {
  return (
    <HStack
      p={2}
      flex={0.5}
      space={1}
      flexDirection={isLeft ? 'row' : 'row-reverse'}>
      <Image
        width={'35px'}
        height={'35px'}
        source={{
          uri: imageUrl,
        }}
        alt="Elon Musk"
      />
      <VStack flex={1}>
        <Box
          width="100%"
          height={'20px'}
          backgroundColor="green.600"
          borderWidth={1}
          borderColor="green.800"
          borderRadius={2}
        />
        <HStack
          space={1}
          pt={1}
          justifyContent="flex-end"
          flexDirection={isLeft ? 'row' : 'row-reverse'}>
          <Health />
          <Health />
          <Health />
          <Health />
        </HStack>
      </VStack>
    </HStack>
  );
};

export const GameHeader = () => {
  return (
    <HStack p={2}>
      <Profile isLeft={true} imageUrl={elonImageUrl} />
      <Profile imageUrl={elonImageUrl} />
    </HStack>
  );
};
