import { useEffect, useState } from "react";
import { usePosts } from "../../shared/hooks";
import { useFilteredPosts } from "../../shared/hooks";
import { Content } from "../../components/dashboard/Content";
import { Posts } from "../../components/post/Posts";
import { SidebarFilter } from "../../components/filter/SidebarFilter";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import "./dashboardPage.css";

export const DashboardPage = () => {
    const { getPosts, allPosts, isFetching } = usePosts();
    const [filters, setFilters] = useState({});
    const { posts, loading } = useFilteredPosts(filters);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    const showFiltered = filters.course || filters.title || filters.order || filters.startDate || filters.endDate;
    const postsToShow = showFiltered ? posts : allPosts;

    return (
        <div className="dashboard-container">
            <div className="dashboard-background"></div>
            <SidebarFilter onFilterChange={setFilters} />
            {loading && showFiltered ? <p>Cargando...</p> : <Content posts={postsToShow} getPosts={getPosts} />}
        </div>
    );
};
