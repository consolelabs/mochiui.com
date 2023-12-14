import { Logo, Typography } from '@mochi-ui/core'
import clsx from 'clsx'
import { ROADMAP } from '../../../../constants/roadmap'

export const Roadmap = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        'bg-neutral-900 bg-contain sm:bg-height-4/5 bg-right-bottom bg-no-repeat',
        className,
      )}
      style={{
        backgroundImage: 'url("/img/gradient.png")',
        backgroundAttachment: 'fixed',
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

      <div className="overflow-auto pl-0 sm:pl-4">
        <div
          className="overflow-visible pb-8 pt-4 sm:pt-8"
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="flex flex-row-reverse sm:flex-col w-max pl-6 sm:pl-0">
            <div className="flex flex-col sm:flex-row w-max">
              <div className="relative w-24 h-12 sm:h-auto">
                <div className="bg-blue-700 h-4 w-4 rounded-full absolute -left-[9px] sm:left-[unset] bottom-[unset] sm:-bottom-[9px] animate-ping" />
                <div className="bg-blue-700 h-4 w-4 rounded-full absolute -left-[9px] sm:left-[unset] bottom-[unset] sm:-bottom-[9px]" />
              </div>

              {ROADMAP.map((item) => (
                <div
                  key={item.title}
                  className="relative w-[280px] md:w-[300px] min-h-[140px] sm:min-h-[160px] pb-6 pl-6 sm:pl-3"
                >
                  <div
                    className={clsx(
                      'w-0.5 -left-0.5 rounded-full absolute hidden sm:block',
                      {
                        'bg-[#E88B88] h-full': item?.isMajorChange,
                        'bg-blue-600 h-[calc(100%-24px)] bottom-6':
                          !item?.isMajorChange,
                      },
                    )}
                  />

                  {item?.isMajorChange ? (
                    <Logo
                      className="absolute bottom-[unset] sm:-bottom-[18px] -left-[19px] sm:-left-[19px] box-content border-2 bg-[#E88B88] border-[#E88B88]"
                      size="xs"
                    />
                  ) : (
                    <div className="rounded-full absolute h-2 w-2 top-2 sm:top-[unset] bottom-[unset] sm:bottom-2 -left-[5px] bg-blue-600" />
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
            <div className="flex flex-col sm:flex-row">
              <div className="w-0.5 sm:w-full h-full sm:h-0.5 bg-gradient-to-b sm:bg-gradient-to-r from-blue-600 to-violet-500" />
              <div className="w-0.5 sm:w-24 h-24 sm:h-0.5 bg-gradient-to-b sm:bg-gradient-to-r from-violet-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
