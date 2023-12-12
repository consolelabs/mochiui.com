import { Button, ButtonProps, IconButton } from '@mochi-ui/core'
import { MagnifierLine, ThreeDotLoading } from '@mochi-ui/icons'

const buttonColorVariants: ButtonProps['color'][] = [
  'success',
  'danger',
  'warning',
  'neutral',
]

const buttonVariants: ButtonProps['variant'][] = [
  'solid',
  'outline',
  'ghost',
  'link',
]

export const ButtonsShowcase = () => {
  return (
    <div className="h-full w-full flex p-4 md:p-6 justify-center items-center">
      <div>
        <div className="flex gap-4 flex-wrap items-center">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant} className="capitalize">
              {variant} Button
            </Button>
          ))}
        </div>

        <div className="mt-4 flex gap-4 flex-wrap items-center">
          <IconButton>
            <MagnifierLine />
          </IconButton>
          <Button>
            <MagnifierLine /> Search
          </Button>
          <IconButton disabled>
            <ThreeDotLoading />
          </IconButton>
          <Button disabled>
            <ThreeDotLoading /> Loading
          </Button>
        </div>

        <div className="mt-4 flex gap-4 flex-wrap items-center">
          {buttonColorVariants.map((variant) => (
            <Button
              key={variant}
              color={variant}
              variant="outline"
              className="capitalize"
            >
              {variant}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
