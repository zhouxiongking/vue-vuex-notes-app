<template>
    <div id="app">
        <toolbar></toolbar>
        <node-list></node-list>
        <editor></editor>
    </div>
</template>

<script>
    import Toolbar from './Toolbar.vue'
    import NodeList from './NoteList.vue'
    import Editor from './Editor.vue'

    export default {
        components: {
            Toolbar,
            NodeList,
            Editor
        }
    }
</script>