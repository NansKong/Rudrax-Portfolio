export interface NavLink {
    href: string
    label: string
}

export interface Project {
    id: string
    title: string
    description: string
    image?: string
    tags: string[]
    link?: string
    github?: string
}

export interface PerformanceMetrics {
    fps: number
    memory: number
    renderTime: number
}
