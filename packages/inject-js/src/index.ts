import { BatchInterceptor } from "@mswjs/interceptors";
import browserInterceptors from "@mswjs/interceptors/lib/presets/browser";

class JSInjector {
  verbose: boolean;
  scriptID?: string;
  interceptor: BatchInterceptor<typeof browserInterceptors>;

  constructor({
    verbose = false,
    scriptID,
    autoInject = true,
  }: {
    verbose?: boolean;
    scriptID: string;
    autoInject?: boolean;
  }) {
    this.verbose = verbose;
    this.scriptID = scriptID;
    this.interceptor = new BatchInterceptor({
      name: "usepico-inject-js",
      interceptors: browserInterceptors,
    });

    if (autoInject) {
      this.interceptor.apply();
    }
  }

  log(message: string) {
    let toLog: string[] = [];

    if (this.scriptID) {
      toLog.push(
        `%c${this.scriptID}`,
        "background-color:#00B3FF;color:#FB00FF;border-radius:1px"
      );
    }

    toLog.push(
      "%cjs-intercept",
      "background-color:#00B3FF;color:#1C1C1C;border-radius:1px",
      message
    );

    console.log(...toLog);
  }
}
