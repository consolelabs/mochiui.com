import { Button, Typography } from '@mochi-ui/core'
import { useState } from 'react'
import { ButtonsShowcase } from './Buttons'
import { CheckboxShowcase } from './Checkbox'
import clsx from 'clsx'

export const RichComponents = ({ className }: { className?: string }) => {
  const [idx, setIdx] = useState(0)

  const tabData = [
    {
      title: 'Buttons',
      content: <ButtonsShowcase />,
    },
    {
      title: 'Modal',
      content: (
        <iframe src="/examples/mochi-ui-modal" className="w-full h-full" />
      ),
    },
    {
      title: 'Dropdown',
      content: (
        <iframe src="/examples/mochi-ui-dropdown" className="w-full h-full" />
      ),
    },
    {
      title: 'Checkbox',
      content: <CheckboxShowcase />,
    },
  ]

  return (
    <section className={clsx('px-4', className)}>
      <div className="section-container">
        <Typography level="h3" className="mb-8 tracking-tight">
          Rich components
        </Typography>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-stretch">
          <div className="flex flex-row md:flex-col gap-2 overflow-auto w-full md:w-[280px] shrink-0 h-full">
            {tabData.map((tab, index) => (
              <Button
                key={tab.title}
                onClick={() => setIdx(index)}
                variant="outline"
                color={index === idx ? 'primary' : 'neutral'}
                className={clsx(
                  '!h-max !py-2 md:!py-6 !px-4 md:!px-6 !shadow-none !justify-start !font-medium !text-sm md:!text-lg !text-neutral-900',
                  {
                    'bg-white': index !== idx,
                  },
                )}
              >
                {tab.title}
              </Button>
            ))}
          </div>

          <div className="flex-1 bg-neutral-100 rounded-lg overflow-hidden">
            <div className="w-full h-[500px]">{tabData[idx].content}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
