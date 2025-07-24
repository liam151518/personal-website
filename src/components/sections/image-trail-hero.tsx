'use client'

import { useRef } from "react"
import { ImageTrail } from "@/components/ui/image-trail"

export const ImageTrailHero = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Unsplash images that definitely exist
 const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
  ].map(url => `${url}?auto=format&fit=crop&w=300&q=80`)

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-center justify-center px-2 md:px-10 py-4">
      <div className="absolute inset-0 z-0" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-24 h-24 rounded-xl shadow-elite"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="object-cover absolute inset-0 hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      <div className="text-center relative z-10">
        <h1 className="text-responsive-xl font-black gradient-text leading-tight tracking-tight z-10 select-none">
          Liam Xander Santos
        </h1>
      </div>
    </div>
  )
} 