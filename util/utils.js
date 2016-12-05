/**
 * Created by zhouxiong on 16/12/5.
 */

export const formatDate = (date) => {
    return (date.getYear() + 1900) + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}