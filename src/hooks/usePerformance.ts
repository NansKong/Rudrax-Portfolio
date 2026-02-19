import { useState, useEffect } from 'react'
import { PerformanceMonitor } from '@/utils/performance'

/**
 * Hook for monitoring application performance
 * Returns current FPS and performance status
 */
export function usePerformance() {
    const [fps, setFps] = useState(60)
    const [isGood, setIsGood] = useState(true)

    useEffect(() => {
        const monitor = new PerformanceMonitor()
        let animationFrameId: number

        const checkPerformance = () => {
            const currentFps = monitor.getFPS()
            setFps(currentFps)
            setIsGood(monitor.isPerformanceGood())
            animationFrameId = requestAnimationFrame(checkPerformance)
        }

        animationFrameId = requestAnimationFrame(checkPerformance)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [])

    return { fps, isGood }
}
