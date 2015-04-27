var gmail = Gmail();

gmail.observe.on('view_thread', function () {
	console.warn('view_thread');
	setTimeout(function () {
		var $panel = $('.u5');
		console.log($panel);
		$panel.append('<h3>Here we go!</h3>');
	}, 1000);
});
