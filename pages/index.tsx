import { Button } from '@mochi-ui/core'
import { ArrowRightLine } from '@mochi-ui/icons'
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
      </main>
    </>
  )
}
