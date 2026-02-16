# Angular Version Compatibility

## Supported Angular Versions

This package is designed for **Angular 14.0.0 and above**. It has been tested and verified to work with:

| Angular Version | Status | Notes |
|----------------|--------|-------|
| Angular 14.x | ✅ Fully Supported | Standalone components introduced |
| Angular 15.x | ✅ Fully Supported | All features work |
| Angular 16.x | ✅ Fully Supported | Signals compatible |
| Angular 17.x | ✅ Fully Supported | New control flow compatible |
| Angular 18.x | ✅ Fully Supported | Latest features supported |
| Angular 19.x | ✅ Fully Supported | Enhanced features |
| Angular 20.x | ✅ Fully Supported | Latest improvements |
| Angular 21.x | ✅ Fully Supported | Latest version |

## Angular 14+ Features Used

### Standalone Components
All chart components are standalone components, which means:
- No NgModule required (but NgModule import is still supported)
- Better tree-shaking
- Easier to use in modern Angular applications
- Direct imports in component files

### Modern Build System
- ES2020/ES2022 module formats
- Optimized for Angular CLI 14+
- Compatible with modern bundlers

### TypeScript Support
- TypeScript 4.6+ (Angular 14)
- TypeScript 4.9+ (Angular 15)
- TypeScript 5.0+ (Angular 16+)
- TypeScript 5.4+ (Angular 17+)
- TypeScript 5.6+ (Angular 21+)

## Migration from Older Angular Versions

If you're using Angular 12 or 13, you'll need to upgrade to Angular 14+ to use this package. The upgrade is straightforward:

1. Update Angular CLI:
```bash
ng update @angular/cli @angular/core
```

2. Install ng-recharts:
```bash
npm install ng-recharts recharts react react-dom react-is
```

3. Import components directly (standalone):
```typescript
import { NgRechartsLineChartComponent } from 'ng-recharts';
```

## Browser Support

This package supports all browsers that Angular 14+ supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 is not supported (Angular 14+ doesn't support IE11)

## React Version Compatibility

The package works with React 16.8+ through React 19:
- React 16.8+ (hooks support)
- React 17.x
- React 18.x (recommended)
- React 19.x

## Build Configuration

The package builds multiple formats for maximum compatibility:
- **ES2020** - For Angular 14-15 projects
- **ES2022** - For Angular 16+ projects
- **UMD** - For direct browser usage

Your Angular project will automatically use the appropriate format based on your `tsconfig.json` settings.
