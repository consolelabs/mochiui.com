import { DesktopNav, TopBar, Button, Badge, MobileNav } from '@mochi-ui/core'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Logo } from '../Logo'

const desktopNavItems = [
  <a
    key="components-button"
    href="https://ds.console.so/?path=/docs/disclosure-accordion--docs"
  >
    <Button variant="link" className="!text-white !font-medium !pl-0 !pr-1">
      Components
    </Button>
  </a>,
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
  <a key="get-started-button" href="https://ds.console.so">
    <Button variant="solid" className="!font-medium">
      Get Started
    </Button>
  </a>,
]

const mobileNavItems = [
  <a
    key="components-button"
    href="https://ds.console.so/?path=/docs/disclosure-accordion--docs"
    className="block"
  >
    <Button variant="link" color="neutral" className="!font-medium !pl-0 !pr-1">
      Components
    </Button>
  </a>,
  <a
    key="github-link"
    href="https://github.com/consolelabs/mochi-ui"
    className="block"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="link" color="neutral" className="!font-medium !px-0">
      GitHub
    </Button>
  </a>,
  <a
    key="get-started-button"
    href="https://ds.console.so"
    className="w-full inline-block"
  >
    <Button variant="solid" className="!font-medium w-full">
      Get Started
    </Button>
  </a>,
]

export const Header = () => {
  const [isScrolledToContent, setIsScrolledToContent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // height of the Hero
      if (window.pageYOffset > 500) {
        setIsScrolledToContent(true)
      } else {
        setIsScrolledToContent(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="relative">
        <div
          className={clsx(
            'h-24 w-full bg-gradient-to-b from-gray-900 to-transparent absolute top-0 transition-opacity duration-300 z-50',
            {
              'opacity-0': isScrolledToContent,
              'opacity-100': !isScrolledToContent,
            },
          )}
        />
        <div
          className={clsx(
            'h-full w-full bg-gradient-to-b from-gray-900 to-gray-900 absolute top-0 transition-opacity duration-300 z-50',
            {
              'opacity-0': !isScrolledToContent,
              'opacity-100': isScrolledToContent,
            },
          )}
        />
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
              <MobileNav
                navItems={mobileNavItems}
                toggleIconClassName="!text-neutral-500"
              />
            </>
          }
          className="!bg-transparent !max-w-8xl w-full mx-auto !border-none absolute top-0 z-50"
        />
      </div>
    </div>
  )
}
