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
  cursor: number;
  maxCursor: number;

  constructor() {
    this.panel = $state("nav");
    this.buffer = $state("");
    this.bufferTimeOut = 200;
    this.bufferTimer = $state();
    this.cursor = $state(0);
    this.maxCursor = $state(0);
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
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
        this.goToKey(key);
        break;
      case "j":
        if (this.cursor < this.maxCursor) {
          console.log("plus one");
          this.cursor++;
        }
        break;
      case "k":
        if (this.cursor > 0) {
          console.log("minus one");
          this.cursor--;
        }
        break;
      default:
        break;
    }

    this.bufferTimer = setTimeout(() => {
      switch (key) {
        case "g":
          console.log("Only 'g' was pressed.");
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

  /**
   * setMaxCursor
   */
  public setMaxCursor(max: number) {
    this.maxCursor = max;
  }

  /**
   * getCursor
   */
  public getCursor() {
    return this.cursor;
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
