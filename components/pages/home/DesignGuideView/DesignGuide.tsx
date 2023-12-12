import { Typography } from '@mochi-ui/core'
import { LinkCircledSolid } from '@mochi-ui/icons'
import PaperplaneCircle from '@mochi-ui/icons/solid/paperplane-circle'
import clsx from 'clsx'
import { DesignGuideCardItem } from './DesignGuideCardItem'

export const DesignGuide = ({ className }: { className?: string }) => {
  return (
    <section className={clsx('px-4', className)}>
      <div className="section-container">
        <Typography level="h3" className="mb-8 tracking-tight leading-tight">
          Design Guide
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
          <DesignGuideCardItem
            imgUrl="/img/select.png"
            title={
              <div className="flex gap-2 items-center">
                <PaperplaneCircle className="text-purple-700 h-5 w-5 shrink-0" />
                <Typography level="p4" fontWeight="lg" color="secondary">
                  Documentation
                </Typography>
              </div>
            }
            description={
              <Typography level="p5" className="leading-6 !text-neutral-600">
                Quick guide to integrate the UI kit
              </Typography>
            }
            className="w-full sm:w-1/2"
            mediaClassName="bg-[#EFE7FE]"
            href="https://ds.console.so"
          />

          <DesignGuideCardItem
            imgUrl="/img/paperplane.png"
            title={
              <div className="flex gap-2 items-center">
                <LinkCircledSolid className="text-blue-700 h-5 w-5 shrink-0" />
                <Typography level="p4" fontWeight="lg" color="primary">
                  Mochi Support
                </Typography>
              </div>
            }
            description={
              <Typography level="p5" className="leading-6 !text-neutral-600">
                Join support community or contact us via email{' '}
                <a
                  href="mailto:team@console.so"
                  className="transition-colors font-medium duration-300 text-neutral-700 hover:text-neutral-800"
                >
                  team@console.so
                </a>
              </Typography>
            }
            className="w-full sm:w-1/2"
            mediaClassName="bg-blue-200"
          />
        </div>
      </div>
    </section>
  )
}
