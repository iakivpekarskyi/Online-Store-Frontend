import Image from 'next/image'
import arrowup from '../../../../../public/arrowup.svg'
import { useEffect, useState } from 'react'

export default function ScrollUpBtn() {

  const [showButton, setshowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setshowButton(true)
      } else {
        setshowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {showButton && (<button className="fixed bottom-2 right-2 bg-secondary p-1 rounded-full w-12 h-12 hover:scale-105 transition ease-in-out" onClick={scrollToTop}><Image src={arrowup} alt="up_arrow" className={'inline-block'} /></button>)}
    </>
  )
}
