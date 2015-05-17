function AddressBook() {
	this.contacts = [];

	this.addContact = function(contact) {
		this.contacts.push(contact);
	}	

	this.getContact = function(contact) {
		return this.contacts[contact];
	}
}