<template>
    <div>
        <Title title="Проекты: "/>
        <div class="projects">
            <div
                v-if="projects.length"
                @click="$emit('all')"
                class="projects-item"
            >
                <router-link :to="{ name: 'main', params: { id: 'All' }}">
                    Все
                </router-link>
            </div>
            <div v-if="!projects.length">
                Загрузка...
            </div>
            <div
                v-for="project in projects"
                :key="project.id"
                @click="$emit('filter', project.id)"
                class="projects-item"
            >
                <router-link :to="{ name: 'main', params: { id: project.title }}">
                    {{ project.title }}
                </router-link>
            </div>
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

        font-size: 20px;
        text-transform: uppercase;
        color: #1e294c;

        cursor: pointer;
    }
</style>
