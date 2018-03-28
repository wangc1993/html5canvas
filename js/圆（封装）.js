/*对一个圆的简单封装*/
function Circle( option ){
    this._init(option);
};
Circle.prototype = {
    _init: function(option){
        this.X = option.X === 0? 0 : (option.X || 100);/*目标点的X*/
        this.Y = option.Y === 0? 0 : (option.Y || 100);/*目标点的Y*/
        this.rad = option.rad || 10;/*圆的半径*/
        this.startAngle = option.startAngle ===0?0:(option.startAngle || -90);/*起始角度*/
        this.endAngle = option.endAngle || 0;/*结束角度*/
        this.direction = option.direction || false;/*画弧的方向*/
        this.scaleX = option.scaleX || 1;/*X轴缩放*/
        this.scaleY = option.scaleY || 1;/*Y轴缩放*/
        this.opacity = option.opacity || 1;/*透明度*/
        this.rotation = option.rotation || 0;/*旋转的角度*/
        this.strokeStyle = option.strokeStyle || 'red';/*描边的属性*/
        this.fillStyle = option.fillStyle || 'blue';/*填充的属性*/
    },
    /*渲染*/
    render: function(ctx){
        ctx.save();/*保存之前的状态，防止污染*/
        ctx.beginPath();/*开始绘制路径*/
        var startAngle = this.startAngle * Math.PI / 180;
        var endAngle = this.endAngle * Math.PI / 180;
        ctx.translate(this.X, this.Y);/*将画布中心移至（x，y），主要防止旋转按照（0,0）转*/
        ctx.rotate(this.rotation * Math.PI / 180 );/*设置旋转角度*/
        ctx.globalAlpha = this.opacity;/*设置透明度*/
        ctx.scale( this.scaleX, this.scaleY );/*设置缩放比*/
        ctx.arc(this.X, this.Y, this.rad, startAngle, endAngle, this.direction);/*绘制圆路径*/
        ctx.fillStyle = this.fillStyle;/*填充样式*/
        ctx.strokeStyle = this.strokeStyle;/*描边样式*/
        ctx.fill();/*开始填充*/
        ctx.stroke();/*开始描边*/
        ctx.restore();/*返回保存时的状态*/
    }
}