import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  ProfileBadge,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Switch,
} from '@mochi-ui/core'
import {
  AddUserSolid,
  EyeShowSolid,
  ShieldDoneSolid,
  UserSolid,
} from '@mochi-ui/icons'
import { useEffect, useState } from 'react'

export const DropdownShowcase = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [switchState, setSwitchState] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpened(true)
    })

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <DropdownMenu open={isOpened} onOpenChange={() => setIsOpened(!isOpened)}>
      <DropdownMenuTrigger asChild>
        <ProfileBadge
          avatar="/img/user-avatar.png"
          name="Kathryn Murphy"
          platform=""
          className="h-max"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[645px] overflow-y-auto">
        <DropdownMenuLabel
          leftIcon={<UserSolid className="!text-neutral-800" />}
        >
          Profile
        </DropdownMenuLabel>

        <DropdownMenuItem hasPaddingLeft>Overview</DropdownMenuItem>

        <DropdownMenuItem hasPaddingLeft>Settings</DropdownMenuItem>

        <DropdownMenuItem
          leftIcon={<EyeShowSolid className="!text-neutral-800" />}
        >
          View Options
        </DropdownMenuItem>

        <DropdownMenuItem
          hasPaddingLeft
          rightExtra={<Switch checked={switchState} />}
          onClick={(e) => {
            e.preventDefault()
            setSwitchState(!switchState)
          }}
        >
          Dark Mode
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          leftIcon={<AddUserSolid className="!text-neutral-800" />}
        >
          Invite Friends
        </DropdownMenuItem>

        <DropdownMenuItem
          leftIcon={<ShieldDoneSolid className="!text-neutral-800" />}
        >
          Terms and Policies
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
