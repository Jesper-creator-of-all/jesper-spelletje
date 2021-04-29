var game = new Phaser.Game(1920,
    1080,
    Phaser.AUTO,
    '', {
        preload: preload,
        update: update,
        create: create
    });

function preload() {
    game.load.spritesheet(
        'dude',
        '../jesper-spelletje/assets/BODY_skeleton.png',
        64,
        64);

}

function update() {
    cursors = game.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
        player.animations.play('left');
        player.x-= 3;
    } else if (cursors.right.isDown) {
        player.animations.play('right');
        player.x += 3;
    } else if (cursors.up.isDown) {
        player.animations.play('up');
        player.y-= 3;
    } else if (cursors.down.isDown) {
        player.animations.play('down');
        player.y+= 3;
    } else {
        player.animations.stop();
        player.frame = 20;
    }
}



function create() {
    player = game.add.sprite(64, 100, 'dude', 4);
    player.animations.add('left', [9, 10, 11, 12, 13, 14, 15, 16], 10, true);
    player.animations.add('turn', [4], 20, false);
    player.animations.add('right', [27, 28, 29, 30, 31, 32, 33, 34], 10, true);
    player.animations.add('up', [1, 2, 3, 4, 5, 6, 7], 10, true);
    player.animations.add('down', [20, 21, 22, 23, 24, 25, 26], 10, true);

}
