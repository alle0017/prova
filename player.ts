const LEFT = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
const ANIMATION_TIME = 50;


let animationFrames = {
    left: [img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
        `,img`
. . . . . . . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 e e f f f . 
. . . f f e e 4 4 e f . . 
. . . f 7 7 e 4 4 e f . . 
. . f f 6 6 f e e f f f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
        `,img`
. . . . . . . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. f f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f f 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e 4 4 4 . 
. . . f 7 7 7 7 e 4 4 e . 
. . f f 6 6 6 6 f e e f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
        `, img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
        `
    ],
    up: [img`
. . . . f f f f . . . . . 
. . f f c c c c f f . . . 
. f f c c c c c c f f . . 
f f c c c c c c c c f f . 
f f c c f c c c c c c f . 
f f f f f c c c f c c f . 
f f f f c c c f c c f f . 
f f f f f f f f f f f f . 
f f f f f f f f f f f f . 
. f f f f f f f f f f . . 
. f f f f f f f f f f . . 
f e f f f f f f f f e f . 
e 4 f 7 7 7 7 7 7 c 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
        `, img`
. . . . . . . . . . . . . 
. . . . . f f f f . . . . 
. . . f f c c c c f f . . 
. f f f c c c c c c f f . 
f f c c c c c c c c c f f 
f c c c c f c c c c c c f 
. f f f f c c c c f c c f 
. f f f f c c f c c c f f 
. f f f f f f f f f f f f 
. f f f f f f f f f f f f 
. . f f f f f f f f f f . 
. . e f f f f f f f f f . 
. . e f f f f f f f f e f 
. . 4 c 7 7 7 7 7 e 4 4 e 
. . e f f f f f f f e e . 
. . . f f f . . . . . . . 
        `, img`
. . . . . . . . . . . . . 
. . . . . f f f f . . . . 
. . . f f c c c c f f . . 
. . f f c c c c c c f f . 
. f f f c c c c c c c f f 
f f f c c c c c c c c c f 
f f c c c f c c c c c c f 
. f f f f f c c c f c f f 
. f f f f c c f f c f f f 
. . f f f f f f f f f f f 
. . f f f f f f f f f f . 
. . f f f f f f f f f e . 
. f e f f f f f f f f e . 
. e 4 4 e 7 7 7 7 7 c 4 . 
. . e e f f f f f f f e . 
. . . . . . . . f f f . . 
        `, img`
. . . . f f f f . . . . . 
. . f f c c c c f f . . . 
. f f c c c c c c f f . . 
f f c c c c c c c c f f . 
f f c c f c c c c c c f . 
f f f f f c c c f c c f . 
f f f f c c c f c c f f . 
f f f f f f f f f f f f . 
f f f f f f f f f f f f . 
. f f f f f f f f f f . . 
. f f f f f f f f f f . . 
f e f f f f f f f f e f . 
e 4 f 7 7 7 7 7 7 c 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
        `
    ],
    right: [img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
        `, img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f f . 
f f e 4 e 1 f 4 4 f f . . 
. f f f e 4 4 4 4 f . . . 
. 4 4 4 e e e e f f . . . 
. e 4 4 e 7 7 7 7 f . . . 
. f e e f 6 6 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
        `, img` 
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f f . . 
. f f f e e 4 4 4 f . . . 
. . f e 4 4 e e f f . . . 
. . f e 4 4 e 7 7 f . . . 
. f f f e e f 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
        `, img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
        `
    ],
    down: [img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
        `, img`
. . . . . . . . . . . . . 
. . . . . f f f f . . . . 
. . . f f f f f f f f . . 
. . f f f f f f c f f f . 
f f f f f f f c c f f f c 
f f f f c f f f f f f f c 
. c c c f f f e e f f c c 
. f f f f f e e f f c c f 
. f f f b f e e f b f f f 
. f f 4 1 f 4 4 f 1 4 f f 
. . f e 4 4 4 4 4 e e f e 
. f e f b 7 7 7 e 4 4 4 e 
. e 4 f 7 7 7 7 e 4 4 e . 
. . . f 6 6 6 6 6 e e . . 
. . . f f f f f f f . . . 
. . . f f f . . . . . . . 
        `, img`
. . . . . . . . . . . . . 
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f c f f f f f f . . 
c f f f c c f f f f f f f 
c f f f f f f f c f f f f 
c c f f e e f f f c c c . 
f c c f f e e f f f f f . 
f f f b f e e f b f f f . 
f f 4 1 f 4 4 f 1 4 f f . 
e f e e 4 4 4 4 4 e f . . 
e 4 4 4 e 7 7 7 b f e f . 
. e 4 4 e 7 7 7 7 f 4 e . 
. . e e 6 6 6 6 6 f . . . 
. . . f f f f f f f . . . 
. . . . . . . f f f . . . 
        `, img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
        `
    ],
    direction: DOWN, //indicate direction of sprite => start in front of user
    start: [img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
        `, //left
        img`
. . . . f f f f . . . . . 
. . f f c c c c f f . . . 
. f f c c c c c c f f . . 
f f c c c c c c c c f f . 
f f c c f c c c c c c f . 
f f f f f c c c f c c f . 
f f f f c c c f c c f f . 
f f f f f f f f f f f f . 
f f f f f f f f f f f f . 
. f f f f f f f f f f . . 
. f f f f f f f f f f . . 
f e f f f f f f f f e f . 
e 4 f 7 7 7 7 7 7 c 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
        `,//up
        img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
        `,//right
        img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
        `//down
        ]
};


let player = sprites.create(animationFrames.start[animationFrames.direction], SpriteKind.Player);
const playerInteraction = {
    isMoving : false,
    fight : false,
    menuOpen : false
};
//let playerSquad: Spirimal[];

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    if (playerInteraction.menuOpen) return;
    animation.runImageAnimation(player, animationFrames.left, ANIMATION_TIME, true);
    animationFrames.direction = LEFT;
    playerInteraction.isMoving = true;
});
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerInteraction.menuOpen) return;
    animation.runImageAnimation(player, animationFrames.up, ANIMATION_TIME, true);
    animationFrames.direction = UP;
    playerInteraction.isMoving = true;
});
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerInteraction.menuOpen) return;
    animation.runImageAnimation(player, animationFrames.down, ANIMATION_TIME, true);
    animationFrames.direction = DOWN;
    playerInteraction.isMoving = true;
});
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if(playerInteraction.menuOpen)return;
    animation.runImageAnimation(player, animationFrames.right, ANIMATION_TIME, true);
    animationFrames.direction = RIGHT;
    playerInteraction.isMoving = true;
});
Utility.activateSprite(player);
// setup for camera and movment
forever(
    ()=>{
        if (!controller.left.isPressed() && 
            !controller.up.isPressed() &&
            !controller.right.isPressed() &&
            !controller.down.isPressed()){
            animation.stopAnimation(animation.AnimationTypes.All, player);
            player.setImage(animationFrames.start[animationFrames.direction]);
            playerInteraction.isMoving = false;
        }
    }
)