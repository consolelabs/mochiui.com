import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export type ImageWithFallbackProps = Omit<ImageProps, 'src'> & {
  src?: string
  fallbackImgUrl?: string
}

export const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackImgUrl, alt, ...rest } = props

  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc || ''}
      onLoad={(e) => {
        // @ts-ignore
        if (e?.target?.naturalWidth && e.target.naturalWidth === 0) {
          setImgSrc(fallbackImgUrl || '')
        }
      }}
      onError={() => {
        setImgSrc(fallbackImgUrl || '')
      }}
    />
  )
}
