import './PrimaryInput.scss';

const PrimaryInput = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div>
      <div className='label bold-14'>{label}</div>
      <input
        className='primary-input'
        type={type || 'text'}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default PrimaryInput;
