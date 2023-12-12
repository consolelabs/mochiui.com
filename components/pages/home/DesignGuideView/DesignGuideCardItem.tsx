import clsx from 'clsx'
import Image from 'next/image'
import { AnchorHTMLAttributes, ReactNode } from 'react'

type DesignGuideCardItemProps = Partial<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'>
> & {
  imgUrl?: string
  title: ReactNode
  description: ReactNode
  mediaClassName?: string
}

export const DesignGuideCardItem = (props: DesignGuideCardItemProps) => {
  const {
    imgUrl,
    title,
    description,
    className,
    mediaClassName,
    href,
    ...rest
  } = props

  const cardContent = (
    <article>
      {imgUrl ? (
        <div
          className={clsx(
            'flex justify-center items-center px-4 py-2',
            mediaClassName,
          )}
        >
          <Image src={imgUrl} alt="" width={170} height={170} priority />
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
