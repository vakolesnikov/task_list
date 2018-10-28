const projectsUrl = 'http://private-anon-5c19b81217-bee2508.apiary-mock.com/projects';
const tasksUrl = 'https://private-anon-5c19b81217-bee2508.apiary-mock.com/tasks';

const getData = (url) => {
    return(
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
    );
};

export default {
    getProjects: () => getData(projectsUrl),
    getTasks: () => getData(tasksUrl),
};