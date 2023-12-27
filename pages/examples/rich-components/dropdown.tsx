import { useEffect, useState } from 'react'
import { DropdownShowcase } from '@/components/pages/home/RichComponentsView'

const MochiUIModal = () => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return !isSSR ? (
    <div className="h-[450px] sm:h-[478px] flex justify-center p-4 sm:p-6 pt-8 sm:pt-12 bg-neutral-100">
      <DropdownShowcase />
    </div>
  ) : null
}

export default MochiUIModal
