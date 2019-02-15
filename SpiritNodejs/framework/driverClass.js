var webdriver =require('selenium-webdriver'),
  driver;

var getDriver = function(browser) {
	driver = buildDriver(browser);
    return driver;
};

var buildDriver = function(browser) {

	switch(browser){

		case 'Chrome' :

		var chrome = require('selenium-webdriver/chrome');
		var path = require('chromedriver').path;
		return new webdriver.Builder().
	    withCapabilities(webdriver.Capabilities.chrome()).
	    build();

	    break;

	    case 'Firefox' :

	    var firefox = require('selenium-webdriver/firefox');
		var path = require('geckodriver').path;
		var service = new firefox.ServiceBuilder(path).build();
	  	return new webdriver.Builder().
	    withCapabilities(webdriver.Capabilities.firefox()).
	    build();

	    break;

	}

	  	
};

module.exports.getDriver = getDriver;