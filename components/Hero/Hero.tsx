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
        'bg-neutral-900 min-h-[500px] h-max relative flex justify-center items-center overflow-hidden',
        className,
      )}
    >
      <div
        style={{
          backgroundImage:
            heroImgUrl ??
            'image-set(url("/img/hero-banner.png") 2x, url("/img/hero-banner.webp") 1x)',
        }}
        className="h-full w-full bg-cover bg-center absolute top-0 -right-24"
      />

      <div className="section-container w-full absolute p-4 xl:p-0">
        <div
          className={clsx(
            'max-w-[80%] w-[480px] md:max-w-[50%] flex flex-col gap-6 md:gap-8',
            contentClassName,
          )}
        >
          <Typography
            level="h2"
            className="text-white !text-[32px] md:!text-[64px] leading-tight drop-shadow-md tracking-tight md:-tracking-[2.5px]"
            fontWeight="md"
          >
            {title}
          </Typography>

          <Typography
            level="p2"
            className="font-[350] !text-base md:!text-xl text-white drop-shadow-md tracking-tight"
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
