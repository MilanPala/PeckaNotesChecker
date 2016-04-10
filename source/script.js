function check() {
	$('tbody').each(function() {
		var lastTime = null;
		$('tr').each(function() {
			if($(this).find('td').size() > 2) {
				if(lastTime) {
					var currentTime = $(this).find('td').eq(0).text().split(':');
					
					if(lastTime[0] === currentTime[0] && lastTime[1] === currentTime[1]) $(this).find('td').eq(0).css('background-color', '#6C6');
					else {
						$(this).find('td').eq(0).css('background-color', '#FC6');
					}
				}
				lastTime = $(this).find('td').eq(1).text().split(':');
			}
		});
		lastTime = null;
	});
}

$(function() {
	setTimeout(check, 1000);
	setInterval(check, 3000);
});
