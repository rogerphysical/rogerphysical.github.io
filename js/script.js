function to_page(page1, page2) {
	$(page1).animate({left: "-100%"}, 400);
	$(page2).animate({left: "0%"}, 400);
}
function to_page_l(page1, page2) {
	$(page1).animate({left: "100%"}, 400);
	$(page2).animate({left: "0%"}, 400);
}