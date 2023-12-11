import { useEffect, useState } from 'react'

export default function useShowScrollIndicator(ref, userScrolled) {
    const [showScrollIndicator, setShowScrollIndicator] = useState(false)

    const handleScroll = () => {
        setShowScrollIndicator((prev) => !prev)
        userScrolled.current = true

        ref.current.removeEventListener('scroll', handleScroll)
    }

    const checkOverflow = () => {
        const hasOverflowingChildren =
            ref.current.offsetHeight < ref.current.scrollHeight ||
            ref.current.offsetWidth < ref.current.scrollWidth
        
        if (!userScrolled.current) {
            setShowScrollIndicator(hasOverflowingChildren)
        }
    }

    useEffect(() => {
        ref?.current.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', checkOverflow)

        checkOverflow() //inital check

        return () => {
            ref?.current?.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', checkOverflow)
        }
    }, [])

    return showScrollIndicator
}


