function to_page(page1, page2) {
	$(page1).animate({left: "-100%"}, 600);
	$(page2).animate({left: "0%"}, 600);
}
function to_page_l(page1, page2) {
	$(page1).animate({left: "100%"}, 600);
	$(page2).animate({left: "0%"}, 600);
}