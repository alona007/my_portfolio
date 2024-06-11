const images = [
    {
      id: 1,
      title: 'webstudio webservice',
      mob: './img/my_portfolio/webstudio_mob-min.png',
      tab: './img/my_portfolio/webstudio_tab-min.png',
      des: './img/my_portfolio/webstudio_desc-min.png',
      link: 'https://alona007.github.io/goit-markup-hw-06/',
    },
    {
      id: 2,
      title: 'yachtjet webservice',
      mob: './img/my_portfolio/yachtjet_mob-min.png',
      tab: './img/my_portfolio/yachtjet_tab-min.png',
      des: './img/my_portfolio/yachtjet_desc-min.png',
      link: 'https://maksym741.github.io/project-team-5/',
    },
    {
      id: 3,
      title: 'jefferson webservice',
      mob: './img/my_portfolio/jefferson_mob-min.png',
      tab: './img/my_portfolio/jefferson_tab-min.png',
      des: './img/my_portfolio/jefferson_desc-min.png',
      link: 'https://nazarchona.github.io/project_team_04/',
    },
  ];
  
  const techStack = 'HTML/CSS, JavaScript, Git';
  const totalItem = 3;
  let minId = 1;
  let maxId = 3;
  
  const list = document.querySelector('.projects-list');
  const loadBtn = document.querySelector('.projects-load-btn');
  const clearBtn = document.querySelector('.projects-clear-btn');
  
  const iconsPath = './img/svg/icons.svg';
  
  document.addEventListener('DOMContentLoaded', renderMarkup);
  loadBtn.addEventListener('click', addElements);
  clearBtn.addEventListener('click', clearElements);
  
  function renderMarkup() {
    list.innerHTML = createMarkup(images, minId, maxId);
    loadBtn.classList.remove('is-hidden');
    minId += 3;
    maxId += 3;
  }
  
  function createMarkup(images, minId, maxId) {
    return images
      .filter(item => item.id >= minId && item.id <= maxId)
      .map(
        ({ id, title, mob, tab, des, link }) =>
          `<li class='projects-list-item' id='${id}'>
            <div class='proj-wrap-img'>
              <picture class='proj-item-imgs'>
                <source 
                  media='(min-width: 1280px)'
                  srcset="${des}"
                />
                <source 
                  media='(min-width: 768px)'
                  srcset="${tab}"
                />
                <source 
                  media='(max-width: 767px)'
                  srcset="${mob}"
                />
                <img
                  class="proj-img"
                  src="${des}"
                  alt='${title}'
                />
              </picture>
            </div>
            <p class='proj-tech-stack'>${techStack}</p>
            <div class='proj-wrap-descr'>
              <h3 class='proj-descr-title'>${title}</h3>
              <a class='proj-descr-link' href='${link}' target="_blank">
                visit
                <svg class='proj-link-svg' width='24' height='24'>
                  <use href="${iconsPath}#icon-Visit_arrow"></use>
                </svg>
              </a>
            </div>
          </li>`
      )
      .join('');
  }
  
  function addElements(event) {
    event.preventDefault();
    list.insertAdjacentHTML('beforeend', createMarkup(images, minId, maxId));
    minId += 3;
    maxId += 3;
    if (minId > totalItem) {
      loadBtn.classList.add('is-hidden');
      clearBtn.classList.remove('is-hidden');
    }
  }
  
  function clearElements(event) {
    event.preventDefault();
    minId = 1;
    maxId = 3;
    renderMarkup();
    clearBtn.classList.add('is-hidden');
    scrollToProjects();
  }
  
  function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }