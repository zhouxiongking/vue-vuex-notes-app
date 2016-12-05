/**
 * Created by zhouxiong on 16/12/4.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import {formatDate} from '../util/utils'

Vue.use(Vuex);

const state = {
    notes: [],
    activeNote: {}
};

const mutations = {
    ADD_NOTE (state) {
        const newNote = {
            title: '无标题文档',
            text: '',
            favorite: false,
            createTime: formatDate(new Date())
        };
        state.notes.push(newNote);
        state.activeNote = newNote;
    },
    EDIT_NOTE (state, e) {
        state.activeNote[e.target.dataset.type] = e.target.value;
    },
    DELETE_NOTE (state) {
        if (state.activeNote && state.notes.length) {
            state.notes.$remove(state.activeNote);
            state.activeNote = state.notes[0] || {};
        }
    },
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note;
    }
};

export default new Vuex.Store({
    state, mutations
});

