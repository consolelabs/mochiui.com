import clsx from 'clsx'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { ImageWithFallback } from '@/components/ImageWithFallback'

type DesignGuideCardItemProps = Partial<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'>
> & {
  imgUrl?: string
  fallbackImgUrl?: string
  title: ReactNode
  description: ReactNode
  mediaClassName?: string
  alt?: string
}

export const DesignGuideCardItem = (props: DesignGuideCardItemProps) => {
  const {
    imgUrl,
    fallbackImgUrl,
    title,
    description,
    className,
    mediaClassName,
    href,
    alt,
    ...rest
  } = props

  const cardContent = (
    <article>
      {imgUrl || fallbackImgUrl ? (
        <div
          className={clsx(
            'flex justify-center items-center px-4 py-2',
            mediaClassName,
          )}
        >
          <ImageWithFallback
            src={imgUrl}
            fallbackImgUrl={fallbackImgUrl}
            alt={alt}
            width={170}
            height={170}
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="p-4 flex flex-col gap-3">
        {title}
        {description}
      </div>
    </article>
  )

  return href ? (
    <a
      {...rest}
      href={href}
      className={clsx(
        'border rounded-xl overflow-hidden transition-colors duration-300 hover:border-neutral-400',
        className,
      )}
    >
      {cardContent}
    </a>
  ) : (
    <div
      className={clsx(
        'border rounded-xl overflow-hidden transition-colors duration-300 hover:border-neutral-400',
        className,
      )}
    >
      {cardContent}
    </div>
  )
}
