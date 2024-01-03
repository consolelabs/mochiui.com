import {
  Modal,
  ModalTrigger,
  ModalContent,
  Button,
  Typography,
  IconButton,
} from '@mochi-ui/core'
import { SolidDotSolid } from '@mochi-ui/icons'
import clsx from 'clsx'
import { useState } from 'react'
import { ImageWithFallback } from '@/components/ImageWithFallback'

export const ModalShowcase = () => {
  const [isOpened, setIsOpened] = useState(true)
  const [isConfirming, setIsConfirming] = useState(false)

  const onConfirm = () => {
    setIsConfirming(true)
    setTimeout(() => {
      setIsConfirming(false)
      setIsOpened(false)
    }, 2000)
  }

  return (
    <Modal
      open={isOpened}
      modal={false}
      onOpenChange={() => setIsOpened(!isOpened)}
    >
      <ModalTrigger asChild>
        <Button aria-label="Open modal">Open Modal</Button>
      </ModalTrigger>
      <ModalContent className="space-y-2 text-center !p-4">
        <div className="mb-8">
          <ImageWithFallback
            src="/img/macbook.webp"
            alt="Macbook"
            width={350}
            height={200}
          />
          <Typography
            level="h6"
            fontWeight="md"
            className="mt-5 mb-2 tracking-tight"
          >
            Welcome to Mochi
          </Typography>
          <Typography level="p5" className="!text-neutral-600 tracking-tight">
            We&rsquo;re glad to have you onboard. Here are some quick tips to
            get you up and running.
          </Typography>
          <div className="flex justify-center gap-1 mt-5">
            {Array(4)
              .fill(1)
              .map((_, index) => (
                <IconButton
                  key={index}
                  variant="link"
                  color={index === 0 ? 'primary' : 'white'}
                  label=""
                  className={clsx('!h-3 opacity-20', {
                    '!opacity-100': index === 0,
                  })}
                >
                  <SolidDotSolid />
                </IconButton>
              ))}
          </div>
        </div>
        <div className="grid gap-3 grid-cols-2 w-full min-w-[216px]">
          <ModalTrigger asChild>
            <Button
              className="shrinl-0 !w-full !h-[50px] !max-h-[unset] py-3 px-6 rounded-lg"
              variant="outline"
              color="white"
            >
              Cancel
            </Button>
          </ModalTrigger>
          <ModalTrigger
            asChild
            onClick={(e) => {
              e.preventDefault()
              onConfirm()
            }}
          >
            <Button
              aria-label="Confirm"
              className="shrinl-0 !w-full !h-[50px] !max-h-[unset] bg-primary-700 py-3 px-6 text-white rounded-lg"
              loading={isConfirming}
            >
              Confirm
            </Button>
          </ModalTrigger>
        </div>
      </ModalContent>
    </Modal>
  )
}
