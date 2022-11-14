import { useContext } from 'react';
import { useReducer } from 'react';
import { UserContext } from './context';

export const useUser = () => useContext(UserContext);

function useReducerProvider(state, actions) {
  switch (actions.type) {
    case 'Viktor':
      return { ...state, name: actions.type, isLoggined: actions.payload };
    case null:
      return { ...state, name: actions.type, isLoggined: actions.payload };
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {
  const [{ name, isLoggined }, dispatch] = useReducer(useReducerProvider, {
    name: '',
    isLoggined: false,
  });

  return (
    <UserContext.Provider value={{ isLoggined, name, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
