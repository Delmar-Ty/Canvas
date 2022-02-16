var canvas = document.getElementById('blank');
var ctx = canvas.getContext('2d');
var headPosX = canvas.width / 2;
var headPosY = canvas.height / 3;
var headSize = canvas.height / 5;

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

//Body
ctx.beginPath();
ctx.lineCap = 'butt';
ctx.lineWidth = 1;
ctx.fillStyle = '#3DDC84';
ctx.strokeStyle = '#3DDC84';
ctx.moveTo(headPosX + headSize, headPosY + headSize * 0.1);
ctx.lineTo(headPosX - headSize, headPosY + headSize * 0.1);
ctx.lineTo(headPosX - headSize, (headPosY + headSize * 0.1) + headSize * 1.1);
ctx.arcTo(headPosX - headSize, (headPosY + headSize * 0.1) + headSize * 1.5, headPosX + (headSize * 1.75), (headPosY + headSize * 0.1) + headSize * 1.5, headSize / 4);
ctx.lineTo(headPosX + (headSize / 1.75), (headPosY + headSize * 0.1) + headSize * 1.5);
ctx.arcTo(headPosX + headSize, (headPosY + headSize * 0.1) + headSize * 1.5, headPosX + headSize, (headPosY + headSize * 0.1) + headSize * 1.1, headSize / 4);
ctx.lineTo(headPosX + headSize, headPosY + headSize * 0.1);
ctx.stroke();
ctx.fill();
ctx.closePath();

    //Legs

//Leg Left
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = '#3DDC84';
ctx.fillStyle = '#3DDC84';
ctx.rect(headPosX - (headSize / 1.7), (headPosY + headSize * 0.1) + headSize * 1.5, headSize / 2.5, headSize / 2);
ctx.arc(headPosX - (headSize / 1.7) + (headSize / 2.5) / 2, ((headPosY + headSize * 0.1) + headSize * 1.5) + headSize / 2, (headSize / 2.5) / 2, 0, Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Leg Right
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = '#3DDC84';
ctx.fillStyle = '#3DDC84';
ctx.rect((headPosX + (headSize / 1.7)) - headSize / 2.5, (headPosY + headSize * 0.1) + headSize * 1.5, headSize / 2.5, headSize / 2);
ctx.arc(((headPosX + (headSize / 1.7)) - headSize / 2.5) + (headSize / 2.5) / 2, ((headPosY + headSize * 0.1) + headSize * 1.5) + headSize / 2, (headSize / 2.5) / 2, 0, Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

    //Arms

//Arm Right
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = '#3DDC84';
ctx.fillStyle = '#3DDC84';
ctx.arc(((headPosX + headSize) + headSize * 0.1) + (headSize / 2.5) / 2, (headPosY + headSize * 0.05) + ((headSize / 2.5) / 2), (headSize / 2.5) / 2, Math.PI, 0);
ctx.rect((((headPosX + headSize) + headSize * 0.1)), (headPosY + headSize * 0.05) + ((headSize / 2.5) / 2), headSize / 2.5, headSize / 1.25);
ctx.arc(((headPosX + headSize) + headSize * 0.1) + (headSize / 2.5) / 2, ((headPosY + headSize * 0.05) + ((headSize / 2.5) / 2)) + headSize / 1.25, (headSize / 2.5) / 2, 0, Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Arm Left
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = '#3DDC84';
ctx.fillStyle = '#3DDC84';
ctx.arc(((headPosX - headSize) - headSize * 0.1) - (headSize / 2.5) / 2, (headPosY + headSize * 0.05) + ((headSize / 2.5) / 2), (headSize / 2.5) / 2, Math.PI, 0);
ctx.rect((((headPosX - headSize) - headSize * 0.1)) - headSize / 2.5, (headPosY + headSize * 0.05) + ((headSize / 2.5) / 2), headSize / 2.5, headSize / 1.25);
ctx.arc(((headPosX - headSize) - headSize * 0.1) - (headSize / 2.5) / 2, ((headPosY + headSize * 0.05) + ((headSize / 2.5) / 2)) + headSize / 1.25, (headSize / 2.5) / 2, 0, Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();