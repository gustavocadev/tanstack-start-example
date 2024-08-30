/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SigninImport } from './routes/signin'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as SettingsIndexImport } from './routes/settings.index'
import { Route as AuthHomeImport } from './routes/_auth/home'
import { Route as SettingsProfileIndexImport } from './routes/settings.profile'
import { Route as SettingsNotificationsIndexImport } from './routes/settings.notifications.index'

// Create/Update Routes

const SigninRoute = SigninImport.update({
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsIndexRoute = SettingsIndexImport.update({
  path: '/settings/',
  getParentRoute: () => rootRoute,
} as any)

const AuthHomeRoute = AuthHomeImport.update({
  path: '/home',
  getParentRoute: () => AuthRoute,
} as any)

const SettingsProfileIndexRoute = SettingsProfileIndexImport.update({
  path: '/settings/profile/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsNotificationsIndexRoute = SettingsNotificationsIndexImport.update(
  {
    path: '/settings/notifications/',
    getParentRoute: () => rootRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninImport
      parentRoute: typeof rootRoute
    }
    '/_auth/home': {
      id: '/_auth/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof AuthHomeImport
      parentRoute: typeof AuthImport
    }
    '/settings/': {
      id: '/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsIndexImport
      parentRoute: typeof rootRoute
    }
    '/settings/notifications/': {
      id: '/settings/notifications/'
      path: '/settings/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof SettingsNotificationsIndexImport
      parentRoute: typeof rootRoute
    }
    '/settings/profile/': {
      id: '/settings/profile/'
      path: '/settings/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof SettingsProfileIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthRoute: AuthRoute.addChildren({ AuthHomeRoute }),
  SigninRoute,
  SettingsIndexRoute,
  SettingsNotificationsIndexRoute,
  SettingsProfileIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/signin",
        "/settings/",
        "/settings/notifications/",
        "/settings/profile/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/home"
      ]
    },
    "/signin": {
      "filePath": "signin.tsx"
    },
    "/_auth/home": {
      "filePath": "_auth/home.tsx",
      "parent": "/_auth"
    },
    "/settings/": {
      "filePath": "settings.index.tsx"
    },
    "/settings/notifications/": {
      "filePath": "settings.notifications.index.tsx"
    },
    "/settings/profile/": {
      "filePath": "settings.profile.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
