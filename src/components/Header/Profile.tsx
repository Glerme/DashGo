import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const Profile: React.FC = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Guilherme Felipe</Text>
        <Text color="gray.300" fontSize="small">
          guiggff@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Guilherme" src="https://github.com/Glerme.png" />
    </Flex>
  );
};

export default Profile;
