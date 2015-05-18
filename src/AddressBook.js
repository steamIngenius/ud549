function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;

	this.getInitialContacts = function(cb) {
		var self = this

		// fake some asynchronicity
		setTimeout(function() {
			self.initialComplete = true;
			if (cb) {
				return cb();
			}
		}, 3);
	}

	this.addContact = function(contact) {
		this.contacts.push(contact);
	}	

	this.getContact = function(contact) {
		return this.contacts[contact];
	}

	this.deleteContact = function(contact) {
		this.contacts.splice(contact, 1);	
	}
}