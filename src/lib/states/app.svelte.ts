type Panel = "nav" | "main";

const keys = ["Tab", "g"];

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
		if (!keys.includes(key)) return;

		clearTimeout(this.bufferTimer);
		this.buffer += key;

		/** Double sequences **/
		switch (this.buffer) {
			case "gg":
				console.log("double");
				this.resetBuffer();
				break;
			default:
				break;
		}

		/** Double sequences **/
		switch (key) {
			case "Tab":
				this.togglePanel();
				this.resetBuffer();
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
	getCurrentPanel() {
		return this.panel;
	}

	private resetBuffer() {
		this.buffer = "";
	}

	private togglePanel() {
		console.log("toggle", this.panel);
		if (this.panel === "nav") {
			this.panel = "main";
		} else {
			this.panel = "nav";
		}
	}

	/**
	 * getPanel
	 */
	public getPanel() {
		return this.panel;
	}

	/**
	 * getBuffer
	 */
	public getCmds() {
		return this.buffer;
	}
}
