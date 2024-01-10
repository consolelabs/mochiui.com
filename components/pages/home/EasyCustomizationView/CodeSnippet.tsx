import { Tooltip, Typography } from '@mochi-ui/core'
import { CopySolid } from '@mochi-ui/icons'
import { useClipboard } from '@dwarvesf/react-hooks'
import { useEffect } from 'react'

import hljs from 'highlight.js/lib/common'

const demoCode = `import { Card, Typography, IconButton, Button } from '@mochi-ui/core'
import { WalletSolid, DiscordColored, TelegramColored, X, GoogleColored, FacebookColored, SlackColored, Github, MailLine } from '@mochi-ui/icons'

export const CustomCardDemo = () => {
  return (
    <Card className="!p-6 max-w-[400px] lg:max-w-full shadow-lg">
      <Typography
        level="h5"
        fontWeight="md"
        color="neutral"
        className="text-center"
      >
        Welcome back!
      </Typography>
      <Typography level="p5" color="neutral" className="text-center">
        Great to see you again! Sign in your account to continue.
      </Typography>
      <div className="flex flex-col gap-8 mt-8 text-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-auto text-3xl w-fit">
          {socialAuths.map((item) => (
            <IconButton
              type="button"
              key={item.name}
              variant="outline"
              color="info"
              size="lg"
              className="!p-2"
              label={\`Sign in with \${item.name}\`}
            >
              {item.icon}
            </IconButton>
          ))}
        </div>
        <Typography level="p5" color="neutral">
          Or connect with an extension wallet
        </Typography>
        <Button aria-label="Connect wallet" size="lg">
          <WalletSolid className="text-xl" />
          Connect Wallet
        </Button>
      </div>
    </Card>
  )
}

const socialAuths = [
  {
    name: 'discord',
    icon: <DiscordColored className="w-7 h-7" />,
  },
  {
    name: 'telegram',
    icon: <TelegramColored className="w-7 h-7" />,
  },
  {
    name: 'twitter',
    icon: <X className="w-7 h-7 text-black" />,
  },
  {
    name: 'gmail',
    icon: <GoogleColored className="w-7 h-7" />,
  },
  {
    name: 'facebook',
    icon: <FacebookColored className="w-7 h-7" />,
  },
  {
    name: 'slack',
    icon: <SlackColored className="w-7 h-7" />,
  },
  {
    name: 'github',
    icon: <Github className="w-7 h-7" />,
  },
  {
    name: 'mail',
    icon: <MailLine className="w-7 h-7 text-black" />,
  },
]`

export const CodeSnippet = () => {
  const { onCopy, hasCopied } = useClipboard(demoCode)

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <div className="w-full lg:flex-1 h-[500px] lg:h-auto lg:w-[calc(100%-32px-600px)]">
      <div className="relative flex h-full flex-col rounded-2xl bg-neutral-800 py-6 md:py-8">
        <div className="absolute h-4 w-full left-0 top-14 md:top-16 bg-gradient-to-t from-transparent to-neutral-800" />

        <div className="flex items-center justify-between px-6 md:px-8 !pb-2">
          <Typography
            level="p6"
            className="!text-[13px]"
            fontWeight="md"
            color="textContrast"
          >
            custom-card.tsx
          </Typography>
          <Tooltip
            content="Copied"
            arrow="top-center"
            componentProps={{ root: { open: hasCopied } }}
          >
            <CopySolid className="w-6 h-6 text-neutral-0" onClick={onCopy} />
          </Tooltip>
        </div>
        <div className="h-full overflow-auto hide-scrollbar px-6 md:px-8">
          <pre className="!bg-transparent !m-0 !pt-0 !pb-2 !text-sm static language-javascript">
            <code className="language-javascript !px-0 hide-scrollbar">
              {demoCode}
            </code>
          </pre>
        </div>

        <div className="absolute h-4 w-full left-0 bottom-6 md:bottom-8 bg-gradient-to-b from-transparent to-neutral-800" />
      </div>
    </div>
  )
}
