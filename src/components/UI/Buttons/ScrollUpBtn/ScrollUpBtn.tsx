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
      {showButton && (<button className="fixed bottom-4 right-4 bg-blue-500 p-2 rounded-full" onClick={scrollToTop}>UP</button>)}
    </>
  )
}