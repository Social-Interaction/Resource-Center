
createLink = (resource) => {
	let link = $('<a class="rss" target="_blank"></a>').attr("href", resource.link)
		.append($('<div class="panel panel-default rss"/>').text(resource.title)
					.prepend($('<img class="type">').attr("src", "../Assets/type-icons/" + resource.icon + ".png").attr("alt", resource.icon)));
	if (resource.info) {
		link.children('.panel').append($('<img src="../Assets/type-icons/info.png" class="type info">').tooltip({ title: resource.info, placement: 'left'}));
	}
	return link;
}

createDropdownButton = (dropdown) => {
	let button = $('<button class="expand style-none" data-toggle="collapse"></button>').attr('data-target', '#collapse' + dropdown.id).text(dropdown.title).collapse();
	return $('<a class="rss" target="_blank"></a>')
				.append($('<div class="panel panel-default rss rss-dropdown" />')
					.append(button
						.prepend($('<img class="type" src="../Assets/type-icons/list.png" alt="">'))));
}

createDropdownList = (dropdown) => {
	let dropdownList = $('<div class="collapse" />').attr('id', 'collapse' + dropdown.id);

	dropdown.resourceList.forEach(resource => {
		dropdownList.append(createLink(resource));
	});

	return $('<div class="collapse-cont" />').append(dropdownList);
}

$(document).ready(function(){

	// Get current script (last one loaded) to get its querystring category
	var scripts = document.getElementsByTagName("script");
	var script = scripts[scripts.length - 1];
	const category = script.getAttribute("category");
	$.each(resources[category], (index, value) => {
		if (value instanceof Resource) {
			createLink(value).appendTo($('#resources'));
		} else if (value instanceof Dropdown) {
			createDropdownButton(value).appendTo($('#resources'));
			createDropdownList(value).appendTo($('#resources'));
		}
	})
});

