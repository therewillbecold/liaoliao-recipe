import axios from 'axios'

let host = process.env.NODE_ENV === 'production' ? 'http://liaoliaodesign.site' : `http://${window.location.hostname}:60000`
const API = {
  getCategories: '/api/categories',
  getRecipesByCategoryId: '/api/recipe',
  getRecipeDetail: '/api/detail',
  searchItems: '/api/search'
}

const Ajax = function (url, method, params) {
  let paramObj = {}
  if (method.toLowerCase() == 'get') {
    paramObj.params = params
  } else {
    paramObj.data = params
  }
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

export function searchItems(params) {
  return Ajax.get(API.searchItems, params)
}