import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

// Uses the Worker's own static ASSETS binding for the incremental cache
// instead of a dedicated R2 bucket. This removes the R2 API call that the
// `deploy` step's populate-cache made — so deploying no longer requires the
// Cloudflare API token to carry R2 permissions. The app is almost entirely
// dynamic anyway, so a persistent ISR cache isn't needed.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache
});
