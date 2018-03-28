function CircleText(option){
    this._init(option);
};
CircleText.prototype = {
    _init: function(option){
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        this.text = option.text || 'canvas';
        this.innerStyle = option.innerStyle || 'red';
        this.outerStyle = option.outerStyle || 'blue';

        /*创建一个组*/
        this.group = new Konva.Group({
            x: this.x,
            y: this.y
        });
        /*初始化一个内部圆*/
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            radius: this.innerRadius,
            fill: this.innerStyle,
            opacity: .8
        });
        /*将内部圆加到组中*/
        this.group.add(innerCircle);
        /*初始化一个圆环*/
        var outerRing = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.outerStyle,
            opacity: .3
        });
        /*将圆环加到组中*/
        this.group.add(outerRing);
        /*初始化一段文字*/
        var text = new Konva.Text({
            x: 0 - this.outerRadius,
            y: -8,
            width: this.outerRadius * 2,
            fontSize: 17,
            fontStyle: 'bold',
            text: this.text,
            align: 'center',
            fill: '#fff'
        });
        /*将文本添加到组内*/
        this.group.add(text);
    },
    //把 组添加到层或者其他组中。
    addToGroupOrLayer: function( arg ) {
        arg.add( this.group );
    }
};