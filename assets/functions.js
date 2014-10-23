
<!-- start Mixpanel -->
	(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
	for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="//cdn.mxpnl.com/libs/mixpanel-2.2.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
	mixpanel.init("fc79a3543b6873359a12fdaa287bf9b7");

	$(function(){
		mixpanel.track("Tonguesten.com");

	     $('a[href*=#]').click(function() {

	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {

	             var $target = $(this.hash);

	             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

	             if ($target.length) {

	                 var targetOffset = $target.offset().top;

	                 $('html,body').animate({scrollTop: targetOffset}, 500);

	                 return false;
	            }
	       }
	   });
	});
<!-- end Mixpanel --> 

<!-- start myFunctions -->
	function hideShow (identification) {
		var elemento = document.getElementById(identification);
		//console.log(elemento);
		if(elemento.className == "visible"){
			elemento.className = "invisible";
		}else{
			elemento.className = "visible";
		}
	}

	function show (identification) {
		var elemento = document.getElementById(identification);
		//console.log(elemento);
		if(elemento.className == "invisible"){
			elemento.className = "visible";
		}
	}

	function newsletter (subscriptionType) {
		//var kind = document.getElementById("mc-embedded-subscribe-form");
		//console.log(subscriptionType);
		//console.log('kind='+kind.action);
		if(subscriptionType == "teacher"){
			$('#mc-embedded-subscribe-form').attr('action', "https://tonguesten.us4.list-manage.com/subscribe/post?u=6aa5f15a46f8f8bab75c1b533&amp;id=c8e67946e6");
			//console.log($('#mc-embedded-subscribe-form').attr('action'));
		}else{
			$('#mc-embedded-subscribe-form').attr('action', "https://tonguesten.us4.list-manage.com/subscribe/post?u=6aa5f15a46f8f8bab75c1b533&amp;id=d27518147c");
		}
	}	

	function scrollText(identification){
			//console.log(identification);
			texts = ["Just by watching music videos with ReBeats, </br>Paolo, age 12, spends half an hour a day practising English.",
					"ReBeats is the best teaching support for Friday afternoons, </br>when you feel the students are bored and waiting for the bell to ring",
					"Twenty minutes listening to her favourite songs on ReBeats every day, </br>Agnieszka, aged 17, improved her English spelling and grammar."]
			aleat = Math.random() * texts.length;
				aleat = Math.floor(aleat);

			var testimonialText = document.getElementById(identification);
			testimonialText.innerHTML = texts[aleat];
	}
	
	function scrollQuote () {
		var quotesArray = [
			{	name: "Lunilda", 
				info: "Primary School Teacher from Santiago, Chile", 
				quote: "ReBeats is great for listening and spelling abilities!", 
				date: "08/05/2014", 
			 	link: ""},

			{	name: "Elayadi", 
			 	info: "Secondary School Teacher from Morocco", 
			 	quote: "It's very good,  it's easy and funny at the same time!", 
			 	date: "08/08/2014", 
			 	link: ""},

			{	name: "Angie", 
			 	info: "Secondary School Teacher from Ecuador", 
			 	quote: "ReBeats will help my students to learn more, and it's a great way to practice listening skills.", 
			 	date: "06/08/2014", 
			 	link: ""},

			{	name: "Marta", 
			 	info: "Secondary School Teacher from Spain", 
			 	quote: "I like variety in teaching, and ReBeats just does the job!", 
			 	date: "06/08/2014", 
			 	link: ""},

			{	name: "Jo", 
			 	info: "EFL Language Blog Reporter", 
			 	quote: "ReBeats cleverly uses pop music to teach vocabulary, grammar, and other aspects of language. It's modern, fun, and my students enjoy playing with it.", 
			 	date: "04/08/2014", 
			 	link: ""},

			{	name: "Reyes", 
			 	info: "Secondary School Teacher from Brazil", 
			 	quote: "My students like the app - it's slick and cool! They enjoy playing with the songs they love, it's very interactive.", 
			 	date: "04/08/2014", 
			 	link: ""},

			{	name: "Muhammed", 
			 	info: "Secondary School Teacher in Algeria", 
			 	quote: "Music is one of the best way to teach English, my students' speaking skills are improving a lot!", 
			 	date: "01/08/2014", 
			 	link: ""},

			{	name: "Marten", 
			 	info: "Language researcher from the Netherlands", 
			 	quote: "It's simple, it's fun, interesting use of music - ReBeats found the key to any teaching, that teachers work to engage children instead of the other way around.", 
			 	date: "29/07/2014", 
			 	link: ""},

			{	name: "Mostafa", 
			 	info: "30, English learner from Egypt", 
			 	quote: "I can not describe how happy I am! - I look forward to learning more, ReBeats is helping me so much in the big task of learning English.",
			 	date: "31/07/2014", 
			 	link: ""},	

			{	name: "Eva", 
			 	info: "EFL Teacher from Turkey", 
			 	quote: "I’m planning to use it with one2one lessons, I’m sure my students will love it. It's the best option for Friday afternoons, when you feel the students are bored and waiting for the bell to ring.", 
			 	date: "14/07/2014", 
			 	link: "http://evasimkesyan.com/2014/07/14/another-cool-tool-ill-use-this-year-rebeats/"},

			{	name: "Kylie", 
			 	info: "EFL Teacher in Thailand", 
			 	quote: "I would love to try it out on an interactive whiteboard. Students left to watch can shout out suggestions or sing along, karaoke style.. I would be singing regardless!", 
			 	date: "12/08/2014", 
			 	link: "http://cornishkylie.com/category/teacher-tuesday-2/"},

			{	name: "Marta", 
			 	info: "Secondary School Teacher from Spain", 
			 	quote: "This is an amazing app to improve my students' listening skills!", 
			 	date: "14/08/2014", 
			 	link: "http://enjoyableteachingenglish.blogspot.co.uk/2014/08/amazing-web-to-improve-you-listening.html/"},

			{	name: "Aaron", 
			 	info: "Teacher from California, US", 
			 	quote: "I just tried out ReBeats and I think it's a fantastic idea!", 
			 	date: "17/08/2014", 
			 	link: ""}];	

		var random1 = Math.floor(Math.random() * (quotesArray.length - 1)/3);
			var random2 = Math.floor((Math.random() + 1) * (quotesArray.length - 1)/3);
			var random3 = Math.floor((Math.random() + 2) * (quotesArray.length - 1)/3);

			/*console.log('quotesArray.length: ' + quotesArray.length);
			console.log('random1: ' + random1 + ', random2: ' + random2 + ', random3: ' + random3);*/

			var firstQuoteDiv = document.getElementById('quote1');
			var secondQuoteDiv = document.getElementById('quote2');
			var thirdQuoteDiv = document.getElementById('quote3');

			firstQuoteDiv.innerHTML = 	getQuoteDiv (quotesArray[random1]);
			secondQuoteDiv.innerHTML = 	getQuoteDiv (quotesArray[random2]);
			thirdQuoteDiv.innerHTML = 	getQuoteDiv (quotesArray[random3]);
	}

	function getQuoteDiv (element) {
		return '<div class="testimonialText">'
		+	'<span class="tQuote">' + element.quote + '</br></br></span>'
		+	'<span class="signText">' + element.name + ', ' + element.info + '</span>'
		+ '</div>';
	}

	$(document).ready(function(){
		$(".job .details").hide();
		
		$(".job .summary").click(function(){
			$(this).siblings(".details").slideToggle();
		});
	})
<!-- end myFunctions -->
