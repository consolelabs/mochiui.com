import { Button, Typography } from '@mochi-ui/core'
import { useState } from 'react'
import { ButtonsShowcase } from './Buttons'
import { motion } from 'framer-motion'
import { ModalShowcase } from './Modal'
import { DropdownShowcase } from './Dropdown'
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
      content: <ModalShowcase />,
    },
    {
      title: 'Dropdown',
      content: <DropdownShowcase />,
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

          <div className="flex-1 min-h-[500px] flex p-6 justify-center items-center bg-neutral-100 rounded-lg">
            <motion.div
              key={`${tabData[idx].title}-showcase`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {tabData[idx].content}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
