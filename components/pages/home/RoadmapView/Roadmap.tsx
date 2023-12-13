import { Typography } from '@mochi-ui/core'
import clsx from 'clsx'
import { ROADMAP } from '../../../../constants/roadmap'

export const Roadmap = ({ className }: { className?: string }) => {
  return (
    <section className={clsx('pl-4 xl:pl-0', className)}>
      <div className="section-container overflow-visible">
        <Typography level="h3" className="mb-8 -tracking-[2px] leading-tight">
          Roadmap
        </Typography>
      </div>
      <div className="overflow-auto">
        <div className="section-container overflow-visible pt-8">
          <div className="flex w-max pr-4">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-neutral-600 w-24" />

            <div className="relative border-t border-neutral-800 w-24">
              <div className="bg-blue-700 animate-pulse h-full w-[1px] rounded-full absolute top-0 -left-[1px]" />
              <div className="bg-white h-[15px] w-[15px] rounded-full absolute -top-[8px] -left-[8px]" />
              <div className="bg-blue-700 animate-pulse h-[15px] w-[15px] rounded-full absolute -top-[8px] -left-[8px]" />
            </div>

            {ROADMAP.map((item) => (
              <div
                key={item.title}
                className="relative border-t border-neutral-800 w-[240px] md:w-[300px] pb-6"
              >
                <div
                  className={clsx('rounded-full absolute', {
                    'h-[15px] w-[15px] -top-[8px] bg-[#E88B88]':
                      item?.isMajorChange,
                    'h-[9px] w-[9px] -top-[5px] bg-neutral-700':
                      !item?.isMajorChange,
                  })}
                />
                <div className="pt-8 pr-12">
                  <Typography
                    level={item?.isMajorChange ? 'h5' : 'h6'}
                    fontWeight="lg"
                  >
                    {item.title}
                  </Typography>
                  {(item?.checkList || []).length ? (
                    <ul className="list-disc ml-4 mt-2">
                      {item?.checkList?.map((checkListItem) => (
                        <li key={checkListItem} className="!text-neutral-600">
                          <Typography level="p5" className="!text-neutral-600">
                            {checkListItem}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}

            <div className="h-[1px] bg-gradient-to-l from-transparent to-neutral-600 w-24" />
          </div>
        </div>
      </div>
    </section>
  )
}
