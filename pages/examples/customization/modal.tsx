import {
  Button,
  IconButton,
  Modal,
  ModalContent,
  ModalTrigger,
  Typography,
} from '@mochi-ui/core'
import {
  DiscordColored,
  TelegramColored,
  X,
  GoogleColored,
  FacebookColored,
  SlackColored,
  Github,
  MailLine,
  WalletSolid,
} from '@mochi-ui/icons'
import { useEffect, useState } from 'react'

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
    icon: <X className="w-7 h-7" />,
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
    icon: <MailLine className="w-7 h-7" />,
  },
]

const MochiUIModal = () => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return !isSSR ? (
    <div className="flex justify-center items-center bg-white h-screen">
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent showCloseBtn>
          <div className="overflow-hidden rounded-lg relative p-3 w-[calc(100vw-32px)] max-w-[400px]">
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
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </div>
              <Typography level="p5" color="neutral">
                Or connect with an extension wallet
              </Typography>
              <Button size="lg">
                <WalletSolid className="text-xl" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  ) : null
}

export default MochiUIModal
