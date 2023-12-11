import { Typography } from '@mochi-ui/core'
import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'

type HeroProps = {
  title: string
  description: string
  actions: ReactNode[]
  className?: string
  contentClassName?: string
  heroImgUrl?: string
}

export const Hero = ({
  title,
  description,
  actions = [],
  className,
  contentClassName,
  heroImgUrl,
}: HeroProps) => {
  return (
    <section
      className={clsx(
        'bg-black min-h-[500px] h-max relative flex justify-center items-center overflow-hidden',
        className,
      )}
    >
      <div
        style={{
          backgroundImage: heroImgUrl ?? 'url("/img/hero-banner.png")',
        }}
        className="h-full w-full bg-cover bg-center absolute top-0 -right-24"
      />
      <div className="section-container w-full absolute p-4 xl:p-0">
        <div
          className={clsx(
            'max-w-full w-[480px] md:max-w-[50%] flex flex-col gap-6 md:gap-8',
            contentClassName,
          )}
        >
          <Typography
            level="h2"
            className="text-white text-[64px] leading-tight drop-shadow-md"
            fontWeight="md"
          >
            {title}
          </Typography>

          <Typography
            level="p2"
            className="font-[350] text-white drop-shadow-md"
          >
            {description}
          </Typography>

          {actions.length ? (
            <div className="flex gap-4">
              {actions.map((action, index) => (
                <Fragment key={index}>{action}</Fragment>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
