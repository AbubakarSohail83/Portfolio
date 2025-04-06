import { MoveToNewSection } from '@/widgets/moveToNewSection'
import Image from 'next/image'

export const HeroSection = () => {
    return (
        <section className="flex min-h-screen min-w-screen">
            <div className='relative bg-[#b4a597] w-[30%]'>
                    <Image 
                        src="/test.jpeg" 
                        alt="Abubakar Sohail" 
                        width={450} 
                        height={500} 
                        className='rounded-full shadow-lg absolute left-[50%] top-[25%]' 
                    />
            </div>
            <div className='bg-[#f5f4e0] w-[70%] flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <h1 
                        className={`text-[60px] mb-2 font-bold animate-rotate-x animate-once animate-ease-linear`}
                    >
                        ABUBAKAR SOHAIL
                    </h1>
                    <p 
                        className={`text-[30px] mb-5`}
                    >
                        Software Engineer
                    </p>
                    <div 
                        className={`h-[100px] border-l-2 border-gray-500 mx-4 mb-5`}
                    ></div>
                    <p 
                        className={`text-[20px]`}
                    >
                        "Turning Coffee into Code, One Line at a Time"
                    </p>
                </div>
            </div>
            <MoveToNewSection />
        </section>
    )
}