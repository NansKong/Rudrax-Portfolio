/**
 * Performance monitoring utilities
 * For tracking FPS and optimizing 3D scenes
 */

export class PerformanceMonitor {
    private frames: number[] = []
    private lastTime: number = performance.now()

    /**
     * Track frame render time and calculate FPS
     */
    update(): number {
        const currentTime = performance.now()
        const delta = currentTime - this.lastTime
        this.lastTime = currentTime

        this.frames.push(delta)
        if (this.frames.length > 60) {
            this.frames.shift()
        }

        const avgDelta = this.frames.reduce((a, b) => a + b, 0) / this.frames.length
        return Math.round(1000 / avgDelta)
    }

    /**
     * Get current FPS
     */
    getFPS(): number {
        return this.update()
    }

    /**
     * Check if performance is acceptable (>= 50 FPS)
     */
    isPerformanceGood(): boolean {
        return this.getFPS() >= 50
    }
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null
            func(...args)
        }

        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false

    return function executedFunction(...args: Parameters<T>) {
        if (!inThrottle) {
            func(...args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}
