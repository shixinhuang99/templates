import * as React from 'react';
import { cn } from '~/utils/cn';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent scrollbar-thumb-rounded-full',
        className,
      )}
      ref={ref}
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
