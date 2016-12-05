<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>笔记</h2>
            <div class="btn-group btn-group-justified" role="group">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="show = 'all'"
                            :class="{active: show === 'all'}">
                        全部
                    </button>
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="show = 'favorites'"
                            :class="{active: show === 'favorites'}">
                        喜爱
                    </button>
                </div>
            </div>
        </div>
        <!-- 列表 -->
        <div class="container">
            <div class="list-group">
                <div v-for="note in filterNotes" class="list-group-item b-t-1" @click="updateActiveNote(note)"
                     :class="{active: activeNote === note}">
                    <h4 class="list-group-item-heading note-title">
                        {{ note.title.trim() }}
                    </h4>
                    <p class="note-introduce">
                        {{ note.text }}
                    </p>
                    <p class="note-time">
                        {{ note.createTime }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {updateActiveNote} from '../vuex/actions'

    export default {
        data () {
            return {
                show: 'all'
            }
        },
        vuex: {
            getters: {
                notes: state => state.notes,
                activeNote: state => state.activeNote
            },
            actions: {
                updateActiveNote
            }
        },
        computed: {
            filterNotes () {
                if (this.show === 'all') {
                    return this.notes;
                } else {
                    return this.notes.filter(note => note.favorite);
                }
            }
        }
    }


</script>