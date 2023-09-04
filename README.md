## Reproduction Steps
1. `yarn install`
2. `yarn build && yarn serve`
3. Open http://localhost:8080 in your browser
4. Open the devtool and `Uncaught TypeError: createRxNostr is not a function` will be shown on the console

This problem can be fixed by adding the `"exports.module"` field to the package.json, like: https://github.com/penpenpng/rx-nostr/compare/main...jiftechnify:rx-nostr:patch-1

To see it actually fixes the probrem, follow the steps below:

1. Rewrite package.json as follows:

```diff
  "dependencies": {
-   "rx-nostr": "^1.7.4"
+   "rx-nostr": "https://github.com/jiftechnify/rx-nostr#patched"
  }
```

2. `yarn install && yarn build && yarn serve`
3. Open http://localhost:8080 in the browser, open the devtool, and no error should be shown
