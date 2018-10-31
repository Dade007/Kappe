$(function() {
	"use strict";

	$('.info').click(function() {
		$('.info-box').toggleClass('open');
	});

	$('.line-b_color').each(function () {
		let width = $(this).data('skill_script');

		$(this).css('width', width + '%');
	});

});