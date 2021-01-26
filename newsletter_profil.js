jQuery(document).ready(function($)
{
	// add horizontal lines

	var line = '<hr>';
	$(line).insertAfter('#checkboxfield_4');
	$(line).insertAfter('#checkboxfield_11');
	$(line).insertAfter('#subscription_14');

	// move the checkboxes before the labels

	// Allgemeine Infos
	$('#checkboxfield_4').prepend($('#checkboxfield_4>#input_checkboxfield_4'));

	// Ernährung & Landwirtschaft
	$('#checkboxfield_7').prepend($('#checkboxfield_7>#input_checkboxfield_7'));

	// Finanzplatz Schweiz
	$('#checkboxfield_8').prepend($('#checkboxfield_8>#input_checkboxfield_8'));

	// Klimabewegung
	$('#checkboxfield_9').prepend($('#checkboxfield_9>#input_checkboxfield_9'));

	// Meer
	$('#checkboxfield_10').prepend($('#checkboxfield_10>#input_checkboxfield_10'));

	// Plastik & Verpackung
	$('#checkboxfield_11').prepend($('#checkboxfield_11>#input_checkboxfield_11'));

	// Abmeldung
	// $('#subscription_14').prepend($('#subscription_14>#input_subscription_14'));

	// add images to the checkboxes

	// Allgemeine Infos
	var allgemein = '<img src="https://files.greenpeace.ch/inxmail/profile/allgemein.jpg" alt="" title="">';
	$(allgemein).prependTo('#checkboxfield_4');

	// Ernährung & Landwirtschaft
	var ernaehrung = '<img src="https://files.greenpeace.ch/inxmail/profile/ernaehrung.jpg" alt="" title="">';
	$(ernaehrung).prependTo('#checkboxfield_7');

	// Finanzplatz Schweiz
	var finanzplatz = '<img src="https://files.greenpeace.ch/inxmail/profile/finanzplatz.jpg" alt="" title="">';
	$(finanzplatz).prependTo('#checkboxfield_8');

	// Klimabewegung
	var klima = '<img src="https://files.greenpeace.ch/inxmail/profile/klima.jpg" alt="" title="">';
	$(klima).prependTo('#checkboxfield_9');

	// Meer
	var meer = '<img src="https://files.greenpeace.ch/inxmail/profile/meer.jpg" alt="" title="">';
	$(meer).prependTo('#checkboxfield_10');

	// Plastik & Verpackung
	var plastik = '<img src="https://files.greenpeace.ch/inxmail/profile/plastik.jpg" alt="" title="">';
	$(plastik).prependTo('#checkboxfield_11');

	// Abmeldung
	var abonnement = '<img src="https://files.greenpeace.ch/inxmail/profile/abonnement.jpg" alt="" title="">';
	$(abonnement).prependTo('#subscription_14');

	// add classes to the buttons

	$('input[type=submit]').addClass('btn btn-secondary');
	$('input[type=reset]').addClass('btn btn-secondary');

	// load the sprite.symbol.svg

	$.get("https://files.greenpeace.ch/inxmail/profile/sprite.symbol.svg", function(data) {
		var div = document.createElement("div");
		div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
		document.body.insertBefore(div, document.body.childNodes[0]);
	});

	// replace the sprite.symbol.svg urls

	// search button
	$('svg:eq(0)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#search"></use></svg>');

	// social footer
	$('svg:eq(1)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#facebook"></use></svg>');
	$('svg:eq(2)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#twitter"></use></svg>');
	$('svg:eq(3)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#youtube"></use></svg>');
	$('svg:eq(4)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#instagram"></use></svg>');

	// creative commons
	$('svg:eq(5)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#creative-commons"></use></svg>');

	// hide the language selection for this site
	$('#navbar-dropdown li:eq(1)').hide();

	// let's make a slider instead of the subscription checkbox
	$('#label_subscription_14').empty();
	$('#label_subscription_14').append($('#input_subscription_14'));
	$('#label_subscription_14').addClass('switch');
	$('#label_subscription_14').append('<div class="slider round"></div>');
});