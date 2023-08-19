import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { Fragment } from 'react';
import {HeaderOnly, DefaultLayout} from '~/components/Layout'
import Search from '~/pages/Search';


const publicRoutes = [
    {path: '/', component: Home, Layout: DefaultLayout},
    {path: '/following', component: Following, Layout: DefaultLayout},
    {path: '/profile', component: Profile, Layout: DefaultLayout},
    {path: '/upload', component: Upload, Layout: HeaderOnly},
    {path: '/search', component: Search, Layout: Fragment},
]   

const privateRoutes = [


]

export {publicRoutes, privateRoutes}