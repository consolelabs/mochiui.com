import { DesktopNav, TopBar, Button, Badge, MobileNav } from '@mochi-ui/core'
import { useMemo } from 'react'
import { COMPONENTS_LINK, DOCS_LINK, MOCHI_GITHUB_LINK } from '@/constants/url'
import { useFetchNPMData } from '@/hooks/useFetchNPMData'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

const desktopNavItems = [
  <Link
    key="components-button"
    href={COMPONENTS_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-sm pr-1 font-medium transition-colors duration-300 hover:text-primary-plain-fg"
    aria-label="Go to Components"
  >
    Components
  </Link>,
  <Link
    key="github-link"
    href={MOCHI_GITHUB_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-sm pl-1 font-medium transition-colors duration-300 hover:text-primary-plain-fg"
    aria-label="Go to GitHub"
  >
    GitHub
  </Link>,
  <div key="divider">
    <div className="w-[1px] h-6 bg-neutral-800" />
  </div>,
  <Link
    key="get-started-button"
    href={DOCS_LINK}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button aria-label="Get started" variant="solid" className="!font-medium">
      Get Started
    </Button>
  </Link>,
]

const mobileNavItems = [
  <Link
    key="components-button"
    href={COMPONENTS_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-neutral-plain-fg transition-colors duration-300 hover:text-primary-plain-fg h-10"
    aria-label="Go to Components"
  >
    Components
  </Link>,
  <Link
    key="github-link"
    href={MOCHI_GITHUB_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-neutral-plain-fg transition-colors duration-300 hover:text-primary-plain-fg h-10"
    aria-label="Go to GitHub"
  >
    GitHub
  </Link>,
  <Link
    key="get-started-button"
    href={DOCS_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-block"
  >
    <Button
      aria-label="Get started"
      variant="solid"
      className="!font-medium w-full"
    >
      Get Started
    </Button>
  </Link>,
]

export const Header = () => {
  const { data, isLoading } = useFetchNPMData()

  const latestVersion = useMemo(() => {
    if (isLoading || !data) {
      return ''
    }

    const versions = Object.keys(data?.versions || {})

    return versions.length ? versions[versions.length - 1] : ''
  }, [data, isLoading])

  return (
    <div className="fixed top-0 z-50 w-full bg-gray-900">
      <TopBar
        leftSlot={
          <div className="flex items-center gap-4">
            <Logo />
            {latestVersion ? (
              <Badge className="!text-blue-300 !bg-blue-1000 animate-fade-in">
                v{latestVersion}
              </Badge>
            ) : null}
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
        className="!bg-transparent w-full mx-auto !border-none absolute top-0 z-50"
      />
    </div>
  )
}
