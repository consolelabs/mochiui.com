import { useEffect, useState } from 'react'
import { ModalShowcase } from '../../../components/pages/home/RichComponentsView'

const MochiUIModal = () => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return !isSSR ? (
    <div className="h-[450px] md:h-[478px] p-4 md:p-6 flex justify-center items-center">
      <ModalShowcase />
    </div>
  ) : null
}

export default MochiUIModal
