import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

export const PositiveAndNegativeBarChart = ({ transactions }) => {
  const epsilon = 0.0001;

  // 將所有的 pandl 值都加上 epsilon，以確保 bar 在 y 軸的 0 位置渲染
  const adjustedTransactions = transactions?.map((transaction) => ({
    ...transaction,
    pandl: transaction.pandl + epsilon,
    pandlInteger: Math.round(transaction.pandl), // 新增整數屬性
  }));
  console.log(adjustedTransactions);

  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={adjustedTransactions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip
            formatter={(value, name, props) => {
              return [props.payload.pandlInteger, 'pandl']; // 使用新的整數屬性
            }}
          />
          <Legend />
          <ReferenceLine y={0} stroke='#000' />
          <Bar dataKey='pandl' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default PositiveAndNegativeBarChart;
