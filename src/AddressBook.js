function AddressBook() {
	var contacts = [];

	this.addContact = function(contact) {
		contacts.push(contact);
	}	

	this.getContact = function(contact) {
		return contacts[contact];
	}
}