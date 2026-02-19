import LiquidEther from '@/components/three/LiquidEther'

/**
 * Hero 3D Scene with Liquid Ether Background
 * Interactive fluid simulation that responds to mouse movement
 */
function HeroScene() {
    return (
        <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            style={{ width: '100%', height: '100%' }}
        />
    )
}

export default HeroScene
