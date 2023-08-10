import { createContext, useState, useContext } from 'react';

const defaultDateContext = {
  ChosenDate: '',
};

const DateContext = createContext(defaultDateContext);
export const useDate = () => useContext(DateContext);

export const DateProvider = ({ children }) => {
  const [ChosenDate, setChosenDate] = useState('');

  return (
    <DateContext.Provider
      value={{
        ChosenDate,
        getChosenDate: (date) => {
          setChosenDate(date);
        },
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
