import { Button, Typography } from '@mochi-ui/core'
import { useState } from 'react'
import { ButtonsShowcase } from './Buttons'
import { CheckboxShowcase } from './Checkbox'
import clsx from 'clsx'
import { AccordionShowcase } from './Accordion'
import { CardShowcase } from './Card'

export const RichComponents = ({ className }: { className?: string }) => {
  const [idx, setIdx] = useState(0)

  const tabData = [
    {
      title: 'Card',
      content: <CardShowcase />,
    },
    {
      title: 'Modal',
      content: (
        <iframe
          src="/examples/rich-components/modal"
          className="w-full h-full"
        />
      ),
    },
    {
      title: 'Dropdown',
      content: (
        <iframe
          src="/examples/rich-components/dropdown"
          className="w-full h-full"
        />
      ),
    },
    {
      title: 'Button',
      content: <ButtonsShowcase />,
    },
    {
      title: 'Checkbox',
      content: <CheckboxShowcase />,
    },
    {
      title: 'Accordion',
      content: <AccordionShowcase />,
    },
  ]

  return (
    <section className={clsx('landing-container', className)}>
      <Typography
        level="h3"
        className="mb-8 !text-[32px] md:!text-4.5xl -tracking-[2px] leading-tight"
      >
        Various components
      </Typography>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-stretch">
        <div className="flex flex-row md:flex-col gap-2 overflow-auto hide-scrollbar w-full md:w-[280px] shrink-0 h-full">
          {tabData.map((tab, index) => (
            <Button
              aria-label={`${tab.title} tab`}
              key={tab.title}
              onClick={() => setIdx(index)}
              variant="outline"
              color={index === idx ? 'primary' : 'neutral'}
              className={clsx(
                '!h-max md:!h-[73px] !py-2 md:!py-6 !px-4 md:!px-6 !shadow-none !justify-start !font-medium !text-sm md:!text-lg !text-neutral-800',
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
          <div className="w-full h-[450px] md:h-[478px] overflow-auto">
            {tabData[idx].content}
          </div>
        </div>
      </div>
    </section>
  )
}
