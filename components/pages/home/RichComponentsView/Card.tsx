import { IconButton, Button, Typography, Badge } from '@mochi-ui/core'
import {
  ThreeDotsLine,
  SolidDotSolid,
  TrashBinLine,
  EditLine,
} from '@mochi-ui/icons'
import Image from 'next/image'

const cardContent = [
  {
    label: 'Display name',
    value: 'Kathryn Murphy',
  },
  {
    label: 'Username',
    value: 'kathrynm234',
  },
  {
    label: 'Email',
    value: '**********@gmail.com',
  },
  {
    label: 'Phone number',
    value: '*******0691',
    action: (
      <IconButton
        color="info"
        variant="outline"
        className="!p-1 !w-6 !h-6 my-auto"
      >
        <TrashBinLine />
      </IconButton>
    ),
  },
]

export const CardShowcase = () => {
  return (
    <div className="h-max w-full flex p-4 md:p-6 justify-center items-center">
      <div className="bg-white w-[420px] rounded-2xl overflow-hidden">
        <div
          className="bg-cover h-[110px] relative"
          style={{
            backgroundImage: 'url("/img/profile-background.png")',
          }}
        >
          <div className="absolute -bottom-[55px] left-4">
            <Image
              src="/img/user-avatar.png"
              alt="User avatar"
              width={110}
              height={110}
            />
          </div>
        </div>

        <div className="p-4 pb-0">
          <div className="flex justify-end items-center gap-4">
            <IconButton variant="link" color="neutral">
              <ThreeDotsLine className="text-2xl" />
            </IconButton>
            <Button variant="outline">Edit profile</Button>
          </div>

          <div className="mt-5">
            <Typography
              fontWeight="md"
              color="textPrimary"
              className="!text-xl"
            >
              Kathryn Murphy
            </Typography>
            <div className="flex items-center gap-0.5 mt-0.5">
              <Badge
                label={
                  <>
                    <SolidDotSolid /> verified
                  </>
                }
                appearance="success"
              />
              <Badge
                label={
                  <>
                    <SolidDotSolid /> smud
                  </>
                }
                appearance="warning"
              />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="border p-4 rounded-xl">
            {cardContent.map((content) => {
              return (
                <div
                  key={content.label}
                  className="flex items-center justify-between py-3 gap-2"
                >
                  <div className="truncate">
                    <Typography
                      level="p7"
                      fontWeight="xl"
                      color="textSecondary"
                      className="uppercase truncate"
                    >
                      {content.label}
                    </Typography>
                    <Typography level="p5" fontWeight="lg" className="truncate">
                      {content.value}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {content?.action}
                    <IconButton
                      color="info"
                      variant="outline"
                      className="!p-1 !w-6 !h-6 my-auto"
                    >
                      <EditLine />
                    </IconButton>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
