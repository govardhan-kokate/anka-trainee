import { Suspense } from 'react';
import {useLoaderData,defer} from 'react-router-dom';

import Posts from '../components/Posts';
import {getSlowPosts,defer,Await} from '../util/api';

function DefferedBlogPostPage(){
    const loaderData = useLoaderData();

    return(
        <>
        <h1>Our Blog Posts</h1>
        <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.posts}>
            {(loadedPosts) => <Posts blogPosts={loadedPosts}/>}
        </Await>
        </Suspense>
    
        <Posts blogPosts={loaderData}/>
        </>
    );
}

export default DefferedBlogPostPage;

export async function loader(){
    return defer({posts:getSlowPosts()});
}