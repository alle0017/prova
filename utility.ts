/*
* this page contains a static class with all the image (to chage them once here)
* and also generic method
*/
class General{
    static grass: Image = img`
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
    `;
    static grassParticels: Image = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . . 
. . . 5 5 5 . . . . . . 5 5 . . 
. . . . 6 7 7 . . . . . 5 6 . . 
. . . . 6 7 7 7 . . . 7 7 6 . . 
. . . . . 6 7 7 . . . 7 6 . . . 
. . . . . . 6 7 . . . . . . . . 
. . . . . . . 6 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
    `;
    static frame: Image = img`
..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
.f8888888888888888888888888888888888888888888888888888888888888888888888888888f.
f88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f8d11111111111111111111111111111111111111111111111111111111111111111111111111d8f
f88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88f
.f8888888888888888888888888888888888888888888888888888888888888888888888888888f.
..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
    `;
    static frameDark: Image = img`
..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
.f8888888888888888888888888888888888888888888888888888888888888888888888888888f.
f88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f8dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd8f
f88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88f
.f8888888888888888888888888888888888888888888888888888888888888888888888888888f.
..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
    `;
    static box: Image[] = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . . 
. . . 5 5 5 . . . . . . 5 5 . . 
. . . . 6 7 7 . . . . . 5 6 . . 
. . . . 6 7 7 7 . . . 7 7 6 . . 
. . . . . 6 7 7 . . . 7 6 . . . 
. . . . . . 6 7 . . . . . . . . 
. . . . . . . 6 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
    `, img`
. f f f f f f f f f f f f f f . 
f 9 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 9 4 4 4 4 4 4 4 4 4 4 4 4 9 f 
f 9 9 4 4 4 4 4 4 4 4 4 4 9 9 f 
f f f f f f f 5 5 f f f f f f f 
. f f f f f f b b f f f f f f . 
f b b b b b f b b f b b b b b f 
f b b b b b b f f b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
f b 9 9 9 9 9 9 9 9 9 9 9 9 b f 
f f f f f f f f f f f f f f f f 
. f f . . . . . . . . . . f f . 
    `];
    static tilemap: tiles.TileMapData = tilemap`
        level
    `;
    private constructor(){}
}
namespace Utility{
    export function stopSprite(sprite: Sprite) {
        let x = sprite.x;
        let y = sprite.y;
        let z = sprite.z;
        let img = sprite.image;
        console.log(sprite.kind());
        let kind = sprite.kind();
        sprite.destroy();
        sprite = sprites.create(img, kind);
        sprite.x = x;
        sprite.y = y;
        sprite.z = z;
        return sprite;
    }
    export function activateSprite(sprite: Sprite){
        controller.moveSprite(sprite);
        scene.cameraFollowSprite(sprite);
    }
}