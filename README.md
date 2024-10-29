# nuxt build OOM issue

## Repro Steps

0. If you don't already, have node/npm installed (I have 18.19.1 and 10.2.4, respectively), and yarn enabled (`corepack enable`).
1. `yarn && yarn build`. Observe OOM.

## Notes

I have no idea why, but you can use the nuxt config nitro.experimental.legacyExternals in order to prevent the build from hanging.

Note that commenting out either of the imports in `foo.ts` resolves the issue. It ostensibly has something to do with the package importing/bundling/tree shaking.

The issue may have something to do with the specific aws packages.
Perhaps they are circularly related in some way.
In any case, I would expect the build to error or warn or something rather than OOM.
