var zhima={
	canvas:function(id,getScore,getTime){
		//初始化-预定义
		var ele = document.getElementById(id),
			ctx = ele.getContext('2d'),
			colTxt = '#fff',
			colLig = '#fff',
			colBg = '#fff',
			creditTxt='',
			mathVal='';
		//根据分类来确定每一个需要的颜色、文字和位置
		//其实位置阶梯过度值(mathVal)：120--168--216--264--312--360间隔48,将分比例计算出来需要当前分类的位置（各个阶段值总分差不一样需要注意）
		if(getScore>=350 && getScore < 550){
			colTxt = "#fd3232";
			colLig = "#ffa5a5";
			colBg = "#ffa5a5";
			creditTxt = "较差";
			mathVal = 120 + (getScore-350)/200*48;
		}else if(getScore>=550 && getScore < 600){
			colTxt = "#fd7a32";
			colLig = "#ffc2a0";
			colBg = "#ffc2a0";
			creditTxt = "中等";
			mathVal = 168 + (getScore-550)/50*48;
		}else if(getScore>=600 && getScore < 650){
			colTxt = "#00c44e";
			colLig = "#5af698";
			colBg = "#5af698";
			creditTxt = "良好";
			mathVal = 216 + (getScore-600)/50*48;
		}else if(getScore>=650 && getScore < 700){
			colTxt = "#00dedb";
			colLig = "#9bf4f3";
			colBg = "#9bf4f3";
			creditTxt = "优秀";
			mathVal = 264 + (getScore-650)/50*48;
		}else if(getScore>=700 && getScore < 950){
			colTxt = "#3297fd";
			colLig = "#81bfff";
			colBg = "#a8d3ff";
			creditTxt = "极好";
			mathVal = 312 + (getScore-700)/250*48;
		}else{
			console.log('分数不在正常范围内');
		}
	
		//画外环
		ctx.beginPath();
		ctx.lineCap="round";
		ctx.lineWidth = 6;
		ctx.arc(225,225,216,0.84*Math.PI,0.16*Math.PI);
		ctx.strokeStyle=colBg;
		ctx.stroke();
		//画内环
		ctx.beginPath();
		ctx.lineCap="round";
		ctx.lineWidth = 20;
		ctx.arc(225,225,198,0.835*Math.PI,0.165*Math.PI);
		ctx.stroke();
		//文字-刻度-line
		ctx.strokeStyle = '#fff';
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(25,160);
		ctx.lineTo(225,225);
		ctx.lineTo(140,35);
		ctx.moveTo(310,35);
		ctx.lineTo(225,225);
		ctx.lineTo(425,160);
		ctx.stroke();
		//文字-信用度
		ctx.textAlign="center";
		ctx.font = "500 48px microsoft yahei";
		ctx.fillStyle = colTxt;
		ctx.fillText('信用'+creditTxt,225,314);
		//文字-信用数
		ctx.font = "500 120px microsoft yahei";
		ctx.fillText(getScore,225,256);
		//文字-查询时间
		ctx.font = "200 20px microsoft yahei";
		ctx.fillStyle = colLig;
		ctx.fillText('最近查询时间:'+getTime,225,370);
		//文字-beta
		ctx.font = "500 19px microsoft yahei";
		ctx.fillText('BETA',225,150);
		
		//文字-刻度
		ctx.font = "400 18px microsoft yahei";
		ctx.translate(225,225);
		ctx.textBaseline="top";
		var gradText = ['350','较差','550','中等','600','良好','650','优秀','700','极好','950'];
		for(var i = 0; i < gradText.length; i++){
			//第一次旋转值是绝对位置(相较原始顶点位置)，第二次旋转相对位置(相较上一次)
			if(i == 0 ){
				ctx.rotate(240*Math.PI/180);
			}else{
				ctx.rotate(24*Math.PI/180);
			}
			//判断奇偶数，颜色有区别
			if(i%2==0){
				ctx.fillStyle = colTxt;
			}else{
				ctx.fillStyle = colLig;
			}
			//进行填值 半径185
			ctx.fillText(gradText[i],0,-185);
		}
		//标识当前位置,半径216
		ctx.beginPath();
		ctx.fillStyle = colTxt;
		ctx.shadowBlur=7;
		ctx.shadowColor = colTxt;
		ctx.rotate(mathVal*Math.PI/180);
		ctx.arc(0,-216,4.5,0,2*Math.PI);
		ctx.fill();
	}
	
}

export default zhima;