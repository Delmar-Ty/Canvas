var canvas = document.getElementById('blank');
var ctx = canvas.getContext('2d');
var headPosX = canvas.width / 2;
var headPosY = canvas.height / 3;
var headSize = canvas.height / 6;

//Head Shape
ctx.beginPath();
ctx.strokeStyle =  '#3DDC84';
ctx.fillStyle =  '#3DDC84';
ctx.arc(headPosX, headPosY, headSize, Math.PI, 0);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Antenna
ctx.beginPath();
ctx.lineCap = 'round';
ctx.lineWidth = headSize / 17;
ctx.moveTo(headPosX + ((Math.cos((2 * Math.PI) / 3) * headSize) * -1), headPosY + ((Math.sin((2 * Math.PI) / 3) * headSize) * -1));
ctx.lineTo(headPosX + ((Math.cos((2 * Math.PI) / 3) * headSize) * -1) + headSize / 4, (headPosY + ((Math.sin((2 * Math.PI) / 3) * headSize) * -1) - headSize / 3));
ctx.moveTo(headPosX - ((Math.cos((2 * Math.PI) / 3) * headSize) * -1), headPosY + ((Math.sin((2 * Math.PI) / 3) * headSize) * -1));
ctx.lineTo(headPosX - ((Math.cos((2 * Math.PI) / 3) * headSize) * -1) - headSize / 4, (headPosY + ((Math.sin((2 * Math.PI) / 3) * headSize) * -1) - headSize / 3));
ctx.stroke();
ctx.closePath();

//Eyes
ctx.beginPath();
ctx.lineCap = 'butt';
ctx.lineWidth = 1;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.arc(headPosX - (headSize / 2.3), headPosY - (headSize / 2.3), headSize / 12, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(headPosX + (headSize / 2.3), headPosY - (headSize / 2.3), headSize / 12, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath(); 