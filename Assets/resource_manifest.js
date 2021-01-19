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
// Prefer redirect-download links to be able to track clicks
const resources = {
	district: [
		new Resource("District Bylaws", "pdf", "http://resources.cnhcirclek.org/Documents/District/CNH Circle K District Bylaws Updated 05.02.2019.pdf"),
		new Resource("District Operating Procedures", "pdf", "http://resources.cnhcirclek.org/Documents/District/CNH Circle K District Operating Procedures Updated-05.02.19.pdf"),
		new Resource("Club Bylaws Amendment Guide", "pdf" , "http://www.cnhcirclek.org/download/club-bylaws-amendment-guide/"),
		new Resource("Event Request Form (ERF)", "pdf", "http://www.cnhcirclek.org/download/event-request-form-erf/"),
		new Resource("ERF Manual", "pdf", "http://www.cnhcirclek.org/download/erf-manual"),
		new Dropdown("District Board Meeting Packets", "dbmp", [
			new Resource("March 2020 District Board Meeting Packet", "pdf", "https://resources.cnhcirclek.org/Documents/District/Packets/March-2020-District-Board-Meeting-Packet.pdf"),
			new Resource("January 2020 District Board Meeting Packet", "pdf", "https://resources.cnhcirclek.org/Documents/District/Packets/January-2020-District-Board-Meeting-Packet.pdf"),
			new Resource("December 2019 Special District Board Meeting Packet", "pdf", "https://resources.cnhcirclek.org/Documents/District/Packets/December-2019-Special-District-Board-Meeting-Packet.pdf"),
			new Resource("November 2019 District Board Meeting Packet", "pdf", "https://resources.cnhcirclek.org/Documents/District/Packets/November-2019-District-Board-Meeting-Packet.pdf"),
			new Resource("July 2019 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/july-2019-district-board-meeting-packet/"),
			new Resource("April 2019 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/april-2019-district-board-meeting-packet/"),
			new Resource("January 2019 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/january-2019-district-board-packet/"),
			new Resource("November 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/november-2018-district-board-packet/"),
			new Resource("July 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/july-2018-district-board-meeting-packet/"),
			new Resource("April 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/april-2018-district-board-meeting-packet/"),
			new Resource("March 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/march-2018-district-board-meeting-packet-2/"),
			new Resource("January 2018 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/january-2018-district-board-meeting-packet-2/"),
			new Resource("December 2017 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/december-2017-district-board-meeting-packet/"),
			new Resource("November 2017 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/november-2017-district-board-meeting-packet/"),
			new Resource("July 2017 District Board Meeting Packet", "pdf", "http://www.cnhcirclek.org/download/july-2017-district-board-meeting-packet/"),
		]),
		new Dropdown("District Board Meeting Minutes", "dbmm", [
			new Resource("December 2019 Special District Board Meeting Minutes", "pdf", "https://www.cnhcirclek.org/download/december-2019-special-district-board-meeting-minutes.pdf"),
			new Resource("November 2019 District Board Meeting Minutes", "pdf", "https://www.cnhcirclek.org/download/november-2019-district-board-meeting-minutes.pdf"),
			new Resource("July 2019 District Board Meeting Minutes", "pdf", "https://www.cnhcirclek.org/download/july-2019-district-board-meeting-minutes.pdf"),
			new Resource("April 2019 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/april-2019-district-board-meeting-minutes/"),
			new Resource("January 2019 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/january-2019-district-board-meeting-minutes/"),
			// new Resource("November 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/november-2018-district-board-meeting-minutes/"),
			new Resource("July 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/july-2018-district-board-meeting-minutes/"),
			new Resource("April 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/april-2018-district-board-meeting-minutes/"),
			new Resource("March 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/march-2018-district-board-meeting-minutes/"),
			new Resource("January 2018 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/march-2018-special-meeting-minutes//"),
			new Resource("December 2017 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/december-2017-special-meeting-minutes/"),
			new Resource("November 2017 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/november-2017-district-board-meeting-minutes-2/"),
			new Resource("July 2017 District Board Meeting Minutes", "pdf", "http://www.cnhcirclek.org/download/july-2017-district-board-meeting-minutes-2/"),
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
		new Resource("Delegate Certification 2020", "word", "http://www.cnhcirclek.org/download/delegate-certification-2020"),
	],
	divisions: [
		new Dropdown("Capital", "capital", [
			new Resource("Calendar of Events", "link", "http://www.cnhcirclek.org/download/calendar-of-events/"),
			new Resource("General Meeting & Parking Information", "link", "http://www.cnhcirclek.org/download/general-meeting-parking-information/"),
			new Resource("Weekly Subscription Emails", "link", "http://www.cnhcirclek.org/download/weekly-subscription-emails/"),
			new Resource("Interclub Buddy Challenges", "link", "http://www.cnhcirclek.org/download/interclub-buddy-challenges/"),
			new Resource("Icebreakers Master List", "link", "http://www.cnhcirclek.org/download/icebreakers-master-list/"),
			new Resource("Youtube Channel", "link", "http://www.cnhcirclek.org/download/youtube-channel/"),
			new Resource("Cheers Masterlist", "link", "http://www.cnhcirclek.org/download/cheers-master-list/"),
			new Resource("Leadership Team Contact List", "link", "http://www.cnhcirclek.org/download/leadership-team-contact-list/"),

		]),
		new Dropdown("Central Coast", "cenco", [
			new Resource("Website", "link", "http://www.cnhcirclek.org/download/website/"),
			new Resource("Key to Presidency", "pdf", "http://www.cnhcirclek.org/download/key-to-presidency/"),
			new Resource("Elections Manual", "link", "http://www.cnhcirclek.org/download/elections-manual/"),
		]),
		new Dropdown("Citrus", "citrus", [
			new Resource("Calendar of Events", "link", "http://www.cnhcirclek.org/download/calendar-of-events-2/"),
			new Resource("Club General Meeting Times, Locations & Parking Info", "link", "http://www.cnhcirclek.org/download/club-general-meeting-time-locations-parking-information/"),
			new Resource("Wakanda Webinars: Divisional Webinar Interst Form", "link", "http://www.cnhcirclek.org/download/wakanda-webinars-divisional-webinar-interest-form/"),
			new Resource("March DCM Signup", "link", "http://www.cnhcirclek.org/download/march-dcm-sign-up/"),
			new Resource("Magic Kingdom Merch Order Form", "link", "http://www.cnhcirclek.org/download/magic-kingdom-merch-order-form/"),
			new Resource("Magic Kingdom Kiwanis Family Unity Day", "link", "http://www.cnhcirclek.org/download/magic-kingdom-kiwanis-family-unity-day/")
		]),
		// new Dropdown("Desert Oasis", "doasis", [

		// ]),
		new Dropdown("Foothill", "foothill", [
			new Resource("Foothill Cheers", "link", "http://www.cnhcirclek.org/download/foothill-cheers/"),
			new Resource("Foothill Cheer Tutorial", "link", "http://www.cnhcirclek.org/download/foothill-cheer-tutorial/")
		]),
		new Dropdown("Golden Gate", "ggate", [
			new Resource("Officer Handbook", "link", "http://www.cnhcirclek.org/download/officer-handbook/")
		]),
		// new Dropdown("Metro", "metro", [

		// ]),
		// new Dropdown("Paradise", "paradise", [

		// ]),
		new Dropdown("Sunset", "sunset", [
			new Resource("Sunset Cheers", "link", "http://www.cnhcirclek.org/download/sunset-cheers/"),
			new Resource("Sunset Cheers Videos", "link", "http://www.cnhcirclek.org/download/sunset-division-cheers-videos/"),
		])
	],
	workshops: [
		new Resource("Fall Training Conference 2019", "link", "http://www.cnhcirclek.org/download/fall-training-conference-2019/"),
		new Resource("Spring Training Conference 2019", "link", "http://www.cnhcirclek.org/download/spring-training-conference-2019/"),
		new Resource("District Convention 2019", "link", "http://www.cnhcirclek.org/download/district-convention-2019/"),
		new Resource("Fall Training Conference 2018", "link", "http://www.cnhcirclek.org/download/fall-training-conference-2018/"),
		new Resource("Spring Training Conference 2018", "link", "http://www.cnhcirclek.org/download/spring-training-conference-2018/"),
		new Resource("District Convention 2018", "link", "http://www.cnhcirclek.org/download/district-convention-2018/")
	],
	cbr: [

	],
	cm: [
		new Resource("CNH District Style Guide", "link", "http://www.cnhcirclek.org/download/style-guide/", "Covers Graphic Standards"),
		new Resource("Graphic Standard Assets", "link", "http://www.cnhcirclek.org/download/graphic-standard-assets/"),
		new Resource("Graphic Request Form", "link", "http://www.cnhcirclek.org/download/grphic-request-form/"),
		new Dropdown("Public Relations", "prelations", [
			new Resource("External Media Database", "link", "http://www.cnhcirclek.org/download/external-media-database/", "External Media listings separated by division and school!"),
			new Resource("Press Release Manual", "pdf", "http://www.cnhcirclek.org/download/press-release-manual/", "Learn how to write press releases for external media outlets"),
			new Resource("Finding Media Outlets", "link", "http://www.cnhcirclek.org/download/finding-media-outlets/", "Find media outlets for your press releases")
		]),
		new Dropdown("Social Media", "social", [
			new Resource("Social Media References", "link", "http://www.cnhcirclek.org/download/social-media-references/"),
			new Resource("Twitter Confessions", "link", "http://www.cnhcirclek.org/download/twitter-confessions/"),
		]),
		new Resource("Tabling Manual", "link", "http://www.cnhcirclek.org/download/tabling-manual")
		// new Resource("Sunburst Article Submission Form", "link", "https://docs.google.com/forms/d/e/1FAIpQLSdp3RHxoQcYaTnv44lL2B3xolZHyg6G4amWQ8n9CsBFiFOPFw/viewform?c=0&w=1", "Submit articles for Sunburst")
	],
	fifun: [
		new Resource("Treasurer/Fundraising Manual", "pdf", "http://www.cnhcirclek.org/download/treasurer-fundraising-manual/"),
		new Resource("Fundraising Master Sheet", "link", "http://www.cnhcirclek.org/download/fundraising-master-sheet/"),
		new Resource("Fundraising Database", "link", "http://www.cnhcirclek.org/download/fundraising-database/"),
		new Dropdown("Master Budget Sheet", "mbs", [
			new Resource("(Google Sheets)", "link", "http://www.cnhcirclek.org/download/master-budget-sheets-google-sheets/"),
			new Resource("(Excel)", "xlsx", "http://www.cnhcirclek.org/download/master-budget-sheets-excel/")
		])
	],
	kfam: [
		new Resource("Kiwanis Family Starter Kit", "pdf", "http://www.cnhcirclek.org/download/kiwanis-family-starter-kit/"),
		new Dropdown("ERF Supplemental Documents", "erfsupp", [
			new Resource("Event Proposal Document", "pdf", "http://www.cnhcirclek.org/download/event-proposal-document/"),
			new Resource("Waiver and Medical Consent Treatment", "pdf", "http://www.cnhcirclek.org/download/waiver-and-medical-consent-treatment/")
		]),
		new Dropdown("Growing the Kiwanis Family Branches", "growingkfam", [
			new Resource("Co-Sponsoring a K-Kids or Builders Club Manual", "pdf", "http://www.cnhcirclek.org/download/co-sponsoring-a-k-kids-or-builders-club-manual/", "The importance of co-sponsoring a Builders Club/K-Kids. To build future leaders through community service. The manual was mainly about building future leaders and some service that each branch can do. As for Circle K or Kiwanis, it explains why we should charter/co-sponsor a Builders Club or K-Kids."),
			new Resource("Building Kiwanis Family Relations Manual", "pdf", "http://www.cnhcirclek.org/download/building-kiwanis-family-relations-manual/", "The Kiwanis Family is vast in many ways. There is so much more to the Kiwanis Family than just Key Club and Kiwanis. Not sure what the different branches are? Look no further! This manual contains a brief summary of what each branch entails, as well as some ideas on how to reach out to the different branches."),
			new Resource("Connecting the K's Manual", "pdf", "http://www.cnhcirclek.org/download/connecting-the-ks-manual/", "The Kiwanis Family is made up of various other branches! This manual contains ways on how to connect with these other branches which range from service, social, and leadership events!")
		]),
		new Dropdown("Kiwanis Family Events", "kfamevents", [
			new Resource("Key to College Manual", "pdf", "http://www.cnhcirclek.org/download/key-to-college-manual-2/", "College can be intimidating, but it does not have to be! With Key to College, future college students can feel at ease with an abundance of knowledge provided with the expertise of Circle K members. Planning tips, workshop content, alternative ideas, and what to do each step of the way are all in this manual."),
			new Resource("Key to Life Manual", "pdf", "http://www.cnhcirclek.org/download/key-to-life-manual/", "Teaching you everything that you need to know how to pull off a Key to Life! From planning a date and location to the day of the event itself, this manual will give all the knowledge that you need to give people their \"keys\" to life after college!"),
			new Resource("Hosting a Kiwanis Takeover Manual", "pdf", "http://www.cnhcirclek.org/download/hosting-a-kiwanis-takeover-manual/"),
			new Resource("Kiwanis Family Events Manual", "pdf", "http://www.cnhcirclek.org/download/kiwanis-family-events-manual/")
		]),
		new Resource("Transitioning from Key Club and KIWIN'S to Circle K Manual", "pdf", "http://www.cnhcirclek.org/download/transitioning-from-key-club-and-kiwins-to-circle-k-manual/")
	],
	mde: [
		new Resource("Small and Large-Scale Event Planning", "pdf", "http://www.cnhcirclek.org/download/small-and-large-scale-event-planning/"),
		new Resource("Icebreaker Manual", "pdf", "http://www.cnhcirclek.org/download/icebreakers-manual/"),
		new Resource("Tabling Manual", "pdf", "http://www.cnhcirclek.org/download/tabling-manual/"),
		new Resource("Member Recruitment and Retentional Manual", "pdf", "http://www.cnhcirclek.org/download/member-retruitment-and-retention-manual/"),
		new Resource("General Member Handbook", "pdf", "http://www.cnhcirclek.org/download/general-member-handbook/")
	],
	mr: [
		// this is the same dropdown in secretary
		new Dropdown("Master Record Sheet Files", "mrs", [
			new Resource("2020-2021 Master Record Sheet (MRS)", "xlsx", "http://resources.cnhcirclek.org/Documents/MR/MRS/2020-2021 MRS_School Name.xlsm"),
			new Resource("MRS Example", "xlsx", "http://resources.cnhcirclek.org/Documents/MR/MRS/2020-2021 MRS_School Name_Example.xlsm"),
			new Resource("MRS User Guide", "pdf", "http://resources.cnhcirclek.org/Documents/MR/MRS/2020-2021 MRS User Guide.pdf")
		]),
		new Dropdown("District Convention 2021 Awards", "dconawards", [
			new Resource("District Convention 2021 Master Award Sheet", "link", "https://docs.google.com/spreadsheets/d/1_V9nCoIqAlqwb6OWNWFu1aAkBQ_G1J5xXgXb8xvr5dc/edit?fbclid=IwAR0xFEdsrPYvKtaoXDAcHVuqBeE3s5Aqbo7DGsAdZK_q3GkNmrfitO-LEOA#gid=0"),
			new Resource("Endorsement Sheet", "xlsx", "http://resources.cnhcirclek.org/Documents/MR/District Convention 2021 Awards/Endorsement Sheet/2020-2021 Endorsements Sheet.xlsx"),
			new Dropdown("Distinguished Appointed Board Member Award", "aboard",[
				new Resource("I.A. Divisional Events", "xlsx", "http://resources.cnhcirclek.org//Documents/MR/District Convention 2021 Awards/Distinguished Appointed Board Member/I.A.8. Divisional Event(s).xlsx),
				new Resource("I.A. Other Kiwanis Family Training Conference(s)", "xlsx", "http://resources.cnhcirclek.org//Documents/MR/District Convention 2021 Awards/Distinguished Appointed Board Member/I.A.10. Other Kiwanis Family Training Conference(s).xlsx"),
				new Resource("I.B. Facilitated Workshops", "xlsx", "http://resources.cnhcirclek.org//Documents/MR/District Convention 2021 Awards/Distinguished Appointed Board Member/I.B. Facilitated Workshop(s).xlsx"),
				new Resource("II.D. Additional Circle K Meetings", "xlsx", "http://resources.cnhcirclek.org//Documents/MR/District Convention 2021 Awards/Distinguished Appointed Board Member/II.D. Additional Circle K Meetings.xlsx"),
				new Resource("II.E. Kiwanis Family Meetings", "xlsx", "http://resources.cnhcirclek.org//Documents/MR/District Convention 2021 Awards/Distinguished Appointed Board Member/II.E. Kiwanis Family Meetings.xlsx"),
				new Resource("III.C. Committee Meeting(s)", "xlsx", "http://resources.cnhcirclek.org//Documents/MR/District Convention 2021 Awards/Distinguished Appointed Board Member/III.C. Committee Meeting(s).xlsx"),
				new Resource("III.J. Publications", "xlsx", "http://resources.cnhcirclek.org//Documents/MR/District Convention 2021 Awards/Distinguished Appointed Board Member/III.J. Publications.xlsx")
				])
		]),
		new Dropdown("Fall Training Conference 2020 Awards", "ftcawards", [
			new Resource("Outstanding Club T-Shirt Award", "link", "https://kiwaniscnhfoundation.formstack.com/forms/20202021_outstanding_club_tshirt_award"),
			new Resource("Outstanding Club Video Award", "link", "https://kiwaniscnhfoundation.formstack.com/forms/20202021_outstanding_club_video_award"),
			new Resource("Outstanding Club Website Award", "link", "https://kiwaniscnhfoundation.formstack.com/forms/20202021_outstanding_club_website_award")
		]),
		new Dropdown("2019-2020 Awards", "pastawards", [
			new Resource("(DCON) 2019-2020 Distinguished Appointed Board Officer Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-appointed-board-officer/"),
			new Resource("(DCON) 2019-2020 Distinguished Club Improvement Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-club-improvement-award/"),
			new Resource("(DCON) 2019-2020 Distinguished Divisional Excellence Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-divisional-excellence-award/"),
			new Resource("(DCON) 2019-2020 Distinguished Kiwanis Club Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-kiwanis-club-award/"),
			new Resource("(DCON) 2019-2020 Distinguished President Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-president-award/"),
			new Resource("(DCON) 2019-2020 Distinguished Vice President Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-vice-president-award/"),
			new Resource("(DCON) 2019-2020 Distinguished Secretary Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-secretary-award/"),
			new Resource("(DCON) 2019-2020 Distinguished Treasurer Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-distinguished-treasurer-award/"),
			new Resource("(DCON) 2019-2020 Don Hull Distinguished Kiwanis Family Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-don-hull-distinguished-kiwanis-family-award/"),
			new Resource("(DCON) 2019-2020 Endorsements Sheet", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-endorsements-sheet/"),
			new Resource("(DCON) 2019-2020 Faculty Advisor of the Year Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-faculty-advisor-of-the-year-award/"),
			new Resource("(DCON) 2019-2020 Hall of Fame Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-hall-of-fame-award/"),
			new Resource("(DCON) 2019-2020 John Nichelson Kiwanian of the Year Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-john-nichelson-kiwanian-of-the-year-award/"),
			new Resource("(DCON) 2019-2020 John Woodall Distinguished Membership Development and Education Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-john-woodall-distinguished-membership-development-and-education-award/"),
			new Resource("(DCON) 2019-2020 Mei Po Wong Overall Service Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-mei-po-wong-overall-service-award/"),
			new Resource("(DCON) 2019-2020 Returning General Member of the Year Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-returning-general-member-of-the-year-award/"),
			new Resource("(DCON) 2019-2020 New Member of the Year Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-new-member-of-the-year-award/"),
			new Resource("(DCON) 2019-2020 Outstanding Interclubbing Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-outstanding-interclubbing-award/"),
			new Resource("(DCON) 2019-2020 Outstanding Club Media Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-outstanding-club-media-award/"),
			new Resource("(DCON) 2019-2020 Outstanding District Committee Member Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-outstanding-district-committee-member-award/"),
			new Resource("(DCON) 2019-2020 Outstanding Non-Traditional Scrapbook Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-outstanding-non-traditional-scrapbook-award/"),
			new Resource("(DCON) 2019-2020 Outstanding Single Service Project Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-outstanding-single-service-project-award/"),
			new Resource("(DCON) 2019-2020 Outstanding Total Achievement Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-outstanding-total-achievement-award/"),
			new Resource("(DCON) 2019-2020 Outstanding Traditional Scrapbook Award", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-outstanding-traditional-scrapbook-award/"),
			new Resource("(FTC) Outstanding Club T-Shirt Award", "xlsx", "http://www.cnhcirclek.org/download/outstanding-club-t-shirt-award/"),
			new Resource("(FTC) Outstanding Club Video Award", "xlsx", "http://www.cnhcirclek.org/download/outstanding-club-video-award/"),
			new Resource("(FTC) Outstanding Club Website Award", "xlsx", "http://www.cnhcirclek.org/download/outstanding-club-t-shirt-award/")
			]),
		new Dropdown("2018-2019 Awards", "pastawards", [
			new Resource("2018-2019 DCON Awards Manual", "pdf", "../Documents/MR/2018-2019 Awards/2018-2019 DCON Awards Manual.pdf"),
			new Resource("(DCON) Distinguished Appointed Board Officer Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished Appointed Board Officer Award.xlsx"),
			new Resource("(DCON) Distinguished Club Improvement Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished Club Improvement Award.xlsx"),
			new Resource("(DCON) Distinguished Divisional Excellence Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished Divisional Excellence Award.xlsx"),
			new Resource("(DCON) Distinguished Kiwanis Club Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished Kiwanis Club Award.xlsx"),
			new Resource("(DCON) Distinguished President Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished President Award.xlsx"),
			new Resource("(DCON) Distinguished Secretary Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished Secretary Award.xlsx"),
			new Resource("(DCON) Distinguished Treasurer Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished Treasurer Award.xlsx"),
			new Resource("(DCON) Distinguished Vice President Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Distinguished Vice President Award.xlsx"),
			new Resource("(DCON) Don Hull Distinguished Kiwanis Family Relations Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Don Hull Distinguished Kiwanis Family Relations Award.xlsx"),
			new Resource("(DCON) Endorsements Sheet", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Endorsements Sheet.xlsx"),
			new Resource("(DCON) Faculty Advisor of the Year Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Faculty Advisor of the Year Award.xlsx"),
			new Resource("(DCON) Hall of Fame Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Hall of Fame Award.xlsx"),
			new Resource("(DCON) John Nichelson Kiwanian of the Year Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 John Nichelson Kiwanian of the Year Award.xlsx"),
			new Resource("(DCON) John Woodall Distinguished Member Development & Education Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 John Woodall Distinguished Membership Development and Education Award.xlsx"),
			new Resource("(DCON) Mei Po Wong Overall Service Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Mei Po Wong Overall Service Award.xlsx"),
			new Resource("(DCON) New Member of the Year Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 New Member of the Year Award.xlsx"),
			new Resource("(DCON) Outstanding Club Newsletter Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Outstanding Club Newsletter Award.xlsx"),
			new Resource("(DCON) Outstanding District Committee Member Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Outstanding District Committee Member Award.xlsx"),
			new Resource("(DCON) Outstanding Interclubbing Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Outstanding Interclubbing Award.xlsx"),
			new Resource("(DCON) Outstanding Non-Traditional Scrapbook Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Outstanding Non-Traditional Scrapbook Award.xlsx"),
			new Resource("(DCON) Outstanding Single Service Project Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Outstanding Single Service Project Award.xlsx"),
			new Resource("(DCON) Outstanding Total Achievement Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Outstanding Total Achievement Award.xlsx"),
			new Resource("(DCON) Outstanding Traditional Scrapbook Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Outstanding Traditional Scrapbook Award.xlsx"),
			new Resource("(DCON) Returning General Member of the Year Award", "xlsx", "../Documents/MR/2018-2019 Awards/(PC) 2018-2019 Returning General Member of the Year Award.xlsx"),
			new Resource("(FTC) Outstanding Club T-Shirt Award", "xlsx", "http://www.cnhcirclek.org/download/2018-2019-outstanding-club-t-shirt-award/"),
			new Resource("(FTC) Outstanding Club Video Award", "xlsx", "http://www.cnhcirclek.org/download/2018-2019-outstanding-club-video-award/"),
			new Resource("(FTC) Outstanding Club Website Award", "xlsx", "http://www.cnhcirclek.org/download/2018-2019-outstanding-club-website-award/")
		]),
		new Resource("General Recognition Manual", "pdf", "http://www.cnhcirclek.org/download/general-recognition-manual/"),
		new Resource("Membership Recognition Program", "link", "http://www.cnhcirclek.org/download/membership-recognition-program")
	],
	secretary: [
		new Dropdown("2020-2021 Club Event Report Form (CERF)", "cerf", [
			new Resource("Blank CERF 2020-2021", "xlsx", "http://www.cnhcirclek.org/download/blank-cerf-2020-2021/"),
			new Resource("CERF Manual", "pdf", "http://www.cnhcirclek.org/download/cerf-manual/")
		]),
		new Dropdown("2020-2021 Monthly Report Form (MRF)", "mrf", [
			new Resource("Blank MRF 2020-2021", "xlsx", "http://www.cnhcirclek.org/download/blank-mrf-2020-2021/"),
			new Resource("MRF Manual", "pdf", "http://www.cnhcirclek.org/download/mrf-manual/")
		]),
		// this is the same dropdown in mr
		new Dropdown("Master Record Sheet Files", "mrs", [
			new Resource("2019-2020 Master Record Sheet (MRS)", "xlsx", "http://www.cnhcirclek.org/download/2019-2020-master-records-sheet/"),
			new Resource("MRS Example", "xlsx", "http://www.cnhcirclek.org/download/mrs-example-2/"),
			new Resource("MRS User Guide", "pdf", "http://www.cnhcirclek.org/download/mrs-user-guide-2/")
		])
	],
	service: [
		new Resource("Service Resource Database", "pdf", "http://www.cnhcirclek.org/download/service-resource-database/", "The Service Resource Database is the goto informational document for the CKI service officer! Please submit feedback to service@cnhcirclek.org")
	],
	tech: [
		new Dropdown("Website Resources", "website", [
			new Resource("Website Manual", "link", "http://www.cnhcirclek.org/download/website-manual/"),
			new Resource("CNH Style Guide (Websites)", "link", "http://www.cnhcirclek.org/download/cnh-style-guide-websites/"),
			new Resource("Club Website Screenshots", "pdf", "http://www.cnhcirclek.org/download/club-website-screenshots/")
		]),
		new Resource("How to Set Up a Livestream", "link", "http://www.cnhcirclek.org/download/how-to-set-up-a-livestream/")
	]
}
