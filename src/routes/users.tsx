import { useQuery } from '@tanstack/react-query';
import { usersQueryOptions } from '@/features/users/users.tq.options';
import type { User } from '@/features/users/users.interface';
import { UserCard } from '@/components/users/user-card';

export default function UsersPage() {
  const {
    data,
    isPending,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(usersQueryOptions());

  return (
    <main className="p-4">
      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h1 className="text-foreground">Users</h1>
            <p className="text-muted-foreground">
              Fetched from JSONPlaceholder via TanStack
              Query.
            </p>
          </div>
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground hover:bg-accent disabled:opacity-50"
          >
            {isFetching ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>

        {isPending && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-xl border border-border bg-muted"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-4 text-destructive">
            <p className="font-medium">
              Failed to load users
            </p>
            <p className="text-sm">{error.message}</p>
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((user: User) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
