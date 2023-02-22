class Vector{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}
class Map{
    coordinate : number[]; // coordinate of map in world => represented by matrix NxM
    spawn : number[]; //posibility of monster spawn for each creature species
    creatureSpawn: number[]; //wich creature can spawn in each map
    maxLevel: number;
    minLevel: number;
    spawnPoint: Vector[]; //spawnpoint of creatures => possible raid
    eventPosition: Vector[]; //event in Map
    npcLocation : Vector[]; //location of npc in Map
    tilemap: tiles.TileMapData;
    constructor(
                coordinate: number[],
                spawn: number[], 
                creatureSpawn: number[], 
                spawnPoint: Vector[],
                eventPosition: Vector[],
                npcLocation: Vector[],
                tilemap: tiles.TileMapData,
                max: number, 
                min: number
                ){
        this.maxLevel = max;
        this.minLevel = min;
        for(let i = 0; i < coordinate.length; i++)
            this.coordinate[i] = coordinate[i];
        for (let i = 0; i < spawn.length; i++){
            this.spawn[i] = spawn[i];
            this.creatureSpawn[i] = creatureSpawn[i];
        }
    }
}