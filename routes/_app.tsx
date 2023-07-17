import { AppProps } from "$fresh/server.ts";
import GlobalTags from "$store/components/GlobalTags.tsx";
import Theme from "$store/sections/Theme/Theme.tsx";
import GoogleTagManager from "partytown/integrations/GTM.tsx";
import { context } from "$live/live.ts";

const trackingId = "";

function App(props: AppProps) {
  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme />

      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}

      {/* Include Icons and manifest */}
      <GlobalTags />

      {/* Rest of Preact tree */}
      <props.Component />
    </>
  );
}

export default App;
