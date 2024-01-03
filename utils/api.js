// useData.js
import useSWR from 'swr';
import fetcher from './_fetcher';

export default function useData(username, password) {
  const { data, error, isLoading } = useSWR(
    ['https://arne.vaw.be/dating_app/api.php', { users_username: username, users_password: password }],
    fetcher
  );

  return {
    userData: data,
    isLoading,
    isError: error,
  };
}
