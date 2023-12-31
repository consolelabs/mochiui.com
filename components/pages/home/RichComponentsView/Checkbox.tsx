import { Checkbox, Label } from '@mochi-ui/core'
import { CheckBoxStyleProps } from '@mochi-ui/theme'
import clsx from 'clsx'

const appearances: CheckBoxStyleProps['appearance'][] = [
  'success',
  'danger',
  'warning',
  'neutral',
  'primary',
  'secondary',
]

const checkedType: {
  checked: boolean | 'indeterminate'
  disabled?: boolean
}[] = [
  {
    checked: true,
  },
  {
    checked: 'indeterminate',
  },
  {
    checked: true,
    disabled: true,
  },
]

export const CheckboxShowcase = () => {
  return (
    <div className="h-full w-full flex p-4 md:p-6 justify-center items-center">
      <div className="flex flex-col gap-6">
        {checkedType.map((d, index) => (
          <div key={index} className="flex flex-wrap gap-4 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Checkbox
                id={`check-type-${index}-discord`}
                defaultChecked={index === 0 && d.checked}
                title="abc"
                disabled={d?.disabled}
                size="lg"
              />
              <Label
                htmlFor={`check-type-${index}-discord`}
                className={clsx('!text-sm font-normal normal-case', {
                  '!text-neutral-500': d?.disabled,
                  '!text-neutral-700': !d?.disabled,
                })}
              >
                Discord
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id={`check-type-${index}-telegram`}
                defaultChecked={index === 1 && d.checked}
                title="abc"
                disabled={d?.disabled}
                size="lg"
              />
              <Label
                htmlFor={`check-type-${index}-telegram`}
                className={clsx('!text-sm font-normal normal-case', {
                  '!text-neutral-500': d?.disabled,
                  '!text-neutral-700': !d?.disabled,
                })}
              >
                Telegram
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id={`check-type-${index}-extension`}
                defaultChecked={(index === 1 || index === 2) && d.checked}
                title="abc"
                disabled={d?.disabled}
                size="lg"
              />
              <Label
                htmlFor={`check-type-${index}-extension`}
                className={clsx('!text-sm font-normal normal-case', {
                  '!text-neutral-500': d?.disabled,
                  '!text-neutral-700': !d?.disabled,
                })}
              >
                Extension
              </Label>
            </div>
          </div>
        ))}

        <div className="flex gap-4 md:gap-6">
          {appearances.map((a) => (
            <div key={a} className="flex gap-4">
              <Checkbox appearance={a} size="lg" defaultChecked />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
