/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// `virtual:starlight/user-images` is declared in Starlight's `virtual-internal.d.ts`,
// which is not listed in the package's `exports`, so it cannot be pulled in with a
// `/// <reference types="..." />`. Starlight's own `SiteTitle.astro` reads `logos`
// from it, and our override does the same, so declare it here.
declare module 'virtual:starlight/user-images' {
  type ImageMetadata = import('astro').ImageMetadata;
  export const logos: {
    dark?: ImageMetadata;
    light?: ImageMetadata;
  };
}
