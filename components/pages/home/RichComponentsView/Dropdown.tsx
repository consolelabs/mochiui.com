import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
  TextFieldRoot,
  TextFieldDecorator,
  TextFieldInput,
  Checkbox,
  Label,
  Badge,
  BadgeProps,
} from '@mochi-ui/core'
import { SolidDotSolid } from '@mochi-ui/icons'
import Magnifier from '@mochi-ui/icons/line/magnifier'
import { useState } from 'react'

const rolesData = [
  { label: 'Admin', value: 'admin', appearance: 'primary' },
  { label: 'Mochi Bot', value: 'mochi-bot', appearance: 'secondary' },
  { label: 'VC Roles', value: 'vc-roles', appearance: 'success' },
  {
    label: 'In a voice channel',
    value: 'in-a-voice-channel',
    appearance: 'black',
  },
  { label: 'Smod', value: 'smod', appearance: 'warning' },
]

export const DropdownShowcase = () => {
  const [radioSelected, setRadioSelected] = useState('third')

  return (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger asChild>
        <Button>Open Dropdown</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <TextFieldRoot>
          <TextFieldDecorator>
            <Magnifier />
          </TextFieldDecorator>
          <TextFieldInput placeholder="Search a role" />
        </TextFieldRoot>
        {rolesData.map((role) => (
          <DropdownMenuItem
            wrapperClassName="!gap-0"
            key={role.value}
            rightExtra={
              <Checkbox
                id={role.value}
                checked={radioSelected === role.value}
              />
            }
            onClick={() => setRadioSelected(role.value)}
          >
            <Label htmlFor={role.value} className="pr-3">
              <Badge
                className="!normal-case w-max"
                appearance={role.appearance as BadgeProps['appearance']}
                label={
                  <>
                    <SolidDotSolid />
                    {role.label}
                  </>
                }
              />
            </Label>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
