import { Typography } from '@mochi-ui/core'
import clsx from 'clsx'

type GridContentData = {
  id?: string
  icon: React.ReactNode
  title: string
  body: React.ReactNode
}

type GridContentProps = {
  data: GridContentData[]
  className?: string
}

export const GridContent = (props: GridContentProps) => {
  const { data, className } = props
  return (
    <section className={clsx('landing-container', className)}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {data.map((d, index) => {
          return (
            <div
              key={d?.id ?? index}
              className="flex flex-col justify-center gap-3 w-full md:w-1/4 md:max-w-[216px] box-border"
            >
              <div className="flex flex-row md:flex-col gap-3 md:gap-6 items-center md:items-start">
                {d.icon}
                <Typography
                  level="h6"
                  fontWeight="lg"
                  className="!text-neutral-800 tracking-tighter"
                >
                  {d.title}
                </Typography>
              </div>
              <Typography
                level="p5"
                className="!text-neutral-600 tracking-tight"
              >
                {d.body}
              </Typography>
            </div>
          )
        })}
      </div>
    </section>
  )
}
