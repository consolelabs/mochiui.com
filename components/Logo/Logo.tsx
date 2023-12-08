import Image from 'next/image'
import { ImageProps } from 'next/image'

export const Logo = (props: Partial<ImageProps>) => {
  const { src, ...rest } = props

  return (
    <Image
      src={src ?? '/img/mochi-ui-logo.png'}
      alt={'Mochi UI Logo'}
      width={130}
      height={40}
      priority
      {...rest}
    />
  )
}
