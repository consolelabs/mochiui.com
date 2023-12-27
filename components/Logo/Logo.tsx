import {
  ImageWithFallback,
  ImageWithFallbackProps,
} from '@/components/ImageWithFallback'

export const Logo = (props: Partial<ImageWithFallbackProps>) => {
  const { src, fallbackImgUrl, ...rest } = props

  return (
    <ImageWithFallback
      src={src ?? '/img/logo-with-text.png'}
      fallbackImgUrl={fallbackImgUrl ?? '/img/logo-with-text.webp'}
      width={130}
      height={40}
      alt="Mochi UI Logo"
      {...rest}
    />
  )
}
