# Package Structure

```
ng-recharts/
├── src/
│   ├── lib/
│   │   ├── base-chart.component.ts          # Base component for all charts
│   │   ├── react-bridge.service.ts           # Service to bridge React and Angular
│   │   ├── line-chart.component.ts           # LineChart wrapper
│   │   ├── bar-chart.component.ts            # BarChart wrapper
│   │   ├── pie-chart.component.ts            # PieChart wrapper
│   │   ├── area-chart.component.ts           # AreaChart wrapper
│   │   ├── composed-chart.component.ts       # ComposedChart wrapper
│   │   ├── chart-config.interface.ts         # TypeScript interfaces
│   │   ├── ng-recharts.module.ts             # Angular module (for Angular < 14)
│   │   └── types.d.ts                        # Type declarations
│   └── public-api.ts                         # Public API exports
├── angular.json                              # Angular workspace config
├── ng-package.json                           # ng-packagr config
├── package.json                              # npm package config
├── tsconfig.json                             # TypeScript config
├── tsconfig.lib.json                         # Library TypeScript config
├── tsconfig.lib.prod.json                    # Production build config
├── tsconfig.spec.json                        # Test config
├── README.md                                 # Main documentation
├── LICENSE                                   # MIT License
├── CHANGELOG.md                              # Version history
├── BUILD.md                                  # Build instructions
├── USAGE.md                                  # Usage examples
├── .gitignore                                # Git ignore rules
├── .npmignore                                # npm ignore rules
├── .editorconfig                             # Editor config
└── .prettierrc                               # Prettier config
```

## Key Files

### Source Files
- **src/lib/base-chart.component.ts**: Abstract base class providing common chart functionality
- **src/lib/react-bridge.service.ts**: Core service that renders React components in Angular
- **src/lib/*-chart.component.ts**: Individual chart component wrappers
- **src/lib/chart-config.interface.ts**: TypeScript interfaces for type-safe configuration
- **src/public-api.ts**: Public API surface exported by the package

### Configuration Files
- **package.json**: npm package metadata, dependencies, and scripts
- **angular.json**: Angular workspace configuration
- **ng-package.json**: ng-packagr configuration for building the library
- **tsconfig.json**: TypeScript compiler configuration

### Documentation
- **README.md**: Main package documentation
- **USAGE.md**: Detailed usage examples
- **BUILD.md**: Build and publish instructions
- **CHANGELOG.md**: Version history

## Build Output

After running `npm run build`, the following structure will be created in `dist/ng-recharts/`:

```
dist/ng-recharts/
├── bundles/
│   └── ng-recharts.umd.js                    # UMD bundle
├── esm2022/
│   └── ng-recharts.mjs                      # ES2022 modules
├── fesm2022/
│   └── ng-recharts.mjs                      # Flattened ES2022 modules
├── index.d.ts                               # TypeScript definitions
├── package.json                             # Package metadata
└── README.md                                # Documentation
```
