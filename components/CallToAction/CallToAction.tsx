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
    <section className={clsx('px-4', className)}>
      <div className="section-container flex flex-col justify-between items-start md:items-center gap-6 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {title}
          {description}
        </div>
        {actions.length ? (
          <div className="flex flex-wrap gap-2 w-max items-center">
            {actions.map((action, index) => (
              <Fragment key={index}>{action}</Fragment>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
