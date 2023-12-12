import { useEffect } from 'react'
import { useState } from 'react'
import { ModalShowcase } from '../../components/pages/home/RichComponentsView/Modal'

const MochiUIModal = () => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return !isSSR ? (
    <div className="h-[500px] flex justify-center items-center">
      <ModalShowcase />
    </div>
  ) : null
}

export default MochiUIModal