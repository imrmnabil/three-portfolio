import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { calculateSizes } from '../constants'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Ring'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className='min-h-screen flex flex-col relative w-full'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Nabil <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>Building Awesome Things</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                <Leva hidden />
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault fov={50} position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} rotation={[0, Math.PI / 5, 0]}  scale={1.7}/>
                            <ReactLogo position={sizes.reactLogoPosition} rotation={[0.1, -0.1, 0.1]} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition}  rotation={[0.1, 3.1416, 0.1]}/>
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight intensity={1} position={[10, 10, 10]} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#about" className='w-fit'>
                    <Button name="Lets Explore" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>

            </div>
        </section>
    )
}

export default Hero
