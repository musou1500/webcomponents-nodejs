customElements.define(
  "app-greeter",
  class extends HTMLElement {
    private inputEl: HTMLInputElement;
    private outputEl: HTMLElement;
    static observedAttributes = ["default-name"];

    connectedCallback() {
      if (!this.shadowRoot) {
        throw new Error("shadow root is null");
      }

      this.inputEl = this.shadowRoot.getElementById(
        "input",
      ) as HTMLInputElement;
      this.outputEl = this.shadowRoot.getElementById("output") as HTMLElement;
      this.inputEl.addEventListener("input", this.onChangeName);
      this.updateMessage();
    }

    private updateMessage(): void {
      const name =
        this.inputEl.value || this.getAttribute("default-name") || "world";
      this.outputEl.textContent = `Hello, ${name}!`;
    }

    disconnectedCallback(): void {
      this.inputEl.removeEventListener("input", this.onChangeName);
    }

    onChangeName = () => {
      this.updateMessage();
    };
  },
);
