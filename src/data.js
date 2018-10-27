const tasks = [
    {
        "project_id": 1,
        "title": "Отправка письма менеджеру со страницы 'Партнерам'"
    },
    {
        "project_id": 2,
        "title": "Просмотр и редактирование имён"
    },
    {
        "project_id": 3,
        "title": "Проверка пользователя на наличие прав администратора"
    },
    {
        "project_id": 4,
        "title": "Профиль покупателя"
    }
];

const projects = [
    {
        "id": 1,
        "title": "Mercury"
    },
    {
        "id": 2,
        "title": "Venus"
    },
    {
        "id": 3,
        "title": "Earth"
    }
];

export { tasks, projects }

const projectsUrl = 'http://private-anon-5c19b81217-bee2508.apiary-mock.com/projects';
const tasksUrl = 'https://private-anon-5c19b81217-bee2508.apiary-mock.com/tasks';

const getData = (url) => {
    return(
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log('404');
                }
            })
    );
};


const getProjects = () => getData(projectsUrl);
const getTasks = () => getData(tasksUrl);

export { getTasks, getProjects };