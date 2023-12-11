import { Button } from '@mochi-ui/core'
import { useState } from 'react'
import { ButtonsShowcase } from './Buttons'
import { motion } from 'framer-motion'
import { ModalShowcase } from './Modal'
import { DropdownShowcase } from './Dropdown'
import { CheckboxShowcase } from './Checkbox'

export const RichComponents = () => {
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
    <section>
      <div className="section-container flex">
        <div className="flex flex-col w-[280px] shrink-0">
          {tabData.map((tab, index) => (
            <Button key={tab.title} onClick={() => setIdx(index)}>
              {tab.title}
            </Button>
          ))}
        </div>

        <div className="w-full min-h-[500px] flex justify-center items-center">
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
    </section>
  )
}
