# Assets Directory

This directory is for storing static assets used in your 3D portfolio.

## Recommended Structure

```
public/assets/
├── images/          # Images, screenshots, project thumbnails
├── models/          # 3D models (.gltf, .glb files)
├── textures/        # Texture files for 3D scenes
└── videos/          # Video files if needed
```

## Usage

Files placed in the `public` directory can be referenced directly:
```tsx
// In React components
<img src="/assets/images/project1.png" alt="Project 1" />

// In Three.js/R3F
<mesh>
  <meshStandardMaterial map={useTexture('/assets/textures/wood.jpg')} />
</mesh>
```

## Tips

- Optimize images before uploading (use WebP format when possible)
- Keep 3D model file sizes small (< 5MB recommended)
- Use compressed textures for better performance
