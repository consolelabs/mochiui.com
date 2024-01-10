import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'

type CallToActionProps = {
  title: ReactNode
  description: ReactNode
  actions?: ReactNode[]
  className?: string
}

export const CallToAction = (props: CallToActionProps) => {
  const { title, description, actions = [], className } = props
  return (
    <section className={clsx('landing-container', className)}>
      <div className="flex flex-col justify-between items-start md:items-center gap-6 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:max-w-[50%]">
          {title}
          {description}
        </div>
        {actions.length ? (
          <div className="flex flex-wrap gap-2 w-max items-center">
            {actions.map((action, index) => (
              // @ts-ignore
              <Fragment key={index}>{action}</Fragment>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
