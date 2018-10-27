<template>
    <div class="main-container">
        <div class="box">
            <div class="title">Проекты:</div>
            <button class="download-button" @click="handleDownloadData">
                Загрузить данные
            </button>
        </div>
        <div class="projects">
            <div v-if="projects.length" class="projects-item" @click="handleAllTasksVisible">
                Все
            </div>
            <div v-if="!projects.length">
                Проектов нет
            </div>
            <div v-for="project in projects">
                <div @click="handleTaskFilter(project.id)" class="projects-item">
                    {{ project.title }}
                </div>
            </div>
        </div>

        <div class="title">Задачи:</div>
        <div>
            <div v-for="task in visibleTasks" class="task-item">
                {{ task.title }}
            </div>
            <div v-if="!tasks.length">
                Задач нет
            </div>
        </div>

    </div>
</template>

<script>
    import { getProjects, getTasks} from "./data";

    export default {
        name: 'App',

        data: function() {
            return({
                projects: [],
                tasks: [],
                visibleTasks: this.tasks
            })
        },

        methods: {
            handleTaskFilter(id) {
                this.visibleTasks = this.tasks.filter(item => item.project_id === id)
            },

            handleAllTasksVisible() {
                this.visibleTasks = this.tasks;
            },

            handleDownloadData() {
                getProjects().then(res => this.projects = res);
                getTasks().then((res) => {
                    this.tasks = res;
                    this.visibleTasks = res;
                });
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Mali:200,200i,400,400i,500,500i,600,600i,700,700i');

    .main-container {
        font-family: 'Mali', cursive;
        font-weight: 500;
        width: 900px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        margin-bottom: 25px;
        font-size: 28px;
        font-weight: 700;
    }

    .download-button {
        height: 40px;

        padding: 5px 10px;
        outline: none;

        background-color: #e2e2e2;
        border: 2px solid #f0f3ff;
        border-radius: 7px;

        font-family: 'Mali', cursive;
        font-size: 16px;
        text-transform: uppercase;
        color: #1e294c;

        cursor: pointer;
    }

    .projects {
        display: flex;
        margin-bottom: 50px;
    }

    .projects-item {
        padding: 5px 10px;

        margin-right: 40px;

        background-color: #e2e2e2;
        border: 2px solid #f0f3ff;
        border-radius: 7px;

        font-size: 20px;
        text-transform: uppercase;
        color: #1e294c;

        cursor: pointer;
    }

    .task-item {
        padding: 5px 0;
    }
</style>