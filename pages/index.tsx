import { Button, Footer, Logo, Typography } from '@mochi-ui/core'
import {
  ArrowRightLine,
  BagColored,
  Discord,
  PayLinkColored,
  ProfileShieldColored,
  TipColored,
} from '@mochi-ui/icons'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { GridContent } from '../components/GridContent'
import { Divider } from '../components/Divider'
import { RichComponents } from '../components/pages/home/RichComponentsView'
import { EasyCustomization } from '../components/pages/home/EasyCustomizationView'
import { DesignGuide } from '../components/pages/home/DesignGuideView'
import { CallToAction } from '../components/CallToAction'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  COMPONENTS_LINK,
  DOCS_LINK,
  MOCHI_DISCORD_LINK,
  MOCHI_GITHUB_BUG_REPORT_LINK,
  MOCHI_GITHUB_ISSUES_LINK,
  MOCHI_GITHUB_LINK,
} from '../constants/url'

const inter = Inter({ subsets: ['latin'] })

const previewRoutes = [
  '/examples/rich-components/dropdown',
  '/examples/rich-components/modal',
  '/examples/customization/modal',
]

export default function Home() {
  const { prefetch } = useRouter()

  useEffect(() => {
    previewRoutes.forEach((route) => {
      prefetch(route)
    })
  }, [prefetch])

  return (
    <>
      <Head>
        <title>Mochi UI Kit</title>
        <meta
          content="Stunning and accessible React UI library for web3 application!"
          name="description"
        />
      </Head>

      <main className={inter.className}>
        <Header />

        <Hero
          title="Mochi UI Kit"
          description="Help designers and developers create eye-catching and adaptable products using different Web3 frameworks effortlessly."
          actions={[
            <a
              key="get-started-action"
              href={DOCS_LINK}
              className="inline-block"
            >
              <Button>
                Get Started <ArrowRightLine />
              </Button>
            </a>,
            <a
              key="preview-action"
              href={COMPONENTS_LINK}
              className="inline-block"
            >
              <Button color="white">Preview Online</Button>
            </a>,
          ]}
        />

        <GridContent
          className="my-16 md:my-[88px] min-h-max md:min-h-[250px]"
          data={[
            {
              icon: <TipColored className="w-10 h-10" />,
              title: 'Optimized performance',
              body: 'By optimizing component performance, developers can create smooth and engaging user experiences.',
            },
            {
              icon: <ProfileShieldColored className="w-10 h-10" />,
              title: 'Cross-platform',
              body: 'Save time and enhance interoperability effortlessly by reusing code while keeping the consistency across platforms.',
            },
            {
              icon: <BagColored className="w-10 h-10" />,
              title: 'Customizable',
              body: 'Simplify UI element modifications for changing design trends and user preferences.',
            },
            {
              icon: <PayLinkColored className="w-10 h-10" />,
              title: 'Easy integration',
              body: 'Organizes code in a structure, making it easier to integrate with complex web3 apps.',
            },
          ]}
        />

        <RichComponents />

        <Divider />

        <EasyCustomization />

        <Divider />

        <DesignGuide className="pb-16 md:pb-[88px]" />

        <CallToAction
          className="my-16 md:my-[88px]"
          title={
            <Typography
              level="h3"
              fontWeight="md"
              className="leading-tight !text-neutral-900"
            >
              Compatible, structured, and reusable components
            </Typography>
          }
          description={
            <Typography
              level="p4"
              fontWeight="sm"
              className="!text-neutral-600"
            >
              Create stunning, user friendly and compatible with all platform
              effortlessly.
            </Typography>
          }
          actions={[
            <a
              key="get-started-action"
              href={DOCS_LINK}
              className="inline-block"
            >
              <Button>
                Get Started <ArrowRightLine />
              </Button>
            </a>,
            <a
              key="preview-action"
              href={COMPONENTS_LINK}
              className="inline-block"
            >
              <Button color="white">Preview Online</Button>
            </a>,
          ]}
        />

        <Footer
          copyrightText="Copyright © 2023 Console Labs, All rights reserved"
          logo={<Logo className="!h-9 !w-9" />}
          nav={[
            {
              title: 'Resources',
              links: [
                {
                  href: COMPONENTS_LINK,
                  text: 'Components',
                },
                {
                  href: MOCHI_GITHUB_LINK,
                  text: 'GitHub',
                },
                { href: MOCHI_DISCORD_LINK, text: 'Community' },
              ],
            },
            {
              title: 'Help',
              links: [
                {
                  href: MOCHI_GITHUB_BUG_REPORT_LINK,
                  text: 'Bug Report',
                },
                {
                  href: MOCHI_GITHUB_ISSUES_LINK,
                  text: 'Issues',
                },
              ],
            },
          ]}
          social={[
            {
              href: MOCHI_DISCORD_LINK,
              Icon: Discord,
              title: 'Discord',
            },
          ]}
        />
      </main>
    </>
  )
}
