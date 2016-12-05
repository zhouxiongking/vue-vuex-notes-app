/**
 * Created by zhouxiong on 16/12/4.
 */

export const addNote = ({dispatch}) => {
    dispatch('ADD_NOTE');
};

export const editNote = ({dispatch}, e) => {
    dispatch('EDIT_NOTE', e);
};

export const deleteNote = ({dispatch}) => {
    dispatch('DELETE_NOTE');
};

export const updateActiveNote = ({dispatch}, note) => {
    dispatch('SET_ACTIVE_NOTE', note);
};

export const toggleNote = ({dispatch}) => {
    dispatch('TOGGLE_FAVORITE');
};