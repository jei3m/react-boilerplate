import { queryOptions } from '@tanstack/react-query';
import { fetchUsers } from './users.tq.functions';

export function usersQueryOptions() {
  return queryOptions({
    queryKey: ['users'],
    queryFn: () => {
      return fetchUsers();
    },
  });
}
