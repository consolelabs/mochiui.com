import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  Avatar,
  DropdownRadioItemProps,
  DropdownMenuRadioItem,
  Button,
} from '@mochi-ui/core'
import { SolidDotSolid } from '@mochi-ui/icons'
import { useState } from 'react'

export const DropdownShowcase = () => {
  const [radioSelected, setRadioSelected] = useState('third')

  return (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger asChild>
        <Button>Open Dropdown</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem rightExtra="⇧⌘P">
            Keyboard shortcuts
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={radioSelected}
                  onChange={(val) => setRadioSelected(val)}
                >
                  {(
                    [
                      {
                        children: 'Console Labs',
                        subtitle: (
                          <span className="flex gap-1 items-center">
                            Lvl 450 <SolidDotSolid /> 145 Boosts
                          </span>
                        ),
                        leftIcon: <Avatar src="https://mochi.gg/logo.png" />,
                        isLeftIconAvatar: true,
                        value: 'first',
                      },
                      {
                        children: 'Techie Story',
                        subtitle: (
                          <span className="flex gap-1 items-center">
                            Lvl 450 <SolidDotSolid /> 145 Boosts
                          </span>
                        ),
                        leftIcon: <Avatar src="https://mochi.gg/logo.png" />,
                        isLeftIconAvatar: true,
                        value: 'second',
                      },
                      {
                        children: 'Dwarves, LLC',
                        subtitle: (
                          <span className="flex gap-1 items-center">
                            Lvl 450 <SolidDotSolid /> 145 Boosts
                          </span>
                        ),
                        leftIcon: <Avatar src="https://mochi.gg/logo.png" />,
                        isLeftIconAvatar: true,
                        value: 'third',
                      },
                      {
                        children: 'Superteam Vietnam',
                        subtitle: (
                          <span className="flex gap-1 items-center">
                            Lvl 450 <SolidDotSolid /> 145 Boosts
                          </span>
                        ),
                        leftIcon: <Avatar src="https://mochi.gg/logo.png" />,
                        isLeftIconAvatar: true,
                        value: 'forth',
                      },
                    ] as DropdownRadioItemProps[]
                  ).map((props, index) => (
                    <DropdownMenuRadioItem key={index} {...props} />
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {['Github', 'Support'].map((key) => (
          <DropdownMenuItem key={key}>{key}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
