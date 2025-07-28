"use client";

import { Ref, forwardRef, useState, useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const isInViewport = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInViewport) {
      // Reset states when coming into view
      setIsVisible(false);
      setIsLoaded(false);
      
      // First make the container visible with a fade-in
      const visibilityTimer = setTimeout(() => {
        setIsVisible(true);
      }, animationDelay * 1000);

      // Then start the photo animations after a short delay
      const animationTimer = setTimeout(
        () => {
          setIsLoaded(true);
        },
        (animationDelay + 0.4) * 1000
      ); // Add 0.4s for the opacity transition

      return () => {
        clearTimeout(visibilityTimer);
        clearTimeout(animationTimer);
      };
    }
  }, [animationDelay, isInViewport]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1, // Reduced from 0.3 to 0.1 since we already have the fade-in delay
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      // Keep the same z-index throughout animation
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0, // No rotation
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15, // Explicit delay based on order
      },
    }),
  };

  // Rugby-themed photo positions - horizontal layout with random y offsets
  const photos = [
    {
      id: 1,
      order: 0,
      x: "-400px",
      y: "15px",
      zIndex: 80,
      direction: "left" as Direction,
      src: "/photos/fnb-young-guns-champions-2025.jpg",
      alt: "FNB Young Guns Champions 2025 - Victory Celebration"
    },
    {
      id: 2,
      order: 1,
      x: "-280px",
      y: "32px",
      zIndex: 70,
      direction: "left" as Direction,
      src: "/photos/portugal-sevens-victory.jpg",
      alt: "Portugal Sevens Championship Victory"
    },
    {
      id: 3,
      order: 2,
      x: "-140px",
      y: "8px",
      zIndex: 60,
      direction: "right" as Direction,
      src: "/photos/grey-college-team.jpg",
      alt: "Grey College Rugby Team - School Days"
    },
    {
      id: 4,
      order: 3,
      x: "0px",
      y: "22px",
      zIndex: 50,
      direction: "right" as Direction,
      src: "/photos/lions-training-huddle.jpg",
      alt: "Lions Training Session - Team Unity"
    },
    {
      id: 5,
      order: 4,
      x: "140px",
      y: "44px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "/photos/formal-celebration.jpg",
      alt: "Team Celebration - Brotherhood Moment"
    },
    {
      id: 6,
      order: 5,
      x: "280px",
      y: "18px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "/photos/adventure-lifestyle.jpg",
      alt: "Adventure Lifestyle - Off-Field Moments"
    },
    {
      id: 7,
      order: 6,
      x: "400px",
      y: "36px",
      zIndex: 20,
      direction: "left" as Direction,
      src: "/photos/team-celebration-indoor.jpg",
      alt: "Indoor Team Celebration - Victory Atmosphere"
    },
    {
      id: 8,
      order: 7,
      x: "-320px",
      y: "-25px",
      zIndex: 15,
      direction: "right" as Direction,
      src: "/photos/rugby-scrum-action.jpg",
      alt: "Rugby Scrum Action - Game Intensity"
    },
    {
      id: 9,
      order: 8,
      x: "320px",
      y: "-15px",
      zIndex: 10,
      direction: "left" as Direction,
      src: "/photos/rugby-match-action.jpg",
      alt: "Match Action - Competitive Spirit"
    },
  ];

  return (
    <div ref={ref} className="relative">
       <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <div className="relative mb-8 h-[450px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[300px] w-[300px]">
              {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }} // Apply z-index directly in style
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={200}
                    height={200}
                    src={photo.src}
                    alt={photo.alt}
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>
  ) {
    return <Image ref={ref} {...props} />;
  })
);

type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, []);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
        <MotionImage
          className={cn("rounded-3xl  object-cover")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}; 