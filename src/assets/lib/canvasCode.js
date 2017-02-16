var canvasCode={
	codeNums:'',
	codeLength:6,
	codeChars:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	createCode:function(canvas){
		//清空codeNums
		this.codeNums = '';
		//初始化一些信息
		var ctx = canvas.getContext('2d'),
			width = canvas.width,
			height = canvas.height;
		//清空画布
		ctx.clearRect(0,0,width,height);
		//上背景色
		ctx.fillStyle="#f2f2f2";
		ctx.fillRect(0,0,width,height);
		//字的颜色大小等
		ctx.fillStyle="#3297fd";
		ctx.font="italic bolder 50px 'Arial'";
		//初始化翻转值(1/-1)
		var flip = 1;
		
		//在数组中任意选择6个字
		for(var i = 0; i < this.codeLength; i++){
			//获取数组中随机一个字
        		var charNum = Math.round( Math.random() * (this.codeChars.length-1) );
        	//描绘canvas
	        	flip = i%2?-1:1;
	        	ctx.save();
	        	ctx.rotate(Math.round(3*Math.random())*flip*Math.PI/180);
	        	ctx.fillText(this.codeChars[charNum],(width * (0.1+0.14*i)),height*0.55+Math.round(height*0.15*Math.random()));
	        	ctx.restore();
        	//将code累加
        		this.codeNums += this.codeChars[charNum];
		}
	}
}
export default canvasCode;