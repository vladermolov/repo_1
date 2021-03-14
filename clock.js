<!DOCTYPE html>		<!-- Это файл HTML5 --> 
<html>				<!-- Корневой элемент -->
<head>				<!-- Заголовок, здесь располагаются сценарии и стили -->
<meta charset="utf-8">
<title>Простые часы</title>
<script>			// Сценарий на JavaScript

// Определение функции для отображения текущего времени 
function displayTime() {
	var element = document.getElementById("clock"); // Найти элемент с id="clock" 
	var now = new Date();	// Получить текущее время
	element.innerHTML = now.toLocaleTimeString(); // Отобразить его 
	setTimeout(displayTime, 1000);	// Вызвать снова через 1 сек
}

window.onload = displayTime; // Начать отображение времени после загрузки документа

</script>

<style>				/* Таблица стилей CSS для часов */
#clock {				/* Стили применяются к элементу с id="clock" */
	font: bold 24pt sans; 		/* Использовать большой полужирный шрифт */ 
	background: #ddf;			/* Светлый, голубовато-серый фон */
	padding: 10px;				/* Отступы вокруг */
	border: solid black 2px; 		/* И сплошная черная рамка */ 
	border-radius: 10px; 			/* Закругленные углы (если поддерживаются) */
}
</style>
</head>

<body>				<!-- Тело - отображаемая часть документа -->
<h1>Цифровые часы</h1> <!-- Вывести заголовок -->

<span id="clock"></span> <!-- Время выводится здесь -->

</body>
</html>