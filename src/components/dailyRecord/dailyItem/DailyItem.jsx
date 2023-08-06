import DailyItemModal from '../dailyItemModal/DailyItemModal';
import './DailyItem.scss';

export const DailyItem = ({
  listNumber,
  action,
  created_on,
  quantity,
  price,
}) => {
  const time = created_on.substr(11, 8);
  return (
    <>
      <li>
        <p className='regular-14'>#{listNumber}</p>
        <p className='regular-14'>{action}</p>
        <p className='regular-14'>{time}</p>
        <p className='regular-14'>{quantity}</p>
        <p className='regular-14'>{price}</p>
        <DailyItemModal />
      </li>
    </>
  );
};
export default DailyItem;