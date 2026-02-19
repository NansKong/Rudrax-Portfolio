import { ReactNode, Suspense } from 'react'
import HeroScene from '@/scenes/HeroScene'

interface LayoutProps {
    children: ReactNode
}

/**
 * Main layout component that manages the strict separation between 3D and UI layers
 * - 3D scenes are positioned as fixed backgrounds (z-index: 0)
 * - UI content overlays on top (z-index: 10+)
 */
function Layout({ children }: LayoutProps) {
    return (
        <div className="relative w-full min-h-screen">
            {/* 3D Background Layer - Fixed position, behind everything */}
            <div className="fixed inset-0 z-0">
                <Suspense fallback={
                    <div className="w-full h-full bg-bg-primary flex items-center justify-center">
                        <div className="text-white text-xl">Loading 3D Scene...</div>
                    </div>
                }>
                    <HeroScene />
                </Suspense>
            </div>

            {/* UI Layer - Scrollable content on top */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default Layout
