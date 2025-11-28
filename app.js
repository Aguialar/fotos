const activitiesData = require('./data/activities');

class App {
    constructor() {
        this.activities = [];
        this.init();
    }

    async init() {
        await this.loadActivities();
        this.render();
    }

    async loadActivities() {
        this.activities = activitiesData;
    }

    render() {
        const header = this.createHeader();
        const hero = this.createHero();
        const activitiesSection = this.createActivitiesSection();
        const footer = this.createFooter();

        document.body.appendChild(header);
        document.body.appendChild(hero);
        document.body.appendChild(activitiesSection);
        document.body.appendChild(footer);
    }

    createHeader() {
        const header = document.createElement('header');
        header.innerHTML = '<h1>Complejo Recreativo AyD</h1><nav><a href="#activities">Actividades</a><a href="#contact">Contacto</a></nav>';
        return header;
    }

    createHero() {
        const hero = document.createElement('section');
        hero.className = 'hero';
        hero.innerHTML = '<h2>Bienvenidos al Complejo Recreativo AyD</h2><p>¡Disfruta de un día lleno de diversión!</p>';
        return hero;
    }

    createActivitiesSection() {
        const section = document.createElement('section');
        section.id = 'activities';
        section.innerHTML = '<h2>Actividades Disponibles</h2>';
        
        const activitiesList = document.createElement('ul');
        this.activities.forEach(activity => {
            const listItem = document.createElement('li');
            listItem.innerText = `${activity.name}: ${activity.description}`;
            activitiesList.appendChild(listItem);
        });
        
        section.appendChild(activitiesList);
        return section;
    }

    createFooter() {
        const footer = document.createElement('footer');
        footer.innerHTML = '<p>Contacto: info@ayd.com | Síguenos en redes sociales</p>';
        return footer;
    }
}

new App();