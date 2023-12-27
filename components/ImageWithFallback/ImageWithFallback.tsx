import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export type ImageWithFallbackProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'src'
> & {
  src?: string
  fallbackImgUrl?: string
}

export const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackImgUrl, alt, ...rest } = props

  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={fallbackImgUrl} />
      <source media="(min-width: 768px)" srcSet={src} />
      <img src={fallbackImgUrl} alt={alt} {...rest} />
    </picture>
  )
}
