import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import {FriendCard, FriendItem} from './FriendList.styled';

const FriendList = ({friends}) => {
  return (
 <FriendCard>
 {friends.map(friend => (
 <FriendItem key={friend.id}>
  <FriendListItem
  avatar={friend.avatar}
  name={friend.name}
  isOnline={friend.isOnline}
  />
 </FriendItem>
 ))}
</FriendCard>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  ),
};

export default FriendList;