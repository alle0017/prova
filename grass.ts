let grassKind = SpriteKind.create();
let isGrassAlreadyMoving = false;
scene.onOverlapTile(SpriteKind.Player, img`
. . f f f . . f f f . f f f . . 
. f 7 7 7 f f 6 6 6 f 7 7 5 f . 
f 5 7 7 7 6 f 7 7 7 5 7 7 7 f . 
. f 7 7 7 7 6 7 7 7 7 7 7 f . . 
f 6 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 6 6 7 7 7 7 7 7 7 7 7 7 f 6 f 
. f 6 6 7 7 7 7 7 7 7 f f 6 6 f 
f 6 f f 7 7 7 7 7 7 7 6 6 6 6 f 
f 6 6 5 7 6 6 7 7 6 7 7 6 6 6 f 
f 6 6 6 6 6 6 6 5 6 6 7 6 6 6 f 
f 6 6 6 6 7 6 6 6 6 7 6 6 6 6 f 
6 f 6 f 7 7 6 7 6 6 7 f f 6 f 6 
6 6 f 7 7 6 6 7 6 6 6 7 7 f 6 6 
. 6 f 7 6 6 6 7 7 6 6 6 7 f 6 . 
. 6 6 f f 6 6 6 6 6 6 f f 6 6 . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
`,function(player) {
    let vet = [0,0];
    const MOD = 10;
    if (isGrassAlreadyMoving || !playerInteraction.isMoving) return;
    else isGrassAlreadyMoving = true;
    sprites.destroyAllSpritesOfKind(grassKind);
    let grassParticels = sprites.create(General.grassParticels,grassKind);
    switch(animationFrames.direction){
            case DOWN: vet[1] = -1;
                break;
            case UP: vet[1] = 1;
                break;
            case LEFT: vet[0] = 1;
                break;
            case RIGHT: vet[0] = -1;
                break;
    }
    grassParticels.x = player.x + vet[0]*MOD;
    grassParticels.y = player.y + vet[1]*MOD; 
    setInterval(()=>{
                grassParticels.changeScale(-0.05);     
                },100);
    setTimeout(() => {
        isGrassAlreadyMoving = false;
    }
        , 300)
});