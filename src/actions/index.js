import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';
import {commentsUrl}  from 'actions/urls';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  }
}

export function fetchComments() {
  const response = axios.get(commentsUrl);
  return {
    type: FETCH_COMMENTS,
    payload: response,
  }
}
