import { cn } from '@/lib/utils';
import { RiLoader2Line } from '@remixicon/react';

function Spinner({
  className,
  ...props
}: Omit<React.ComponentProps<'svg'>, 'children'>) {
  return (
    <RiLoader2Line
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  );
}

export { Spinner };
