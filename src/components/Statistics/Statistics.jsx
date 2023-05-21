import PropTypes from 'prop-types';
import { Section,
  Title,
  BlockStats,
  StatItem,
  Percentage } from './Statistics.styled';
import { getRandomHexColor } from 'utils/randomcolor';

const Statistics = ({title, stats}) => {
    return (
<Section>
  {title && <Title>{title}</Title>}
  <BlockStats>
    {stats.map(stat => (
    <StatItem key={stat.id}
    style={{
      backgroundColor: `${getRandomHexColor()}`,
    }}>
      <span>{stat.label}</span>
      <Percentage>{stat.percentage}%</Percentage>
    </StatItem>
   ))}
  </BlockStats>
</Section>
);
};

Statistics.propTypes = {
title: PropTypes.string.isRequired,
stats: PropTypes.arrayOf(
    PropTypes.exact({
       id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
    })
),
};

export default Statistics;