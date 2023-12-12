import {
  Modal,
  ModalTrigger,
  ModalContent,
  Button,
  Typography,
} from '@mochi-ui/core'
import Image from 'next/image'

export const ModalShowcase = () => {
  return (
    <Modal defaultOpen>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent className="space-y-2 text-center sm:w-[400px]">
        <div className="mb-8">
          <Image
            src="/img/macbook.png"
            alt="Mochi UI Logo"
            width={350}
            height={200}
            priority
          />
          <Typography level="h6" fontWeight="md" className="mt-5 mb-2">
            Welcome to Mochi
          </Typography>
          <Typography level="p5" className="!text-neutral-600">
            We&rsquo;re glad to have you onboard. Here are some quick tips to
            get you up and running.
          </Typography>
        </div>
        <div className="flex gap-3">
          <ModalTrigger asChild>
            <button
              className="flex-1 border border-neutral-300 py-3 px-6 rounded-lg"
              type="button"
            >
              Cancel
            </button>
          </ModalTrigger>
          <ModalTrigger asChild>
            <button
              className="flex-1 bg-primary-700 py-3 px-6 text-white rounded-lg"
              // eslint-disable-next-line no-alert -- for demo
              onClick={() => alert('Confirmed')}
              type="button"
            >
              Confirm
            </button>
          </ModalTrigger>
        </div>
      </ModalContent>
    </Modal>
  )
}
