# Angular 14+ Support Summary

This document summarizes the changes made to ensure full Angular 14+ compatibility.

## Changes Made

### 1. Peer Dependencies Updated
- **Before**: Supported Angular 12-18
- **After**: Supports Angular 14-21 (minimum Angular 14.0.0)
- Updated `package.json` peer dependencies to require Angular 14+ and support up to Angular 21

### 2. Build Output Formats
Added support for multiple ES module formats:
- **ES2020** (`fesm2020`, `esm2020`) - For Angular 14-15 projects
- **ES2022** (`fesm2022`, `esm2022`) - For Angular 16+ projects
- **UMD** - For direct browser usage

This ensures the package works optimally with different Angular versions.

### 3. Standalone Components
All components are standalone (introduced in Angular 14):
- ✅ `NgRechartsLineChartComponent` - Standalone
- ✅ `NgRechartsBarChartComponent` - Standalone
- ✅ `NgRechartsPieChartComponent` - Standalone
- ✅ `NgRechartsAreaChartComponent` - Standalone
- ✅ `NgRechartsComposedChartComponent` - Standalone

### 4. TypeScript Configuration
- Target: ES2020 (compatible with Angular 14+)
- Module: ES2020
- Supports TypeScript 4.6+ (Angular 14 requirement)

### 5. NgModule Support
- `NgRechartsModule` still available for NgModule-based apps
- Works seamlessly with Angular 14+ NgModule applications
- Standalone components can be imported into NgModules

### 6. Documentation Updates
- Updated README.md to emphasize Angular 14+ requirement
- Created COMPATIBILITY.md with detailed version support
- Updated all examples to show Angular 14+ usage
- Added Angular version compatibility table

## Features for Angular 14+

### Standalone Components (Recommended)
```typescript
import { NgRechartsLineChartComponent } from 'ng-recharts';

@Component({
  standalone: true,
  imports: [NgRechartsLineChartComponent],
  // ...
})
```

### NgModule Support (Still Available)
```typescript
import { NgRechartsModule } from 'ng-recharts';

@NgModule({
  imports: [NgRechartsModule],
  // ...
})
```

## Testing Matrix

| Angular Version | Standalone Components | NgModule | Build Output |
|----------------|----------------------|----------|--------------|
| Angular 14.x    | ✅                   | ✅       | ES2020       |
| Angular 15.x   | ✅                   | ✅       | ES2020       |
| Angular 16.x   | ✅                   | ✅       | ES2022       |
| Angular 17.x   | ✅                   | ✅       | ES2022       |
| Angular 18.x   | ✅                   | ✅       | ES2022       |
| Angular 19.x   | ✅                   | ✅       | ES2022       |
| Angular 20.x   | ✅                   | ✅       | ES2022       |
| Angular 21.x   | ✅                   | ✅       | ES2022       |

## Migration Notes

If you're upgrading from Angular 12/13:
1. Upgrade to Angular 14+ first
2. Install ng-recharts
3. Use standalone components (recommended) or NgModule

## Benefits of Angular 14+ Support

1. **Modern Angular Features**: Full support for standalone components
2. **Better Tree-Shaking**: Standalone components enable better optimization
3. **Simpler Imports**: Direct component imports without modules
4. **Future-Proof**: Ready for Angular 15, 16, 17, 18, 19, 20, 21, and beyond
5. **Performance**: Optimized build outputs for each Angular version
6. **Latest Version Support**: Fully compatible with Angular 21 (latest)
