/** main ideas */
/** compass for orientation */
/** raid for rare creatures */
function setWallToAllTiles(img: Image) {
    let tile = tiles.getTilesByType(img)
    for (let elem of tile) {
        tiles.setWallAt(elem, true)
    }
}

//  set rocks as walls
//  set rocks as walls
function setMapOnStart() {
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`
        level
    `)
    setWallToAllTiles(img`
        . . . . . . f f f f . . . . . .
        . . . . . f 5 5 5 5 f . . . . .
        . . . . f 5 7 5 5 7 5 f . . . .
        . . . . f 7 7 5 7 7 7 f . . . .
        . . . f 7 7 7 7 7 7 7 7 f . . .
        . . . f 7 7 7 7 7 7 7 7 f . . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 6 7 7 7 7 7 7 7 7 6 f . .
        . f 6 7 7 7 7 7 7 7 7 7 7 6 f .
        . f 6 6 6 6 7 6 7 6 6 7 6 6 f .
        . f 6 6 6 6 6 6 7 6 6 6 6 6 f .
        . . f f 6 f 6 6 6 6 f 6 f f . .
        . . . . f f 6 f 6 6 f f . . . .
        . . . . . f f f f f f . . . . .
        . . . . f 9 9 9 9 9 9 f . . . .
        . . . . . f f 9 9 f f . . . . .
    `)
    //  set trees as walls
    setWallToAllTiles(img`
        . . . . . . . . . b b b b . . . 
                . . . . . . b b b d d d d b . . 
                . . . . . . b d d d d d d b . . 
                . . . . b b d d d d d b b d . . 
                . . . . b d d d d d d b b d b . 
                . . . . c d d d d d b b d b c . 
                . . . b c c b b b b d d b c c . 
                . . b b c c c b d d b c c c c . 
                . b b d d d b b b b b b c c c c 
                . c d d d d d d b d b c c c b c 
                . c b d d d b b d b c c c b b c 
                c b c c c c b d d b b b b b c c 
                c c b b b d d b c c b b b b c c 
                c c c c c c c c c b b b b c c . 
                . c c c c b b b b b b b c c . . 
                . . . . c c c c c c c c . . . .
    `)
}

setMapOnStart()
