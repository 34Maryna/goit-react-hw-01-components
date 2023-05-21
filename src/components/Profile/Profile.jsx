import PropTypes from 'prop-types';
import { Container,
  Description,
  UserImg,
  UserName,
  Tag,
  Stats,
  StatsItem,
  Quantity } from './Profile.styled';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    followers,
    views,
    likes,
}) => {
    return (
   <Container>
     <Description>
      <UserImg>
       <img
         src={avatar} 
         alt={username} width="50"
       />
       </UserImg>
       <UserName>{username}</UserName>
       <Tag>@{tag}</Tag>
       <p>{location}</p>
     </Description>
   <Stats>
       <StatsItem>
         <span>Followers</span>
         <Quantity>{followers}</Quantity>
       </StatsItem>
       <StatsItem>
         <span>Views</span>
         <Quantity>{views}</Quantity>
       </StatsItem>
       <StatsItem>
         <span>Likes</span>
         <Quantity>{likes}</Quantity>
       </StatsItem>
     </Stats>
   </Container>
   );
   };

   Profile.propTypes = {
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   followers: PropTypes.number.isRequired,
   views: PropTypes.number.isRequired,
   likes: PropTypes.number.isRequired,
   };

   export default Profile;