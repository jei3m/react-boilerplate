import { cn } from '@/lib/utils';
import type { User } from '../../features/users/users.interface';

export function UserCard({
  user,
  className,
}: {
  user: User;
  className?: string;
}) {
  return (
    <article
      className={cn(
        'rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm',
        className
      )}
    >
      <header className="mb-3 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {user.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            {user.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            @{user.username}
          </p>
        </div>
      </header>
      <dl className="space-y-1 text-sm">
        <div className="flex justify-between gap-2">
          <dt className="text-muted-foreground">Email</dt>
          <dd className="truncate text-foreground">
            {user.email}
          </dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-muted-foreground">Company</dt>
          <dd className="text-foreground">
            {user.company.name}
          </dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-muted-foreground">Phone</dt>
          <dd className="text-foreground">{user.phone}</dd>
        </div>
      </dl>
    </article>
  );
}
