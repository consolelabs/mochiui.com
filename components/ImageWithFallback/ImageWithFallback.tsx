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
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        srcSet={`${fallbackImgUrl} 767px, ${src} 768px"`}
        sizes="(max-width: 767px) 767px, 768px"
        src={src}
        alt={alt}
        {...rest}
      />
    </>
  )
}
