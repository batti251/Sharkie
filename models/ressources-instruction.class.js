class Instruction extends GameObjects{
x = 1280;
y = 280;
width = 600;
height = 400;
maxCoins;
coinCount = [];
collectedCoinsPercentage;

instructionCache = [
    'assets/img/6.Botones/Instructions 3.png'
];
    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.instructionCache)

    }

}