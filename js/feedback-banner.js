// if you want the banner off, just comment out the file 

var alphaBanner = document.getElementsByTagName('BODY')[0];
alphaBanner.insertAdjacentHTML('afterbegin', '<section class="experimental alpha-top" role="banner"><h2 class="wb-inv">This webpage is in alpha</h2><div class="container"><small><span class="alpha-label">Alpha</span>&nbsp;&nbsp; This is an experimental version of Canada.ca for public testing.</small></div></section>');

/*<section class="experimental alpha-top" role="banner"><h2 class="wb-inv">This webpage is alpha and is looking for feedback</h2><div class="container mrgn-tp-sm mrgn-bttm-sm"><small>Provide feedback for this prototype web page</small>&nbsp;&nbsp;<a href="https://craepmd.optimalworkshop.com/questions/b4r456f3/questions/before" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">Feedback form<span class="wb-inv"> opens in new window</span></a></div></section > */

//Renders search disabled
$('#wb-srch-sub').attr("disabled", true);

//Seperate script to null all canada.ca links to a 404 page (including GC menu) and redirect some in menu
$( ".gcweb-menu" ).on( "wb-ready.gcweb-menu", function( event ) {
	$("a[href='https://www.canada.ca/en/services/taxes.html']").attr("href", "https://cra-proto.github.io/cap/taxes.html").addClass("prototype");
	$("a[href='https://www.canada.ca/en/services/taxes/income-tax.html']").attr("href", "https://cra-proto.github.io/cap/income-tax.html").addClass("prototype");
	$("a[href='https://www.canada.ca/en/revenue-agency/corporate/contact-information.html']").attr("href", "https://cra-proto.github.io/cap/contact-cra.html").addClass("prototype");
	$("a[href='https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html']").attr("href", "https://cra-proto.github.io/cap/cra-sign-in.html").addClass("prototype");
	$("a[href='https://www.canada.ca/en/revenue-agency/services/e-services/my-business-account.html']").attr("href", "https://cra-proto.github.io/cap/my-business-account.html").addClass("prototype");
	$("a[href='https://www.canada.ca/en/services/taxes/child-and-family-benefits.html']").attr("href", "https://cra-proto.github.io/cap/tax-credits-benefits.html").addClass("prototype");
    $("a[href='https://www.canada.ca/en/services/taxes/income-tax/business-or-professional-income.html']").attr("href", "https://cra-proto.github.io/cap/business-or-professional-income.html").addClass("prototype");
	$("a[href='./cra.html']").attr("href", "https://cra-proto.github.io/cap/cra.html").addClass("prototype");
	$(".gcweb-menu a:not(.prototype)").attr("href", "https://cra-proto.github.io/cap/404.html");	
	$("a[href*='canada.ca']").attr("href", "https://cra-proto.github.io/cap/404.html");
	$("a[href*='.gc.ca/']").attr("href", "https://cra-proto.github.io/cap/404.html");
});

//Seperate script to null all canada.ca links to a 404 page
$(document).ready(function(){$("a[href*='canada.ca']").attr("href", "https://cra-proto.github.io/cap/404.html");});

//Remove visited link design from 404 pages
var visited_link_styling = "<style> a[href='https://cra-proto.github.io/cap/404.html']:visited{ color:#284162; } </style>"; $('head').append( visited_link_styling );

