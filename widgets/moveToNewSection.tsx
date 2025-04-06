import { ChevronDown } from 'lucide-react'

export const MoveToNewSection = () => {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return(
        <div 
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer`}
            style={{ transitionDelay: '1500ms' }}
            onClick={scrollToNextSection}
        >
            <p className="text-sm mb-2 text-gray-600">Scroll Down</p>
            <div className="animate-bounce">
                <ChevronDown size={24} className="text-gray-600" />
            </div>
        </div>
    )
}