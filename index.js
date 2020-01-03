

var casper = require('casper').create();
var x = require('casper').selectXPath;
casper.options.viewportSize = { width: 950, height: 950 };

var url = 'https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
//This is dummy data
var gmail = 'coolguy@gmail.com';
var psw = 'coolest';

casper.start(url, function() {
	enterEmail();
	
	casper.wait(1750, function() {
		this.echo('waiting 1.75 seconds...');
		enterPassword();
   });
});

casper.then(function() {
	this.echo('completed script..');
});

casper.run();

function enterEmail(){
	casper.click('input#identifierId');
	casper.sendKeys("input#identifierId", gmail);
	casper.click("div#identifierNext");
	casper.capture('screenshots/google-login-email.png');

}

function enterPassword(){
	casper.sendKeys("div#password", psw);
	casper.click("div#passwordNext");
	casper.capture('screenshots/google-login-pass.png');
}

//casper.echo(casper.exists('div#password'));
