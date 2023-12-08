import Image from 'next/image'
import { ImageProps } from 'next/image'

const config = require('../../next.config')

export const Logo = (props: Partial<ImageProps>) => {
  const { src, ...rest } = props

  return (
    <Image
      src={src ?? `${config.basePath}/img/mochi-ui-logo.png`}
      alt={'Mochi UI Logo'}
      width={130}
      height={40}
      priority
      {...rest}
    />
  )
}
