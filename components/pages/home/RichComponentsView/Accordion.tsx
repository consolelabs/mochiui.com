import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@mochi-ui/core'
import {
  QuestsSolid,
  GameSolid,
  Discord,
  AddUserSolid,
  StarSolid,
  ShieldDoneSolid,
} from '@mochi-ui/icons'
import clsx from 'clsx'

const accordionData = [
  {
    value: '1',
    leftIcon: <QuestsSolid className="!text-neutral-800" />,
    title: 'Quests',
    content: ['Bounty Hunt', 'DeFi Adventure'],
  },
  {
    value: '2',
    leftIcon: <GameSolid className="!text-neutral-800" />,
    title: 'Game Store',
    content: ['PodTown', 'Tripple Pod', 'Lottery Tower'],
  },
  {
    value: '3',
    leftIcon: <Discord className="!text-neutral-800" />,
    title: 'Server Management',
    content: ['Server 1', 'Server 2', 'Server 3'],
  },
  {
    value: '4',
    leftIcon: <AddUserSolid className="!text-neutral-800" />,
    title: 'Invite Friends',
    content: ['Facebook friends', 'Contacts'],
  },
  {
    value: '5',
    leftIcon: <StarSolid className="!text-neutral-800" />,
    title: 'Feedback',
    content:
      "Whether you're fixing bugs or enhancing documentation, your contributions are immensely valuable.",
  },
  {
    value: '6',
    leftIcon: <ShieldDoneSolid className="!text-neutral-800" />,
    title: 'Terms and Policies',
    content: ['Terms of Service', 'Privacy Policies'],
  },
]

export const AccordionShowcase = () => {
  return (
    <div className="h-full w-full flex p-4 md:p-6 justify-center">
      <Accordion
        type="single"
        collapsible
        className="bg-white !w-[250px] h-max"
        defaultValue="2"
      >
        {accordionData.map((d, index) => (
          <AccordionItem key={d.value} value={d.value}>
            <AccordionTrigger leftIcon={d.leftIcon}>{d.title}</AccordionTrigger>
            <AccordionContent
              hasPadding
              className={clsx('border-b -ml-2 -mr-2 px-12', {
                'border-none': index === accordionData.length - 1,
              })}
            >
              {typeof d.content === 'string' ? (
                d.content
              ) : (
                <ul>
                  {(d.content || []).map((c) => (
                    <li key={c} className="py-2">
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
