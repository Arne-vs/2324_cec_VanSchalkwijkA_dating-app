import useSWR from 'swr';
import fetcher from './_fetcher';


export default function useData(userId) {
  const { data, error, isLoading } = useSWR('https://arne.vaw.be/dating_app/api.php', fetcher);

  
  const getUserById = (userId) => {
    if (!data || !userId) return null;
    
    // Assuming 'data' is an array of user objects with 'user_id' field
    return data.users_account.find(userId => userId === userId);
  };

  const selectedUserData = getUserById(userId);

  return {
    allUserData: data,
    userData: selectedUserData,
    isLoading,
    isError: error,
  };
}
