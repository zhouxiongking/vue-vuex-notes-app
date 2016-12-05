<template>
    <div id="note-editor">
        <div class="wrapper-head">
            <div class="note-head">
                <input type="text" class="top-title" :value="note.title" data-type="title"
                       @input="editNote">
            </div>
        </div>
        <div class="wrapper-body">
            <div class="note-detail">
                <textarea :value="note.text" class="form-control" data-type="text"
                          @input="editNote" ></textarea>
            </div>
        </div>

    </div>
</template>

<script>
    import {editNote} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                note: state => state.activeNote
            },
            actions: {
                editNote
            }
        }
    }

</script>