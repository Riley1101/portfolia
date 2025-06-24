import { goto } from "$app/navigation";
import { NAVMAP } from "./constants";

type Panel = "nav" | "main";

const globalKeys = ["Tab"];

const panelKeys = {
  nav: ["0", "1", "2", "3"],
  main: ["j", "k", "g"],
};

export class App {
  panel: Panel;
  buffer: string;
  bufferTimeOut: number;
  bufferTimer: number | undefined;

  constructor() {
    this.panel = $state("nav");
    this.buffer = $state("");
    this.bufferTimeOut = 300;
    this.bufferTimer = $state();
  }

  /**
   * Init keyboard event listener
   */
  public onKeyPress(e: KeyboardEvent) {
    const { key } = e;
    const activeKeys = panelKeys[this.panel];
    if (!globalKeys.includes(key) && !activeKeys.includes(key)) return;

    clearTimeout(this.bufferTimer);

    this.buffer += key;

    /** Double sequences **/
    switch (this.buffer) {
      case "gg":
        break;
      default:
        break;
    }

    /** Double sequences **/
    switch (key) {
      case "Tab":
        this.togglePanel();
        break;
      default:
        break;
    }

    this.bufferTimer = setTimeout(() => {
      switch (key) {
        case "g":
          console.log("Only 'g' was pressed.");
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
          this.goToKey(key);
          break;
        default:
          break;
      }
      this.resetBuffer();
    }, this.bufferTimeOut);
  }

  /**
   * getCurrentPanel
   */
  public getCurrentPanel() {
    return this.panel;
  }

  /**
   * getCurrentBuffer
   */
  public getCurrentBuffer() {
    return this.buffer;
  }

  private goToKey(key: string) {
    const path = NAVMAP.get(key);
    if (path) {
      goto(path.path);
    }
  }

  private resetBuffer() {
    this.buffer = "";
  }

  private togglePanel() {
    if (this.panel === "nav") {
      this.panel = "main";
    } else {
      this.panel = "nav";
    }
  }
}
