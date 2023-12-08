import { DesktopNav, TopBar, Button, Badge, MobileNav } from '@mochi-ui/core'
import { Logo } from '../Logo'

const desktopNavItems = [
  <Button
    variant="link"
    key="components-button"
    className="!text-white !font-medium !pl-0 !pr-1"
  >
    Components
  </Button>,
  <a
    key="github-link"
    href="https://github.com/consolelabs/mochi-ui"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="link" className="!text-white !font-medium !pl-1 !pr-0">
      GitHub
    </Button>
  </a>,
  <div key="divider">
    <div className="w-[1px] h-6 bg-neutral-800" />
  </div>,
  <Button variant="solid" key="get-started-button" className="!font-medium">
    Get Started
  </Button>,
]

const mobileNavItems = [
  <div key="components-button" className="w-full">
    <Button variant="link" color="neutral" className="!font-medium !pl-0 !pr-1">
      Components
    </Button>
  </div>,
  <div key="github-link" className="w-full">
    <a
      href="https://github.com/consolelabs/mochi-ui"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="link"
        color="neutral"
        className="!font-medium !pl-1 !pr-0"
      >
        GitHub
      </Button>
    </a>
  </div>,
  <Button
    variant="solid"
    key="get-started-button"
    className="!font-medium w-full"
  >
    Get Started
  </Button>,
]

export const Header = () => {
  return (
    <div className="bg-transparent h-28 fixed top-0 z-50 bg-gradient-to-b from-gray-900 to-transparent w-full">
      <TopBar
        leftSlot={
          <div className="flex items-center gap-4">
            <Logo />
            <Badge label="v1.0" className="!text-blue-300 !bg-blue-1000" />
          </div>
        }
        rightSlot={
          <>
            <DesktopNav navItems={desktopNavItems} />
            <MobileNav navItems={mobileNavItems} />
          </>
        }
        className="!bg-transparent max-w-8xl w-full mx-auto !border-none"
      />
    </div>
  )
}
