import { Button, Footer, Logo, Typography } from '@mochi-ui/core'
import {
  ArrowRightLine,
  BagColored,
  Discord,
  PayLinkColored,
  ProfileShieldColored,
  TipColored,
} from '@mochi-ui/icons'
import { CallToAction } from '../components/CallToAction'
import { GridContent } from '../components/GridContent'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero
          title="Mochi UI Kit"
          description="Help designers and developers create eye-catching and adaptable
            products using different Web3 frameworks."
          actions={[
            <Button key="get-started-action">
              Get Started <ArrowRightLine />
            </Button>,
            <Button color="white" key="preview-action">
              Preview Online
            </Button>,
          ]}
        />

        <GridContent
          className="my-14 md:my-[88px]"
          data={[
            {
              icon: <TipColored className="w-10 h-10" />,
              title: 'Quick access',
              body: 'By optimizing component performance, developers can create smooth and engaging user experiences.',
            },
            {
              icon: <ProfileShieldColored className="w-10 h-10" />,
              title: 'Cross-platform',
              body: 'Works with many tools, so you can use the same UI parts for different apps. This makes it easy to reuse code and promote interoperability.',
            },
            {
              icon: <BagColored className="w-10 h-10" />,
              title: 'Customizable',
              body: 'Make it easy for developers to update UI elements as design trends and user needs change.',
            },
            {
              icon: <PayLinkColored className="w-10 h-10" />,
              title: 'Easy integration',
              body: 'Organizes code in a clear way, making it easier to work on complex web3 apps.',
            },
          ]}
        />

        <CallToAction
          className="mb-14 md:mb-[88px]"
          title={
            <Typography
              level="h3"
              fontWeight="md"
              className="leading-tight !text-neutral-900"
            >
              Organized, reusable components
            </Typography>
          }
          description={
            <Typography
              level="p4"
              fontWeight="sm"
              className="!text-neutral-600"
            >
              Start using our design system and create stunning, adaptable web3
              products.
            </Typography>
          }
          actions={[
            <Button key="get-started-action">
              Get Started <ArrowRightLine />
            </Button>,
            <Button color="white" key="preview-action">
              Preview Online
            </Button>,
          ]}
        />
      </main>

      <Footer
        copyrightText="Copyright © 2023 Console Labs, All rights reserved"
        logo={<Logo className="!h-9 !w-9" />}
        nav={[
          {
            title: 'Resources',
            links: [
              { href: '/', text: 'Components' },
              { href: '/', text: 'GitHub' },
              { href: '/', text: 'Community' },
            ],
          },
          {
            title: 'Help',
            links: [
              { href: '/', text: 'Bug Report' },
              { href: '/', text: 'Issues' },
            ],
          },
        ]}
        social={[
          {
            href: 'https://discord.gg/Y2vvH9rQE4',
            Icon: Discord,
            title: 'Discord',
          },
        ]}
      />
    </>
  )
}
