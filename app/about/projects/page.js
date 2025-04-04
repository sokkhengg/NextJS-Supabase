// export const dynamic = 'force-dynamic'



import { Suspense } from "react"
import ProjectList from "./components/project-list"
import ProjectListLoading from "./components/project-list-loading"
import { ErrorBoundary } from "react-error-boundary"

export const metadata = {
    title: 'Projects',
  }

export default async function ProjectPage() {
    
    
    return (
        <div>
            <h1 className="mb-8 text-xl">Projects</h1>
            <div className="mb-8">Hello, this is the list of my projects</div>
            <ErrorBoundary fallback={<div>Cannot fectch projects currently</div>}>
                <Suspense fallback={<ProjectListLoading/>}>
                    <ProjectList/>

                </Suspense>

            </ErrorBoundary>
           

        </div>
    )
}