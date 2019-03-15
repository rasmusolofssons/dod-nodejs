class Map {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

     draw (key){
         console.log("in map. Key is: " + key);
         let map = [];

         for(let i = 0; i < this.width; i++){
            map[i] = [];
             for(let y = 0; y < this.height; y++){
                 map[i][y] = ' ';
             }
         }
         map[0][3] = 'm';
         console.info(map);
    }
}

module.exports = Map;