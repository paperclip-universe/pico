import { BatchInterceptor } from "@mswjs/interceptors";
import browserInterceptors from "@mswjs/interceptors/lib/presets/browser";

const interceptor = new BatchInterceptor({
  name: "usepico-inject-js",
  interceptors: browserInterceptors,
});
interceptor.apply();
