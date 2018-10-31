<template>
    <div>
        <Title title="Проекты: "/>
        <div class="projects">
            <router-link
                    v-if="projects.length"
                    :to="{ name: 'main', params: { id: 'All' }}"
                    class="projects-item"
            >
                Все
            </router-link>
            <div v-else>
                Загрузка...
            </div>

            <router-link
                    v-for="project in projects"
                    :key="project.id"
                    :to="{ name: 'main', params: { id: project.id }}"
                    class="projects-item"
            >
                {{ project.title }}
            </router-link>

        </div>
    </div>
</template>

<script>
    import Title from '../../components/title/Title'

    export default ({
        name: 'Projects',

        components: {
          Title,
        },

        props: {
            projects: Array,
        }
    })
</script>

<style>
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

        text-decoration: none;
        color: #1e294c;
        font-size: 20px;
        text-transform: uppercase;

        cursor: pointer;
    }

    .router-link-exact-active {
        background-color: #b5af9a;
        color: #580808;
    }
</style>
