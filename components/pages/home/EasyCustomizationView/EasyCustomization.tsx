import { Typography } from '@mochi-ui/core'
import clsx from 'clsx'
import { CodeSnippet } from './CodeSnippet'
import { CustomCardDemo } from './CustomCardDemo'

export const EasyCustomization = ({ className }: { className?: string }) => {
  return (
    <section className={clsx('px-4', className)}>
      <div className="section-container">
        <Typography
          level="h3"
          className="mb-8 !text-[32px] md:!text-4.5xl -tracking-[2px] leading-tight"
        >
          Customization seamlessly
        </Typography>
        <div className="flex h-max lg:h-[444px] flex-col lg:flex-row gap-4 lg:gap-8">
          <CustomCardDemo />
          <CodeSnippet />
        </div>
      </div>
    </section>
  )
}
