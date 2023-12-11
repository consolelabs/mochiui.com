import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalDescription,
  Button,
} from '@mochi-ui/core'
import { CheckCircleOutlined } from '@mochi-ui/icons'

export const ModalShowcase = () => {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent className="space-y-2 text-center max-w-sm">
        <div className="mb-8 flex flex-col gap-5 items-center">
          <CheckCircleOutlined className="text-4xl" />
          <div>
            <ModalTitle className="mb-2">Network Confirmation</ModalTitle>
            <ModalDescription>
              ETH selected as the transfer network. Few platforms support the
              ETH network. Please confirm that the receiving platform supports
              this network.
            </ModalDescription>
          </div>
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
