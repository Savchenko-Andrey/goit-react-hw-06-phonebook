import { useUser } from './Provider';

export const UserMenu = () => {
  const { isLoggined, name, dispatch } = useUser();

  return (
    <div>
      {isLoggined && <p>{name}</p>}
      {isLoggined ? (
        <button onClick={() => dispatch({ type: null, payload: false })}>
          Log out
        </button>
      ) : (
        <button onClick={() => dispatch({ type: 'Viktor', payload: true })}>
          Log in
        </button>
      )}
    </div>
  );
};
