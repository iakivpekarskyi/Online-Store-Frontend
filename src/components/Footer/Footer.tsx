export default function Footer() {
  return (
    <footer className={'h-24 w-full bg-black text-inverted   '}>
      <div className={'sm:flex items-center  mx-6 sm:mx-20 sm:gap-40 sm:w-[1144px]'}>
        <div className={'mt-3'}>
          <div>
            <a href="tel:(555) 123-45675" rel="noopener noreferrer">
              Phone Number: (555) 123-4567
            </a>
          </div>
          <div>
            Email:
            <span className={'ml-1 underline  sm:no-underline'}>
              <a
                href="mailto:info@coffeetimecafe.com"
                rel="noopener noreferrer">
                info@coffeetimecafe.com
              </a>
            </span>
          </div>
        </div>
        <div>
          <p className={'mt-2 sm:mt-0 sm:mb-0'}>© 2024 Iced Latte</p>
        </div>
      </div>
    </footer >
  )
}

