import { Logo, Typography } from '@mochi-ui/core'
import clsx from 'clsx'
import { ROADMAP } from '../../../../constants/roadmap'

export const Roadmap = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        'bg-neutral-900 bg-contain bg-right-bottom bg-no-repeat',
        className,
      )}
      style={{
        backgroundImage: 'url("/img/gradient.png")',
      }}
    >
      <div className="section-container pl-4 xl:pl-0">
        <Typography
          level="h3"
          className="mb-8 -tracking-[2px] leading-tight"
          color="textContrast"
        >
          Roadmap
        </Typography>
      </div>

      <div className="overflow-auto">
        <div
          className="overflow-visible py-8"
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="flex flex-col w-max pl-4 xl:pl-0">
            <div className="flex w-max">
              <div className="relative w-24">
                <div className="bg-blue-700 h-4 w-4 rounded-full absolute -bottom-[9px] animate-ping" />
                <div className="bg-blue-700 h-4 w-4 rounded-full absolute -bottom-[9px]" />
              </div>

              {ROADMAP.map((item) => (
                <div
                  key={item.title}
                  className="relative w-[280px] md:w-[300px] min-h-[180px] pb-6 pl-3"
                >
                  <div
                    className={clsx('w-0.5 -left-0.5 rounded-full absolute', {
                      'bg-[#E88B88] h-full': item?.isMajorChange,
                      'bg-blue-600 h-[calc(100%-24px)] bottom-6':
                        !item?.isMajorChange,
                    })}
                  />

                  {item?.isMajorChange ? (
                    <Logo
                      className="absolute -bottom-[18px] -left-[18px] box-content border-2 bg-[#E88B88] border-[#E88B88]"
                      size="xs"
                    />
                  ) : (
                    <div className="rounded-full absolute h-2 w-2 bottom-2 -left-[5px] bg-blue-600" />
                  )}

                  <div className="pr-6">
                    <Typography
                      level={item?.isMajorChange ? 'h5' : 'h6'}
                      color="textContrast"
                      fontWeight="lg"
                    >
                      {item.title}
                    </Typography>
                    {(item?.checkList || []).length ? (
                      <ul className="list-disc pl-4 mt-2">
                        {item?.checkList?.map((checkListItem) => (
                          <li key={checkListItem} className="!text-neutral-400">
                            <Typography
                              level="p5"
                              className="!text-neutral-400"
                            >
                              {checkListItem}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}

              <div className="w-24" />
            </div>
            <div className="flex">
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-600 to-violet-500" />
              <div className="w-24 h-0.5 bg-gradient-to-r from-violet-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
