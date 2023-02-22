namespace Menu{
    export type MenuStyle = {
        xspacing: number;
        yspacing: number;
        yborder: number;
        xborder: number;
    }
    interface iSetting{
        key: string;
        value: (obj?: GameMenu)=>any;
    }
    const frameKind: number = SpriteKind.create(); 
    export class GameMenu{
        options: iSetting[];
        textSprite: TextSprite[];
        frameType: Image;
        //padding of the menu
        private readonly xpadding: number;
        private readonly ypadding: number;
        private readonly yspacing: number;
        private readonly xspacing: number;
        //property for the menu cursor
        private cursor: number;
        private readonly cursorColor: number;

        private tmpUp: ()=>void;
        private tmpDown: ()=>void;
        private tmpA: ()=>void;

        constructor(menu: iSetting[], padding: MenuStyle, color: number){
            this.options = menu;
            this.xpadding = padding.xspacing;
            this.ypadding = padding.yspacing;
            this.yspacing = padding.yborder;
            this.xspacing = padding.xborder;
            this.cursor = 0;
            this.cursorColor = color;
            this.frameType = General.frame; //todo: choose from setting
        }
        openMenu() {
            if (playerInteraction.menuOpen) return;
            playerInteraction.menuOpen = true;
            player = Utility.stopSprite(player);
            pause(100);
            this.drawMenu();
            this.tmpDown = this.moveInMenu(1);
            this.tmpUp = this.moveInMenu(-1);
            this.tmpA = this.chooseOpt();
            controller.B.addEventListener(ControllerButtonEvent.Pressed, this.closeMenu());
            controller.up.addEventListener(ControllerButtonEvent.Pressed,this.tmpUp);
            controller.down.addEventListener(ControllerButtonEvent.Pressed, this.tmpDown);
            controller.A.addEventListener(ControllerButtonEvent.Pressed, this.tmpA);
        }
        replaceMenu(menu: iSetting[], padding: MenuStyle, color: number){
            this.closeMenu()();
            let replace = new GameMenu(menu,padding,color);
            replace.openMenu();
            return replace;
        }
        private chooseOpt(){
            let obj = this;
            return ()=>{
                obj.options[obj.cursor].value(obj);
            };
        }
        private closeMenu(){
            let obj = this;
            return ()=>{
                playerInteraction.menuOpen = false;
                sprites.destroyAllSpritesOfKind(frameKind);
                for (let elem of obj.textSprite) {
                    elem.destroy();
                }
                obj.textSprite = [];
                Utility.activateSprite(player);
                controller.B.removeEventListener(ControllerButtonEvent.Pressed, obj.closeMenu());
                controller.up.removeEventListener(ControllerButtonEvent.Pressed, obj.tmpUp);
                controller.down.removeEventListener(ControllerButtonEvent.Pressed, obj.tmpDown);
                controller.A.removeEventListener(ControllerButtonEvent.Pressed, obj.tmpA);
            }
        }
        private moveInMenu(inc: 1 | -1){
            let obj = this;
            return ()=>{
                obj.textSprite[obj.cursor].setOutline(1, 15);
                obj.cursor += inc;
                if(obj.cursor >= obj.textSprite.length)
                    obj.cursor = 0;
                else if(obj.cursor < 0)
                    obj.cursor = obj.textSprite.length-1;
                obj.textSprite[obj.cursor].setOutline(1,obj.cursorColor);
            }
        }

        private drawMenu() {
            let camerax = scene.cameraProperty(CameraProperty.X);
            let cameray = scene.cameraProperty(CameraProperty.Y);
            this.textSprite = [];
            for (let i = 0; i < this.options.length; i++) {
                let frame = sprites.create(this.frameType, frameKind);
                frame.x = camerax + this.xpadding + this.xspacing;
                frame.y = cameray + this.ypadding * i + this.yspacing;

                this.textSprite[i] = textsprite.create(this.options[i].key);
                this.textSprite[i].x = camerax + this.xpadding + this.xspacing;
                this.textSprite[i].y = cameray + this.ypadding*i + this.yspacing;
                this.textSprite[i].setOutline(1, 15);
            }
            this.textSprite[0].setOutline(1, this.cursorColor);
        }
    }
}

controller.A.onEvent(ControllerButtonEvent.Pressed,()=>{
    let padding: Menu.MenuStyle = {
        xspacing: 40,//120,
        yspacing: 20,//20,
        yborder: -35,//30,
        xborder: 0
    }

    let setting = [
        {key: 'Name', value: ()=>{
                game.showLongText('Alle0017', DialogLayout.Bottom)
            }
        },
        {key: 'value', value: ()=>{console.log(4);}}
    ];

    let menu = [
        {key: 'Collection', value: ()=>{console.log(0);}},
        { key: 'Bag', value: () => { console.log(1);}},
        { key: 'Save', value: () => { console.log(2); }},
        //setting options => open new menu with various option
        { key: 'Setting', value: (obj: Menu.GameMenu) => {
            let gameMenu = obj.replaceMenu(setting, padding, 12);
            }
        }
    ];

    let gameMenu = new Menu.GameMenu(menu, padding, 12);
    gameMenu.openMenu();
});