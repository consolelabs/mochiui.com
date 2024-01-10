import {
  IconButton,
  Button,
  Typography,
  Badge,
  Avatar,
  Card,
} from '@mochi-ui/core'
import {
  ThreeDotsLine,
  SolidDotSolid,
  TrashBinLine,
  EditLine,
} from '@mochi-ui/icons'

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
    action: (
      <IconButton
        color="info"
        variant="outline"
        className="!p-1 !w-6 !h-6 my-auto"
        label="Delete button"
      >
        <TrashBinLine />
      </IconButton>
    ),
  },
]

export const CardShowcase = () => {
  return (
    <div className="h-full w-full flex p-4 justify-center items-center">
      <Card className="bg-white w-[300px] rounded-xl overflow-hidden !p-0 shadow-md">
        <div
          className="bg-cover h-[75px] relative"
          style={{
            backgroundImage: 'url("/img/profile-background.webp")',
          }}
        >
          <div className="absolute -bottom-[44px] left-2">
            <Avatar src="/img/user-avatar.webp" size="xl" />
          </div>
        </div>

        <div className="p-2.5 pb-0">
          <div className="flex justify-end items-center gap-3">
            <IconButton variant="link" color="neutral" label="Info button">
              <ThreeDotsLine className="text-lg" />
            </IconButton>
            <Button
              aria-label="Edit profile"
              variant="outline"
              size="sm"
              className="!px-2.5 !py-0 text-xs"
            >
              Edit profile
            </Button>
          </div>

          <div className="mt-3">
            <Typography
              fontWeight="md"
              level="p4"
              color="textPrimary"
              className="!tracking-tight !leading-tight !text-base"
            >
              Kathryn Murphy
            </Typography>
            <div className="flex items-center gap-0.5 mt-0.5">
              <Badge className="!py-0 !px-1" appearance="success">
                <div className="flex !text-xxs items-center gap-0.5">
                  <SolidDotSolid /> verified
                </div>
              </Badge>
              <Badge className="!py-0 !px-1" appearance="warning">
                <div className="flex !text-xxs items-center gap-0.5">
                  <SolidDotSolid /> smud
                </div>
              </Badge>
            </div>
          </div>
        </div>

        <div className="p-2.5">
          <div className="border p-2.5 rounded-xl">
            {cardContent.map((content) => {
              return (
                <div
                  key={content.label}
                  className="flex items-center justify-between py-1.5 gap-2"
                >
                  <div className="truncate">
                    <Typography
                      level="p7"
                      fontWeight="lg"
                      color="textSecondary"
                      className="uppercase truncate !text-[9px]"
                    >
                      {content.label}
                    </Typography>
                    <Typography
                      level="p5"
                      fontWeight="lg"
                      className="truncate !text-xs"
                    >
                      {content.value}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {content?.action}
                    <IconButton
                      color="info"
                      variant="outline"
                      className="!p-1 !w-6 !h-6 my-auto"
                      label="Edit button"
                    >
                      <EditLine />
                    </IconButton>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Card>
    </div>
  )
}
