import { defineFormKitConfig } from '@formkit/vue';
import { genesisIcons } from "@formkit/icons";
import { rootClasses } from './formkit.theme.ts';

export default defineFormKitConfig(() => {


  return {

    icons: { ...genesisIcons },
    config: {
      rootClasses
    }
  };
});