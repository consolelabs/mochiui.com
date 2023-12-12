import { useEffect } from 'react'
import { useState } from 'react'
import { DropdownShowcase } from '../../components/pages/home/RichComponentsView/Dropdown'

const MochiUIModal = () => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return !isSSR ? (
    <div className="h-[500px] flex justify-center p-6 pt-12">
      <DropdownShowcase />
    </div>
  ) : null
}

export default MochiUIModal
