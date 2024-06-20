import { Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllPostsComponent } from './pages/view-all-posts/view-all-posts.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'view-all-post', pathMatch: 'full'
    },
    {
        path: 'create-post', component: CreatePostComponent
    },
    {
        path: 'view-all-post', component: ViewAllPostsComponent
    },
    {
        path: 'view-post/:id', component: ViewPostComponent
    }
];
