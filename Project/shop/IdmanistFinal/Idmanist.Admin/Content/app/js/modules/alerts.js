const sweetAlerts = () => {
	$('#sweet_alerts_card').on('click.sweet-error', '.sweet-error', function(e) {
		e.stopPropagation();
		swal("Oops...", "Something went wrong!", "error");
	});
	$('#sweet_alerts_card').on('click.sweet-message', '.sweet-message', function(e) {
		e.stopPropagation();
		swal("Here's simple message!");
	});
	$('#sweet_alerts_card').on('click.sweet-success', '.sweet-success', function(e) {
		e.stopPropagation();
		swal("Good job!", "You clicked the button!", "success");
	});
	$('#sweet_alerts_card').on('click.sweet-warning', '.sweet-warning', function(e) {
		e.stopPropagation();
		swal({
			title: "Are you sure?",
			text: "You will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false
		}, function() {
			swal("Deleted!", "Your imaginary file has been deleted.", "success");
		});
	});
	$('#sweet_alerts_card').on('click.sweet-warning-cancel', '.sweet-warning-cancel', function(e) {
		e.stopPropagation();
		swal({
			title: "Are you sure?",
			text: "You will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: "No, cancel plx!",
			closeOnConfirm: false,
			closeOnCancel: false
		}, function(isConfirm) {
			if (isConfirm) {
				swal("Deleted!", "Your imaginary file has been deleted!", "success");
			} else {
				swal("Cancelled", "Your imaginary file is safe :)", "error");
			}
		});
	});
}
const alertifyjs = () => {
	$('#alertify_card').on('click.alertifyAlert', '#alert', function(e) {
		e.stopPropagation();
		alertify.alert("Message");
	});
	$('#alertify_card').on('click.alertifyConfirm', '#confirm', function(e) {
		e.stopPropagation();
		// confirm dialog
		alertify.confirm("Message", function() {
			// user clicked "ok"
			alertify.success("You've clicked OK");
		}, function() {
			alertify.success("You've clicked CANCEL");
		});
	});
	$('#alertify_card').on('click.alertifyPrompt', '#prompt', function() {
		alertify.defaultValue("Default Value").prompt("This is a prompt dialog", function(val, ev) {
			// The click event is in the event variable, so you can use it here.
			ev.preventDefault();
			// The value entered is availble in the val variable.
			alertify.success("You've clicked OK and typed: " + val);
		}, function(ev) {
			// The click event is in the event variable, so you can use it here.
			ev.preventDefault();
			alertify.error("You've clicked Cancel");
		});
	});
	$('#alertify_card').on('click.alertifyCustomLabel', '#custom-label', function(e) {
		e.stopPropagation();
		alertify.okBtn("Accept").cancelBtn("Deny").confirm("Confirm dialog with custom button labels", function(ev) {
			// The click event is in the
			// event variable, so you can use
			// it here.
			ev.preventDefault();
			alertify.success("You've clicked OK");
		}, function(ev) {
			// The click event is in the
			// event variable, so you can use
			// it here.
			ev.preventDefault();
			alertify.error("You've clicked Cancel");
		});
	});
};
export {sweetAlerts, alertifyjs}
