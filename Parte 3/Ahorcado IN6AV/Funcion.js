const canvas = document.getElementById('canvas');
let canva = canvas.getContext("2d");

//cabeza
canva.beginPath();
canva.arc(300, 140, 40, 0, Math.PI * 2, false);
canva.strokeStyle = "#000000";
canva.lineWidth = 5;
canva.stroke();
canva.closePath();

//cuerpo
canva.beginPath();
canva.moveTo(300,180);
canva.lineTo(300,250);
canva.strokeStyle = "#000000";
canva.lineWidth = 5;
canva.stroke();
canva.closePath();






