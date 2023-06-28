import { dataProjects } from "./js/dataProjects.js";

function printIcons(iconsArray) {
	const icons = {
		html: '<i class="bx bxl-html5"></i>',
		css: "<i class='bx bxl-css3' ></i>",
		js: "<i class='bx bxl-nodejs' ></i>",
	};

	let html = "";

	iconsArray.forEach((icon) => {
		html += `<li>
                    ${icons[icon]}
                </li>`;
	});

	return html;
}

function printProjects() {
	const projectsHTML = document.querySelector(".projects");

	let html = "";

	dataProjects.forEach(({ id, img, link, name, nivel, tags, video }) => {
		html += `
        <div class="project" id='project${id}'>
            <div class="project__img">
                <div class="project__img__banner">
                    <a href="${link}" target="_blanck">
                        <i class='bx bxs-castle bx-tada-hover'></i>
                    </a>
                    <a href="${video}" target="_blanck">
                        <i class='bx bxl-youtube bx-tada-hover'></i>
                    </a>
                    
                </div>
                <img src=${img} alt=${name} />
            </div>
            <div class="project__info">
                <h2>${name}</h2>
                <h3>Nivel: ${nivel}</h3>

                <ul class="stack">
                    ${printIcons(tags)}
                </ul>
            </div>
        </div>
    `;
	});

	projectsHTML.innerHTML = html;
}

printProjects();
