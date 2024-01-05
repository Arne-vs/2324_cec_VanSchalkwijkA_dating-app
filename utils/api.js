import useSWR from 'swr';
import fetcher from './_fetcher';

export default function useData(username, password) {
  const { data, error, isLoading } = useSWR(
    ['https://arne.vaw.be/dating_app/api.php', { users_username: username, users_password: password }],
    fetcher
  );

  let userData = null;
  let relationships = null;
  let isError = error;
  if (data) {
    if (data.success) {
      userData = data.user_data;
      relationships = data.relationship_type;
      fetish = data.fetish_type;
      gender = data.gender;
      photo = data.photo;
    } else {
      isError = data.message;
    }
  }

  return {
    userData,
    relationships,
    photo,
    gender,
    fetish,
    isLoading,
    isError,
  };
}

