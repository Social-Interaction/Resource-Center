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

const resources = {
	"district": [
		"new Resource("District Bylaws", "pdf", "http://resources.cnhcirclek.org/Documents/District/CNH Circle K District Bylaws Updated 05.02.2019.pdf")",
		"new Resource("District Bylaws 2", "link", "http://resources.cnhcirclek.org/Documents/District/CNH Circle K District Bylaws Updated 05.02.2019.pdf")",
		"new Dropdown("daddy", "peppapig", [\n\t"new Resource("frog", "pdf", "http://resources.cnhcirclek.org/Documents/District/CNH Circle K District Bylaws Updated 05.02.2019.pdf")"\n])"
	],
	"divisions": [
		"new Resource("Tomatoes", "info", "http://resources.cnhcirclek.org/Documents/District/CNH Circle K District Bylaws Updated 05.02.2019.pdf")"
	]
}