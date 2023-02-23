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
    export class Hash<T>{
        length: number;
        private cells: number;
        private table: T[];
        private names: string[];
        private currentNofDig: number;
        private readonly ALF = 26;
        constructor() { 
            this.length = 0;
            this.currentNofDig = 1;
            this.setCellsNumber();
            this.names = [];
            this.table = [];
        }
        private setCellsNumber(): void {
            this.cells = this.ALF ** this.currentNofDig;
        }
        private resize() {
            this.currentNofDig++;
            this.setCellsNumber();
            let str: string[] = [];
            let val: T[] = [];
            for(let i = 0; i < this.names.length; i++){
                str[i] = this.names[i];
                val[i] = this.table[i];
            }
            this.table = [];
            this.names = [];
            for (let i = 0; i < this.cells; i++){
                if (str[i])
                    this.set(str[i], val[i]);
            }
        }
        private hashCode(name: string) {
            let index = 0;
            for (let i = 0; i < name.length && i < this.currentNofDig; i++){
                  let tmp = name.charCodeAt(i) - 'a'.charCodeAt(0);
                  index += (this.ALF**(i))*tmp;
            }
            console.log(index+' '+name);
            return index;
        }
        set(name: string, elem: T): boolean {
            name = name.toLowerCase()
            if (!this.valid(name)) return false;
            let index = this.hashCode(name);
            if (this.names[index] && this.names[index] !== name) {
                this.resize();
                this.set(name, elem);
            } else {
                this.names[index] = name;
                this.table[index] = elem;
                this.length++;
            }
            return true;
        }
        get(name: string) {
            name = name.toLowerCase()
            if (!this.valid(name)) return null;
            let index = this.hashCode(name);
            return this.table[index];
        } 
        delete(name: string) {
            name = name.toLowerCase()
            if(!this.valid(name)) return false;
            let index = this.hashCode(name);
            this.names[index] = '';
            this.length--;
            return true;
        }
        getKey(elem: T): string {
            let flag = -1;
            for (let i = 0; flag < 0 && i < this.cells; i++){
                if (this.names[i] && this.table[i] === elem)
                    flag = i;
            }
            return this.names[flag];
        }
        getAllDatas(): T[]{
            let data: T[] = [];
            for(let i = 0; i < this.cells && data.length < this.length; i++){
                if(this.names[i]){
                    data.push(this.table[i]);
                }
            }
            return data;
        }
        private valid(name: string): boolean{
            for(let i = 0; i < name.length; i++){
                if(name[i] < 'a' || name > 'z')
                    return false;
            }
            return true;
        }
    }
}