import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

const Notifications: React.FC = () => {
  return (
    <HStack
      mx="8"
      pr="8"
      py="1"
      spacing="8"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
};

export default Notifications;
