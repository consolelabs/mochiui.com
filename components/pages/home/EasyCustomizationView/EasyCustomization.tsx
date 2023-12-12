import { Typography } from '@mochi-ui/core'
import clsx from 'clsx'
import { CodeSnippet } from './CodeSnippet'
import { CustomModalDemo } from './CustomModalDemo'

export const EasyCustomization = ({ className }: { className?: string }) => {
  return (
    <section className={clsx('px-4', className)}>
      <div className="section-container">
        <Typography level="h3" className="mb-8 tracking-tight leading-tight">
          Customization made easy
        </Typography>
        <div className="flex h-max lg:h-[444px] flex-col lg:flex-row gap-4 lg:gap-8">
          <CustomModalDemo />
          <CodeSnippet />
        </div>
      </div>
    </section>
  )
}
