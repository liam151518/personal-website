'use client'

import { useRef } from "react"
import { ImageTrail } from "@/components/ui/image-trail"

export const ImageTrailHero = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Optimized selection of 15 best inspiration photos for smooth performance
  const images = [
    "/inspiration-photos/IMG_9287.HEIC",
    "/inspiration-photos/IMG_2911.HEIC",
    "/inspiration-photos/IMG_2794.HEIC",
    "/inspiration-photos/IMG_2643.HEIC",
    "/inspiration-photos/IMG_2176.HEIC",
    "/inspiration-photos/IMG_1840.HEIC",
    "/inspiration-photos/IMG_8199.HEIC",
    "/inspiration-photos/IMG_5563.HEIC",
    "/inspiration-photos/IMG_8006.HEIC",
    "/inspiration-photos/IMG_3589.JPG",
    "/inspiration-photos/IMG_3830.JPG",
    "/inspiration-photos/IMG_3828.JPG",
    "/inspiration-photos/IMG_3827.JPG",
    "/inspiration-photos/IMG_4240.JPG",
    "/inspiration-photos/IMG_0454.JPG",
  ]

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-center justify-center px-2 md:px-10 py-4 pt-20 sm:pt-4">
      <div className="absolute inset-0 z-0" ref={ref}>
        <ImageTrail 
          containerRef={ref}
          interval={200} // Increased interval for mobile performance
          rotationRange={8} // Further reduced rotation for mobile
        >
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl shadow-elite" // Smaller size for mobile
            >
              <img
                src={url}
                alt={`Inspiration photo ${index + 1}`}
                className="object-cover absolute inset-0 hover:scale-110 transition-transform duration-300"
                loading="lazy" // Lazy loading for better performance
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      <div className="text-center relative z-10 px-4">
        <h1 className="text-responsive-xl font-black gradient-text leading-tight tracking-tight z-10 select-none">
          Liam Xander Santos
        </h1>
      </div>
    </div>
  )
} 