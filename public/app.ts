customElements.define(
  "app-greeter",
  class extends HTMLElement {
    static observedAttributes = ["default-name"];

    get inputEl(): HTMLInputElement {
      return this.shadowRoot!.getElementById("input") as HTMLInputElement;
    }

    get outputEl(): HTMLElement {
      return this.shadowRoot!.getElementById("output") as HTMLElement;
    }

    connectedCallback() {
      if (!this.shadowRoot) {
        throw new Error("shadow root is null");
      }

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
