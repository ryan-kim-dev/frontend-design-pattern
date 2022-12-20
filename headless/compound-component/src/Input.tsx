import React, { createContext, useContext } from 'react';

interface IInput {
  id: string;
  value: string;
  type: string;
  onChange: () => void;
  children: React.ReactNode;
}

const InputContext = createContext({
  id: '',
  value: '',
  type: 'text',
  onChange: () => {},
});

export function InputWrapper({ id, value, type, onChange, children }: IInput) {
  const contextValue = { id, value, type, onChange };

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
}

function Input({ ...props }) {
  const { id, value, onChange, type } = useContext(InputContext);
  return <input id={id} value={value} onChange={onChange} type={type} />;
}

export default Input;

export function Label({ children, ...props }: IInput) {
  const { id } = useContext(InputContext);
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
}
