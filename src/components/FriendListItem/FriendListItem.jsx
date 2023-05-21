import PropTypes from 'prop-types';
import { Status, FriendImg, FriendName } from './FriendListItem.styled';

const FriendListItem = ({avatar, name, isOnline}) => {
return (
<>
  <Status>{isOnline}</Status>
  <FriendImg src={avatar} alt={name} width="48" />
  <FriendName>{name}</FriendName>
</>
);
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;