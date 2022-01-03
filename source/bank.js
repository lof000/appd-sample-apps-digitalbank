window.onload = function () {
	try {

		//set cookie with current transaction name
		function setCookieTr(cvalue) {
			var cname = 'bt-tr-name-bk'
			var d = new Date();
			d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			console.log('cookie ...');
		};

		//get cookie with current transaction name
		function getCookieTr() {
			var cname = 'bt-tr-name-bk'
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
		//set cookie with username - to be used by APM agent
		function setusercookie(cvalue) {
			var cname = 'bt-user-cookie'
			var d = new Date();
			d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			console.log('user cookie ...');
		};

		//process deposit form before submit
		function processDeposit(e) {
			console.log("processDeposit Listener.....")
			if (e.preventDefault) e.preventDefault();
			var amountDeposit = document.getElementsByName("amount")[0].value;
			var amountDepositNumber = Number(amountDeposit)
			console.log('Deposit Ammount:'+amountDeposit)
			BrowserAgentExtension.logNumericMetric({ "key": "custom_field1", "value": amountDepositNumber, "attributes": { "k": "v" } });
			BrowserAgentExtension.logNumericMetric({ "key": "ammount_deposit", "value": amountDepositNumber, "attributes": { "k": "v" } });
			var selectForm = document.forms[1];
			submitForm(selectForm)
		}

		//process withdraw form before submit
		function processWithd(e) {
			console.log("processWithd Listener.....")
			if (e.preventDefault) e.preventDefault();
			var amountDeposit = document.getElementsByName("amount")[0].value;
			var amountDepositNumber = Number(amountDeposit)
			console.log('Deposit Ammount:'+amountDeposit)
			BrowserAgentExtension.logNumericMetric({ "key": "custom_field2", "value": amountDepositNumber, "attributes": { "k": "v" } });
			BrowserAgentExtension.logNumericMetric({ "key": "ammount_withdraw", "value": amountDepositNumber, "attributes": { "k": "v" } });
			var selectForm = document.forms[1];
			submitForm(selectForm)
		}

		//process checking account creation form before submit
		function processCheckingAccount(e) {
			console.log("processWithd Listener.....")
			if (e.preventDefault) e.preventDefault();
			var typeChecking = document.getElementById("Standard Checking").checked;
			var typeinterest = document.getElementById("Interest Checking").checked;
			var individual = document.getElementById("Individual").checked;
			var joint = document.getElementById("Joint").checked;

			console.log(typeChecking)
			console.log(typeinterest)
			console.log(individual)
			console.log(joint)

			var accType = ""
			var accOwn = ""

			if (typeChecking){
				accType = "Checking"
			}

			if (typeinterest){
				accType = "Interest"
			}

			if (individual){
				accOwn = "Individual"
			}

			if (joint){
				accOwn = "Joint"
			}

			//BrowserAgentExtension.logTextMetric({ "key": "custom_field1", "value": accType, "attributes": { "k": "v" } });
			//BrowserAgentExtension.logTextMetric({ "key": "custom_field2", "value": accOwn, "attributes": { "k": "v" } });
			BrowserAgentExtension.logTextMetric({ "key": "Account Type", "value": accType, "attributes": { "k": "v" } });
			BrowserAgentExtension.logTextMetric({ "key": "Account Owner", "value": accOwn, "attributes": { "k": "v" } });

			var selectForm = document.forms[1];
			submitForm(selectForm)
		}

		//process saving account creation form before submit
		function processSavingsAccount(e) {
			console.log("processWithd Listener.....")
			if (e.preventDefault) e.preventDefault();
			var typeChecking = document.getElementById("Savings").checked;
			var typeinterest = document.getElementById("Money Market").checked;
			var individual = document.getElementById("Individual").checked;
			var joint = document.getElementById("Joint").checked;

			console.log(typeChecking)
			console.log(typeinterest)
			console.log(individual)
			console.log(joint)

			var accType = ""
			var accOwn = ""

			if (typeChecking){
				accType = "Savings"
			}

			if (typeinterest){
				accType = "Money Market"
			}

			if (individual){
				accOwn = "Individual"
			}

			if (joint){
				accOwn = "Joint"
			}

			//BrowserAgentExtension.logTextMetric({ "key": "custom_field1", "value": accType, "attributes": { "k": "v" } });
			//BrowserAgentExtension.logTextMetric({ "key": "custom_field2", "value": accOwn, "attributes": { "k": "v" } });
			BrowserAgentExtension.logTextMetric({ "key": "Account Type", "value": accType, "attributes": { "k": "v" } });
			BrowserAgentExtension.logTextMetric({ "key": "Account Owner", "value": accOwn, "attributes": { "k": "v" } });
			
			var selectForm = document.forms[1];
			submitForm(selectForm)
		}		

		//process login form before submit
		function processLogin(e) {
			console.log("processLogin Listener.....")
			if (e.preventDefault) e.preventDefault();
			var username = document.getElementsByName("username")[0].value;
			if (username !=null){
				var posat = username.indexOf('@')
				if (posat!=-1){
					username2 = username.substring(0,posat)
				}else{
					username2 = username
				}
			}else{
				username2='leandro'
			}
			console.log('captuerd username:'+username2)
			BrowserAgentExtension.setCustomerId({"customerId": username2});	
			setusercookie(username2);
			if (username2 ==="jsmith"){
				   BrowserAgentExtension.setSessionAttribute({"type":"string" , "key" : "CustemerType", "value": "Gold"});
				   console.log('gold');
			}else{
				   BrowserAgentExtension.setSessionAttribute({"type":"string" , "key" : "CustemerType", "value": "Platinum"});
				   console.log('platinum');
			}
			var selectForm = document.forms[0];
			submitForm(selectForm)
		}

		//submits hijacked form
		function submitForm(form) {
			var submitFormFunction = Object.getPrototypeOf(form).submit;
			submitFormFunction.call(form);
		}

		//random location for this user
		function getLocation(){
			var onde = Math.floor(Math.random() * 2);  
			console.log('BANKING - LOCATION '+onde);	
			if (onde == 0){
		 		BrowserAgentExtension.setCustomerLocation({"zipCode" : "","countryCode": "BR","latitude": "-23.5740667" ,"longitude":"-46.65929"}); 
			}else if (onde==1){
		 		BrowserAgentExtension.setCustomerLocation({"zipCode" : "","countryCode": "BR","latitude": "-27.5943916" ,"longitude":"-48.5527888"}); 
			}else{
				 BrowserAgentExtension.setCustomerLocation({"zipCode" : "","countryCode": "BR","latitude": "-15.7552575" ,"longitude":"-47.8905002"}); 
			}
		}

		//hijack submit in login form
		function hijackForm(listenerFunction){
			var selectForm = document.forms[0];
			if (selectForm!=null){
				console.log('add submit listener.....')
				selectForm.addEventListener("submit", listenerFunction);
			}else{
				console.log('done!')
			}
		}

		//hijack submit BUTTON
		function hijackButton(listenerFunction){
			var btn = document.getElementsByClassName('btn btn-primary btn-sm')
			if (btn!=null){
				console.log('add submit listener.....')
				btn[0].addEventListener("click", listenerFunction);
			}else{
				console.log('done!')
			}
		}

		//BA - Start Transaction 
		function startTransaction(serviceName,transactionName){
			console.log('ba-starting:' + transactionName);
			BrowserAgentExtension.startApplicationTransaction({ "transactionName": transactionName, "serviceName": serviceName, "attributes": { "k": "v" } });
			setCookieTr(transactionName)
		}

		//BA - Stop Transaction 
		function stopTransaction(serviceName,transactionName){
			console.log('ba-stoping:' + transactionName);
			var activeTransaction = getCookieTr();
			if (activeTransaction != transactionName) {
				console.log('ba-closing:' + activeTransaction);
				BrowserAgentExtension.stopApplicationTransaction({ "transactionName": activeTransaction, "serviceName": "Tix-cc", "attributes": { "k": "v" } });
				setTimeout(setType(), 3000);
			}
			BrowserAgentExtension.stopApplicationTransaction({ "transactionName": activeTransaction, "serviceName": "Tix-cc", "attributes": { "k": "v" } });
		}

		//based on the current page, creates the transaction name and other stuff
		function getTrName(currentPage){
			if (currentPage.includes('login')) {
				hijackForm(processLogin);
				return 'Login'
			}

			if (currentPage.includes('home')) {
				return 'Account Summary'
			}

			if (currentPage.includes('checking-view')) {
				return 'View Checking Accounts'  
			}

			if (currentPage.includes('checking-add')) {
				hijackButton(processCheckingAccount)
				var erro_box = document.getElementsByClassName("sufee-alert alert with-close alert-danger alert-dismissible fade show");
				if (erro_box.length > 0){
					var msg = erro_box[0].innerText;
					BrowserAgentExtension.addCustomOptionalProperty("Error", msg);
					throw(msg)
				}	
				return 'Create Checking Account'  
			}

			if (currentPage.includes('savings-view')) {
				return 'View Savings Accounts'  
			}

			if (currentPage.includes('savings-add')) {
				hijackButton(processSavingsAccount)

				var erro_box = document.getElementsByClassName("sufee-alert alert with-close alert-danger alert-dismissible fade show");
				if (erro_box.length > 0){
					var msg = erro_box[0].innerText;
					BrowserAgentExtension.addCustomOptionalProperty("Error", msg);
					throw(msg)
				}	

				return 'Create Savings Account'  
			}

			if (currentPage.includes('deposit')) {
				hijackButton(processDeposit)
				return 'Deposit'  
			}

			if (currentPage.includes('withdraw')) {
				hijackButton(processWithd)
				return 'Withdraw'  
			}

			if (currentPage.includes('credit-app')) {
				return 'Apply for Credit'  
			}

			if (currentPage.includes('credit-app-status')) {
				return 'Check Credit Application Status'  
			}
			
			if (currentPage.includes('xfer-between')) {
				return 'Transfer Funds'  
			}

			if (currentPage.includes('xfer-visa')) {
				return 'Transfer Funds VISA'  
			}

			if (currentPage.includes('xfer-visa-process')) {

				var erro_box = document.getElementsByClassName("sufee-alert alert with-close alert-danger alert-dismissible fade show");
				if (erro_box.length > 0){
					var msg = erro_box[0].innerText;
					BrowserAgentExtension.addCustomOptionalProperty("Error", msg);
					throw(msg)
				}	
				return 'Transfer Funds VISA'  
			}

			if (currentPage.includes('profile')) {
				return 'User Profile'  
			}

			if (currentPage.includes('logout')) {
				setCookieTr("")
				setusercookie("")

				return 'Logout'  
			}

			if (currentPage.includes('atm')) {

				var erro_box = document.getElementsByClassName("sufee-alert alert with-close alert-danger alert-dismissible fade show");
				if (erro_box.length > 0){
					var msg = erro_box[0].innerText;
					BrowserAgentExtension.addCustomOptionalProperty("Error", msg);
					throw(msg)
				}	
				return 'Search ATM'  //pegar valores tipo da conta etc
			}

			return 'foo'
		}

		function process(){

			var pg = window.location.href;
			var transactionName = getTrName(pg) //calculates transaction name based on the current page
			var startedTransactionName = getCookieTr(); //contains the name of running transcation - if there is some

			if (startedTransactionName != transactionName){
				if ( (startedTransactionName != null) && (startedTransactionName != "") ){
					stopTransaction('Digital-Bank',startedTransactionName)
				}
				startTransaction('Digital-Bank',transactionName)
			}
		}

		console.log('BANKING - BAExt - START...');

		getLocation();
		process();

		console.log('BANKING - BAExt - END...');	

	} catch (err) {
		console.log(err);
		if (err != null){
			if (err.includes('The initial deposit')){
				throw (err)
			}
		}
	}
};

