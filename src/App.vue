<template>
    <div class="main-container">
        <Projects :projects="projects" @filter="handleTaskFilter" @all="handleAllTasksVisible"/>
        <Tasks :tasks="visibleTasks"/>
    </div>
</template>

<script>
    import Projects from './components/projects/Projects';
    import Tasks from './components/tasks/Tasks';

    import appServices from "./services/appServices";

    export default {
        name: 'App',

        components: {
            Tasks,
            Projects,
        },

        data: function() {
            return({
                projects: [],
                tasks: [],
                visibleTasks: this.tasks
            })
        },

        beforeCreate: function() {
            appServices.getProjects().then(res => this.projects = res);
            appServices.getTasks().then((res) => {
                this.tasks = res;
                this.visibleTasks = res;
            });
        },

        methods: {
            handleTaskFilter(id) {
                this.visibleTasks = this.tasks.filter(item => item.project_id === id)
            },

            handleAllTasksVisible() {
                this.visibleTasks = this.tasks;
            },
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
</style>