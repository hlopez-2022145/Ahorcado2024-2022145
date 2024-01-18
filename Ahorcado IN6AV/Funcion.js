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

//brazo Izquierdo
canva.beginPath();
canva.moveTo(300,190);
canva.lineTo(270,220);
canva.strokeStyle = "#000000";
canva.lineWidth = 5;
canva.stroke();
canva.closePath();

//brazo derecho
canva.beginPath();
canva.lineTo(300,190);
canva.lineTo(330,220);
canva.strokeStyle = "#000000";
canva.lineWidth = 5;
canva.stroke();
canva.closePath();

//pierna izquierda
canva.beginPath();
canva.moveTo(300,250);
canva.lineTo(270,290);
canva.strokeStyle = "#000000";
canva.lineWidth = 5;
canva.stroke();
canva.closePath();

//pierna derecha
canva.beginPath();
canva.lineTo(300,250);
canva.lineTo(330,290);
canva.strokeStyle = "#000000";
canva.lineWidth = 5;
canva.stroke();
canva.closePath();






