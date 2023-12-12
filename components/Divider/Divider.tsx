import clsx from 'clsx'

export const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'section-container h-[1px] bg-neutral-200 my-16 md:my-[88px]',
        className,
      )}
    />
  )
}
