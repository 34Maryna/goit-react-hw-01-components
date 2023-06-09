import PropTypes from 'prop-types';
import { Table, TBody } from './TransactionHistory.styled';

const TransactionHistory = ({items}) => {
    return (
<Table>
<thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <TBody>
  {items.map((item) => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
 </TBody>
</Table>
);
};

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
   ),
};

export default TransactionHistory;