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
            <Button
              aria-label={`${variant} button`}
              key={variant}
              variant={variant}
              className="capitalize"
            >
              {variant} Button
            </Button>
          ))}
        </div>

        <div className="mt-4 flex gap-4 flex-wrap items-center">
          <IconButton aria-label="Search" label="Search button">
            <MagnifierLine />
          </IconButton>
          <Button aria-label="Search">
            <MagnifierLine /> Search
          </Button>
          <IconButton aria-label="Loading" label="Loading button" disabled>
            <ThreeDotLoading />
          </IconButton>
          <Button aria-label="Loading" disabled>
            <ThreeDotLoading /> Loading
          </Button>
        </div>

        <div className="mt-4 flex gap-4 flex-wrap items-center">
          {buttonColorVariants.map((color) => (
            <Button
              aria-label={`${color} button`}
              key={color}
              color={color}
              variant="outline"
              className="capitalize"
            >
              {color}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
