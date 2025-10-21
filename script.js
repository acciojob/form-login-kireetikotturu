function getFormvalue() {
    //Write your code here
	const form = document.forms['form1'];
	let firstName = form.fname.value;
	let secondName = form.lname.value;

	let fullName = `${firstName} ${secondName}`;
	alert(fullName);
}
