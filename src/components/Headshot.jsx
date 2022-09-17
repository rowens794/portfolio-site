import React from 'react'
import Image from 'next/future/image'

export default function Headshot() {
  return (
    <div className="relative hidden lg:flex lg:h-full lg:justify-end ">
      <div className="relative z-10 flex-shrink-0 justify-end overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600 lg:h-[384px] lg:w-[384px]">
        <Image
          src="/images/headshot.png"
          width="290"
          height="200"
          alt="Ryan XXXXXXX"
          className="m-auto -translate-y-6"
        />
      </div>
      <div className="absolute bottom-0 z-0 mx-auto overflow-hidden rounded-b-full lg:h-[420px] lg:w-[384px]">
        <div className="absolute bottom-0 h-full w-full ">
          <Image
            src="/images/headshot.png"
            width="290"
            height="200"
            alt="Ryan XXXXXX"
            className="mx-auto translate-y-3"
          />
        </div>
      </div>
    </div>
  )
}
