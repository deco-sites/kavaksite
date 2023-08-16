import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style
        dangerouslySetInnerHTML={{
          __html: `
                @font-face {
                  font-family: "title";
                  src: url(${asset("/fonts/noka-semibold.woff2")}) format('woff2');
                  font-weight: normal;
                  font-style: normal;
                  font-display: block;
                }`
        }}
      />
    </Head>
  );
}

export default GlobalTags;
