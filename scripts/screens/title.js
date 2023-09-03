class TitleScreen {
    constructor(config) {
        this.element = config.element;
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "assets/img/gui/MainMenu_v0.png";
    }
}