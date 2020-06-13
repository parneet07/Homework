class turtle {
    constructor (x,y){
        x=0,
        y=0,
        angleInRadians= 0,
        penDown= false,
        penColor= "#000000",
        lineWidth= 2
    };
    forward(length){
        x0 = this.x,
        y0 = this.y;
    this.x += length * Math.sin(this.angleInRadians);
    this.y += length * Math.cos(this.angleInRadians);
    if (this.ct) {
        if (this.penDown) {
            this.ct.beginPath();
            this.ct.lineWidth = this.lineWidth;
            this.ct.strokeStyle = this.penColor;
            this.ct.moveTo(x0, y0);
            this.ct.lineTo(this.x, this.y);
            this.ct.stroke();
        }
    } else {
        this.ct.moveTo(this.x, this.y);
    }
    return this;
    };
        left(angleInDegrees){
            this.angleInRadians += angleInDegrees * Math.PI / 180.0;
            return this;
        }right(angleInDegrees){
            this.left(-angleInDegrees);
            return this;
        };angle(){
            return this.angleInRadians * 180.0 / Math.PI;
        };
}
