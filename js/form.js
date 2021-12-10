class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('start');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("TDM MODE 2D");
        this.title.position(500, 50);
        this.title.style('font-size', '50px');
        this.title.style('color', 'black');
        this.input.position(870,600);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(460,665);
        this.button.style('width', '150px');
        this.button.style('height', '40px');
        this.button.style("fontSize","40")
        this.button.style('background', 'yellow');
        this.reset.position(1363, 680);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'yellow');
       

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("WAIT " + player.name)
            this.greeting.position(500,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '50px');
            //gameSound.stopSound()
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);

            var playerInfoRef=database.ref('players');
            playerInfoRef.remove();
        });

    }
}