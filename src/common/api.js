import axios from 'axios'
let host = 'http://localhost:60000'
const API = {
  getCategories: '/api/categories',
  getRecipesByCategoryId: '/api/recipe',
  getRecipeDetail: '/api/detail'
}

const Ajax = function (url, method, params) {
  let paramObj = {}
  if (method.toLowerCase() == 'get') {
    paramObj.params = params
  } else {
    paramObj.data = params
  }
  console.log(paramObj);
  return axios({
    url: host + url,
    method,
    ...paramObj
  })
}

Ajax.get = function (url, params) {
  return Ajax(url, 'get', params)
}

Ajax.post = function (url, params) {
  return Ajax(url, 'post', params)
}

export function getCategories() {
  return Ajax.get(API.getCategories)
}

export function getRecipesByCategoryId(params) {
  return Ajax.get(API.getRecipesByCategoryId + '/' + params.id)
}

export function getRecipeDetail(params) {
  return Ajax.get(API.getRecipeDetail, params)
}