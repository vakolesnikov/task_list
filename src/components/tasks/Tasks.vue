<template>
    <div>
        <Title title="Задачи:"/>
        <div>

            <div v-if="tasks.length">
                <div
                    v-for="task in tasks"
                    :key="task.project_id"
                    class="task-item"
                >
                    {{ task.title }}
                </div>
            </div>
            <div v-else>
                Загрузка...
            </div>
        </div>
    </div>
</template>

<script>
    import Title from '../../components/title/Title';

    export default {
        name: 'Tasks',

        components: {
          Title,
        },

        props: {
            tasks: Array,
        }
    }
</script>

<style>
    .task-item {
        padding: 5px 0;
    }
</style>