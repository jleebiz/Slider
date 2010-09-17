<html>
	<head>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
		<script src="slider.js"></script>
		<style>
			.slide{
				border: 1px solid green;
				margin-left: 1px;
				padding-left: 1px;
			}
		</style>
		<script> 
			$(document).ready(function(){
				$(".slider").slider("slide");
			});		
		</script>
	</head>

	<body>
		<div id="a" class="slider">
			<div class="slide">
				asdf
			</div>
			<div class="slide">
				asfd
			</div>
			<div class="slide">
				asdf
			</div>
		</div>
		<div id="b" class="slider">
			<div class="slide">
				2
			</div>
			<div class="slide">
				2
			</div>
			<div class="slide">
				2
			</div>
		</div>
	</body>
</html>