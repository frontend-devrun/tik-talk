import { Route } from '@angular/router';
import { canActivateAuth } from '@tik-talk/auth';
import { LoginPageComponent } from '@tik-talk/login-page-component';
// import { canDeactivateGuard } from '@shared/util-router';

// import {
//   AuthorizedLayoutComponent,
//   UnauthorizedLayoutComponent,
// } from '@users/core/ui-layout';

// const layoutAgnosticComponents = [
//   {
//     path: 'profile',
//     loadComponent: () =>
//       import('@tik-talk/profile').then((c) => c.ProfilePageComponent),
//   },
// ];

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@tik-talk/layout').then((c) => c.LayoutComponent),
    children: [
      { path: '', redirectTo: 'profile/me', pathMatch: 'full' },
      {
        path: 'profile/:id',
        loadComponent: () =>
          import('@tik-talk/profile').then((c) => c.ProfilePageComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@tik-talk/settings').then((c) => c.SettingsPageComponent),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('@tik-talk/search').then((c) => c.SearchPageComponent),
      },
    ],
    canActivate: [canActivateAuth],
  },

  { path: 'login', component: LoginPageComponent },
];

// export const appRoutes: Route[] = [
//   {
//     path: '',
//     component: LayoutComponent,
//     canActivate: [canActivateAuth],
//     children: [
//       { path: '', redirectTo: 'profile/me', pathMatch: 'full' },

//       {
//         //path: 'admin',
//         //canActivateChild: [adminGuard],
//         children: [
//           { path: 'profile/:id', component: ProfilePageComponent },
//           //   {
//           //     path: 'users',
//           //     loadComponent: () =>
//           //       import('@users/users/feature-users').then(
//           //         (c) => c.UserListContainerComponent
//           //       ),
//           //   },
//           //   {
//           //     path: 'users/:id',
//           //     loadComponent: () =>
//           //       import('@users/users/feature-user-details').then(
//           //         (c) => c.UserDetailsComponent
//           //       ),
//           //   },
//         ],
//       },
//       //   {
//       //     path: 'profile',
//       //     loadComponent: () =>
//       //       import('@users/profile/feature-profile').then(
//       //         (c) => c.SelfProfileContainerComponent
//       //       ),
//       //   },
//       //   {
//       //     path: 'profile/:id',
//       //     loadComponent: () =>
//       //       import('@users/profile/feature-profile').then(
//       //         (c) => c.UserProfileContainerComponent
//       //       ),
//       //   },
//       //   {
//       //     path: 'article-editor',
//       //     loadComponent: () =>
//       //       import('@users/articles/feature-article-create').then(
//       //         (c) => c.ArticlesCreateContainerComponent
//       //       ),
//       //     canDeactivate: [canDeactivateGuard],
//       //   },
//       //   {
//       //     path: 'articles',
//       //     loadComponent: () =>
//       //       import('@users/articles/feature-articles').then(
//       //         (c) => c.ArticleListContainerComponent
//       //       ),
//       //   },
//       //   {
//       //     path: 'articles/:id',
//       //     loadComponent: () =>
//       //       import('@users/articles/feature-article-details').then(
//       //         (c) => c.ArticleDetailsContainerComponent
//       //       ),
//       //   },
//       //   {
//       //     path: 'tasks',
//       //     loadComponent: () =>
//       //       import('@users/tasks/feature-tasks').then(
//       //         (c) => c.TasksContainerComponent
//       //       ),
//       //   },
//       //   {
//       //     path: 'settings',
//       //     loadComponent: () =>
//       //       import('@users/settings/feature-settings').then(
//       //         (c) => c.SettingsComponent
//       //       ),
//       //   },
//       //   {
//       //     path: 'chart',
//       //     loadComponent: () =>
//       //       import('@users/chart/feature-chart').then((c) => c.ChartComponent),
//       //   },
//       //   {
//       //     path: 'backlog',
//       //     loadComponent: () =>
//       //       import('@users/backlog/feature-backlog').then(
//       //         (c) => c.BacklogComponent
//       //       ),
//       //   },
//       ...layoutAgnosticComponents,
//       //
//     ],
//   },
//   {
//     path: 'guest',
//     // component: UnauthorizedLayoutComponent,
//     children: [...layoutAgnosticComponents],
//   },
//   //   {
//   //     path: 'login',
//   //     loadComponent: () =>
//   //       import('@users/auth/feature-login').then(
//   //         (c) => c.LoginContainerComponent
//   //       ),
//   //   },
//   //   {
//   //     path: 'signup',
//   //     loadComponent: () =>
//   //       import('@users/auth/feature-register').then(
//   //         (c) => c.RegisterContainerComponent
//   //       ),
//   //   },
// ];
