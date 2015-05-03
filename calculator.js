window.onload = function() {

	var operand1 = 0, operand2 = 0, result = 0, operator = "";
	var display_input = document.getElementById("display-input");
	var numberButtons = document.getElementsByClassName("number");
	var operatorButtons = document.getElementsByClassName("operator");
	var equaltoButton = document.getElementById("equalto");

	/* Attach event listner to all number buttons */
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].addEventListener("click", numberFunction);
	};

	/* Attach event listner to all operator buttons */
	for (var i = 0; i < operatorButtons.length; i++) {
		operatorButtons[i].addEventListener("click", operatorFunction);
	};

	/* Attach event listner to 'equal to' button */
	equaltoButton.addEventListener("click", equateFunction);

	/* When number is pressed - Appends the number clicked in the display */
	function numberFunction() {   		
		display_input.value += this.innerHTML.trim();
	}
	
	/* When operator is pressed */
	function operatorFunction() {
		if(operator == "") {
			operand1 = display_input.value;	
		}
		operator = this.innerHTML.trim();		
		display_input.value = "";
		document.getElementById("input").innerHTML = operand1 + " " + operator;
	}

	/* When equal to is pressed */
	function equateFunction() {
		operand2 = display_input.value;
		operand1 = parseFloat(operand1);
		operand2 = parseFloat(operand2);

		switch(operator) {
			case '+': result = operand1 + operand2; break;
			case '-': result = operand1 - operand2; break;
			case 'x': result = operand1 * operand2; break;
			case '/': result = operand1 / operand2; break;
			default: result = operand2; operator = "";					/* Keep the same value */
			
		}

		display_input.value = result;
		operator = "";
		document.getElementById("input").innerHTML = "";
	}

	/* When clear is pressed */
	document.getElementById("clear").addEventListener("click", function() {		 /* Anonymouns function */
		display_input.value = "";
		document.getElementById("input").innerHTML = "";

	});

	/* When 'decimal point' button is pressed */
	document.getElementById("dot").addEventListener("click", function() {   /* Anonymouns function */
		display_input.value += this.innerHTML.trim();
	});
}
