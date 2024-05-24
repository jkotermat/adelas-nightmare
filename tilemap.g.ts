// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101060101010101010601010101060101010101010201010101010101010101010102010101010101010601010103010101010101010201010101010101010101010101010101010101010101010101010101060101010101010101030101010101010101010101010101010101010101010101010101010105010101010101010101010101020101010102010101040101050101010101010101010101010101010101010101010101010101050101010101010201010101010101010101010101010101010101010105010101010102010101020101010101010101010101010101010101010201010101010101010101010101010101`, img`
. . . . . . . . . . 2 . . . . . 
. 2 . . . . 2 . . . . . . 2 . . 
. . . . . . . . . . 2 . . . . . 
. . 2 . . . 2 . . . . . . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . 2 . 
. . . 2 . . . 2 . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . 2 . . . 2 . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.oceanSand8,sprites.builtin.crowd1,sprites.builtin.crowd7,sprites.builtin.crowd2,sprites.builtin.crowd8,sprites.builtin.crowd0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
