function DrawImg(option){
    this._init(option);
}
DrawImg.prototype = {
    _init: function(option) {
        this._imgSrc = option.imgSrc || '';/*这边是分号*/
        this.originalX = option.originalX === 0?0:(option.originalX || 10);
        this.originalY = option.originalY === 0?0:(option.originalX || 10);
        this.imgWidth = option.imgWidth || 40;
        this.imgHeight = option.imgHeight || 65;
        this.X = option.X === 0?0:(option.X || 10);
        this.Y = option.Y === 0?0:(option.Y || 10);
        this.w = option.w || 40;
        this.h = option.h || 65;
        this.fps = option.fps || 10;/*每秒多少帧*/
        this._dirIndex = option.dirIndex || 0;/*控制方向的参数*/
    },
    draw: function(ctx){
        /*先加载图片*/
        var img = new Image();
        img.src = this._imgSrc;
        var self = this;
        var index = 0;
        img.onload = function(){
            /*开始绘图(单个图片)*/
            /*ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(img, self.originalX, self.originalY, self.imgWidth, self.imgHeight, self.X, self.Y, self.w, self.h);*/
            /*绘制序列帧*/
            setInterval(function(){
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(img,index * self.imgWidth + self.originalX,self._dirIndex * self.imgHeight + self.originalY, self.imgWidth, self.imgHeight, self.X, self.Y, self.w, self.h);
                index++;
                index %=4;
            },1000/self.fps);
        }
    },
    /*判断方向*/
    changeDir: function(dir){
        if(dir == 'left'){
            this._dirIndex = 1;
        }
        if(dir == 'right'){
            this._dirIndex = 2;
        }
        if(dir == 'top'){
            this._dirIndex = 0;
        }
        if(dir == 'bottom'){
            this._dirIndex = 3;
        }
    }
}