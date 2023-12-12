import { useEffect, useState } from 'react'
import { DropdownShowcase } from '../../../components/pages/home/RichComponentsView'

const MochiUIModal = () => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return !isSSR ? (
    <div className="h-[450px] md:h-[478px] flex justify-center p-4 md:p-6 pt-12">
      <DropdownShowcase />
    </div>
  ) : null
}

export default MochiUIModal
