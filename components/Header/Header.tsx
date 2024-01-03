import { DesktopNav, TopBar, Button, Badge, MobileNav } from '@mochi-ui/core'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { COMPONENTS_LINK, DOCS_LINK, MOCHI_GITHUB_LINK } from '@/constants/url'
import { useFetchNPMData } from '@/hooks/useFetchNPMData'
import { Logo } from '@/components/Logo'

const desktopNavItems = [
  <a
    key="components-button"
    href={COMPONENTS_LINK}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      aria-label="Go to Components"
      variant="link"
      className="!text-white !font-medium !pl-0 !pr-1"
    >
      Components
    </Button>
  </a>,
  <a
    key="github-link"
    href={MOCHI_GITHUB_LINK}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      aria-label="Go to GitHub"
      variant="link"
      className="!text-white !font-medium !pl-1 !pr-0"
    >
      GitHub
    </Button>
  </a>,
  <div key="divider">
    <div className="w-[1px] h-6 bg-neutral-800" />
  </div>,
  <a
    key="get-started-button"
    href={DOCS_LINK}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button aria-label="Get started" variant="solid" className="!font-medium">
      Get Started
    </Button>
  </a>,
]

const mobileNavItems = [
  <a
    key="components-button"
    href={COMPONENTS_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Button
      aria-label="Go to Components"
      variant="link"
      color="neutral"
      className="!font-medium !pl-0 !pr-1"
    >
      Components
    </Button>
  </a>,
  <a
    key="github-link"
    href={MOCHI_GITHUB_LINK}
    className="block"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      aria-label="Go to GitHub"
      variant="link"
      color="neutral"
      className="!font-medium !px-0"
    >
      GitHub
    </Button>
  </a>,
  <a
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
  </a>,
]

export const Header = () => {
  // const [isScrolledToContent, setIsScrolledToContent] = useState(false)

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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Badge
                  label={`v${latestVersion}`}
                  className="!text-blue-300 !bg-blue-1000"
                />
              </motion.div>
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
        className="!bg-transparent !max-w-8xl w-full mx-auto !border-none absolute top-0 z-50"
      />
    </div>
  )
}
