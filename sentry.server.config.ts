// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e0101da53f457d1b43491074ddc14991@o4507959098408960.ingest.de.sentry.io/4507959100702800",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
