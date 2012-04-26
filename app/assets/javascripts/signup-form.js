$(function() {
	hideAllHelpers();
	
	$('#person_first_name').focus(function() {
		$('#person_first_name_helper').show(200);
	});
	$('#person_first_name').blur(function() {
		$('#person_first_name_helper').hide(200);
	});
	
	$('#person_last_name').focus(function() {
		$('#person_last_name_helper').show(200);
	});
	$('#person_last_name').blur(function() {
		$('#person_last_name_helper').hide(200);
	});
	
	clientSideValidations.callbacks.element.after = function(element, eventData) {
		// element is the input element (text field). The text field is wrapped by 
		// the error so the parent is the error_wrapper. The label is a child of 
		// the wrapper and the html of the label is the actual error message
		var elementContainer = element.parents('#field');
		var errorLabel = element.parent().find('label');
		var errorMsg = errorLabel.html();
		errorLabel.hide();
		var existingError = elementContainer.find('#validation-error');
		console.log("Error Msg: " + errorMsg);
		if(!errorMsg || errorMsg == null) {
			existingError.remove();
		} else if(existingError && existingError.length > 0) {
			existingError.html(errorMsg);
		} else {
			elementContainer.append('<div id="validation-error">' + errorMsg + '</div>');
		}
	}
	
});

function hideAllHelpers() {
	$('#person_first_name_helper').hide();
	$('#person_last_name_helper').hide();
}