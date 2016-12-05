<template>
    <div id="toolbar">
        <i class="glyphicon glyphicon-plus" @click="addNote"></i>
        <i class="glyphicon glyphicon-star" @click="toggleNote"
           :class="{starred: activeNote && activeNote.favorite}"></i>
        <i class="glyphicon glyphicon-remove" @click="deleteNote"></i>
    </div>
</template>

<script>
    import {addNote, toggleNote, deleteNote} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                addNote,
                toggleNote,
                deleteNote
            }
        }
    }
</script>