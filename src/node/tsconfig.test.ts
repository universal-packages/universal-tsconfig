import { nodeTsConfig } from './tsconfig'

export function nodeTsconfigTest() {
  const config = nodeTsConfig()

  const expected = {
    compilerOptions: {
      allowUnreachableCode: false,
      allowUnusedLabels: false,
      alwaysStrict: true,
      exactOptionalPropertyTypes: false,
      noFallthroughCasesInSwitch: false,
      noImplicitAny: false,
      noImplicitOverride: true,
      noImplicitReturns: true,
      noImplicitThis: true,
      noPropertyAccessFromIndexSignature: false,
      noUncheckedIndexedAccess: false,
      noUnusedLocals: true,
      noUnusedParameters: true,
      strict: true,
      strictBindCallApply: true,
      strictBuiltinIteratorReturn: true,
      strictFunctionTypes: true,
      strictNullChecks: true,
      strictPropertyInitialization: true,
      useUnknownInCatchVariables: true,
      allowArbitraryExtensions: true,
      allowImportingTsExtensions: false,
      allowUmdGlobalAccess: false,
      baseUrl: './',
      module: 'ESNext',
      moduleResolution: 'bundler',
      noResolve: false,
      noUncheckedSideEffectImports: false,
      resolveJsonModule: true,
      resolvePackageJsonExports: true,
      resolvePackageJsonImports: true,
      rewriteRelativeImportExtensions: true,
      declaration: true,
      declarationMap: true,
      downlevelIteration: false,
      emitBOM: false,
      emitDeclarationOnly: false,
      importHelpers: false,
      inlineSourceMap: false,
      inlineSources: false,
      mapRoot: '',
      newLine: 'LF',
      noEmit: false,
      noEmitHelpers: false,
      noEmitOnError: false,
      outDir: './dist',
      preserveConstEnums: true,
      removeComments: false,
      sourceMap: true,
      stripInternal: true,
      allowJs: false,
      checkJs: false,
      maxNodeModuleJsDepth: 0,
      disableSizeLimit: false,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      isolatedDeclarations: false,
      isolatedModules: true,
      preserveSymlinks: false,
      verbatimModuleSyntax: false,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      lib: ['esnext'],
      moduleDetection: 'auto',
      noLib: false,
      target: 'ESNext',
      useDefineForClassFields: true,
      diagnostics: false,
      explainFiles: false,
      extendedDiagnostics: false,
      listEmittedFiles: false,
      listFiles: false,
      noCheck: false,
      traceResolution: false,
      composite: false,
      disableReferencedProjectLoad: false,
      disableSolutionSearching: false,
      disableSourceOfProjectReferenceRedirect: false,
      incremental: false,
      noErrorTruncation: true,
      preserveWatchOutput: false,
      pretty: true,
      skipDefaultLibCheck: false,
      skipLibCheck: false,
      assumeChangesOnlyAffectDirectDependencies: false
    }
  }

  if (JSON.stringify(config) !== JSON.stringify(expected)) {
    console.log(JSON.stringify(config, null, 2))
    console.error('node/tsconfig.json is not valid')
    process.exit(1)
  } else {
    console.log('node/tsconfig.json is valid')
  }
}
