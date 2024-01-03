import { Card, Typography, IconButton, Button } from '@mochi-ui/core'
import {
  WalletSolid,
  DiscordColored,
  TelegramColored,
  X,
  GoogleColored,
  FacebookColored,
  SlackColored,
  Github,
  MailLine,
} from '@mochi-ui/icons'

export const CustomCardDemo = () => {
  return (
    <div className="shrink-0 grow w-full max-w-full lg:max-w-[488px] p-4 lg:p-6 flex justify-center items-center lg:w-max bg-blue-200 rounded-2xl">
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
                label={`Sign in with ${item.name}`}
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
    </div>
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
]
