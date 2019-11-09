class Resource {
	constructor(title, icon, link, info) {
		this.title = title;
		this.icon = icon;
		this.link = link;
		this.info = info;
	}
}

class Dropdown {
	constructor(title, id, resourceList) {
		this.title = title;
		this.id = id;
		this.resourceList = resourceList;
	}
}

// Some mechanism to camelize the title for the link?
const resources = {
	district: [
		new Resource("District Bylaws", "pdf", "http://www.cnhcirclek.org/download/district-bylaws/"),
		new Resource("District Operating Procedures", "pdf", "http://www.cnhcirclek.org/download/district-operating-procedures/"),
		new Resource("Event Request Form (ERF)", "pdf", "http://www.cnhcirclek.org/download/event-request-form-erf/"),
		new Resource("ERF Manual", "pdf", "http://www.cnhcirclek.org/download/erf-manual"),
		new Dropdown("District Board Meeting Packets", "dbmp", [
			new Resource("July 2019 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/july-2019-district-board-meeting-packet/"),
			new Resource("April 2019 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/april-2019-district-board-meeting-packet/"),
			new Resource("January 2019 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/january-2019-district-board-meeting-packet/"),
			new Resource("November 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/november-2018-district-board-meeting-packet/"),
			new Resource("July 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/july-2018-district-board-meeting-packet/"),
			new Resource("April 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/april-2018-district-board-meeting-packet/"),
			new Resource("March 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/march-2018-district-board-meeting-packet/"),
			new Resource("January 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/january-2018-district-board-meeting-packet/"),
			new Resource("December 2017 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/december-2017-district-board-meeting-packet/"),
			new Resource("November 2017 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/november-2017-district-board-meeting-packet/"),
			new Resource("July 2017 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/july-2017-district-board-meeting-packet/"),
		]),
		new Dropdown("District Board Meeting Minutes", "dbmm", [
			new Resource("April 2019 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/april-2019-district-board-meeting-packet/"),
			new Resource("January 2019 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/january-2019-district-board-meeting-packet/"),
			new Resource("November 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/november-2018-district-board-meeting-packet/"),
			new Resource("July 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/july-2018-district-board-meeting-packet/"),
			new Resource("April 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/april-2018-district-board-meeting-packet/"),
			new Resource("March 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/march-2018-district-board-meeting-packet/"),
			new Resource("January 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/january-2018-district-board-meeting-packet/"),
			new Resource("December 2017 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/december-2017-district-board-meeting-packet/"),
			new Resource("November 2017 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/november-2017-district-board-meeting-packet/"),
			new Resource("July 2017 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/july-2017-district-board-meeting-packet/"),
		]),
		new Dropdown("Candidacy Forms", "candidacy", [
			new Resource("Candidacy Application Form", "word", "http://www.cnhcirclek.org/download/candidacy-application-form"),
			new Resource("Caucasing Rules", "word", "http://www.cnhcirclek.org/download/caucasing-rules"),
			new Resource("Code of Ethics", "word", "http://www.cnhcirclek.org/download/code-of-ethics-2/"),
			new Resource("Instructions for Candidates", "word", "http://www.cnhcirclek.org/download/instructions-for-candidates"),
			new Resource("Governor Service Agreement", "word", "http://www.cnhcirclek.org/download/governor-service-agreement"),
			new Resource("Lieutenant Governor Service Agreement", "word", "http://www.cnhcirclek.org/download/lieutenant-governor-service-agreement"),
			new Resource("Secretary Service Agreement", "word", "http://www.cnhcirclek.org/download/secretary-service-agreement"),
			new Resource("Treasurer Service Agreement", "word", "http://www.cnhcirclek.org/download/treasurer-service-agreement"),
		]),
		new Resource("Delegate Certification 2019", "word", "http://www.cnhcirclek.org/download/delegate-certification-2019"),
	],
	divisions: [
		
	],
	workshops: [

	],
	cbr: [

	],
	cm: [
		new Resource("Sunburst Article Submission Form", "link", "https://docs.google.com/forms/d/e/1FAIpQLSdp3RHxoQcYaTnv44lL2B3xolZHyg6G4amWQ8n9CsBFiFOPFw/viewform?c=0&w=1", "Submit articles for Sunburst")
	],
	fifun: [

	],
	kfam: [

	],
	mde: [

	],
	mr: [

	],
	secretary: [

	],
	service: [

	],
	tech: [

	]
}