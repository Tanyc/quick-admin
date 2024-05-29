import { service } from '@/utils/axios'

interface LoginParams {
  username: string
  password: string
}

// User login api
export function loginApi(data: LoginParams): Promise<any> {
  return service({
    url: '/auth/doLogin',
    method: 'post',
    data
  })
}

// Get User info
export function getUserInfo(): Promise<any> {
  return service({
    url: '/system/user/getUserInfo',
    method: 'get'
  })
}

// User logout api
export function logoutApi() {
  return service({
    url: '/auth/logout',
    method: 'get'
  })
}

// 获取用户租户集合
export function getUserTenantList() {
  return service({
    url: '/system/user/getUserTenantList',
    method: 'get'
  })
}

// 获取路由
export function getRoutes() {
  return service({
    url: '/system/menu/getRoutes',
    method: 'get'
  })
}

// 获取菜单 amis schema
export function getSchemaByPath(params: any) {
  return service({
    url: '/system/menu/getSchemaByPath',
    method: 'get',
    params
  })
}

// 获取菜单 amis schema
export function getSchema(params: any) {
  return service({
    url: '/system/menu/getSchemaById',
    method: 'get',
    params
  })
}

// 更新菜单 amis schema
export function updateSchema(data: any): Promise<any> {
  return service({
    url: '/api/system/menu/updateSchemaById',
    method: 'put',
    data
  })
}
