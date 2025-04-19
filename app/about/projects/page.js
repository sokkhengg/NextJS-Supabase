// export const dynamic = 'force-dynamic'



import { Suspense } from "react"
import ProjectList from "./components/project-list"
import ProjectListLoading from "./components/project-list-loading"
import { ErrorBoundary } from "react-error-boundary"
import H1 from "@/components/h1"

export const metadata = {
    title: 'Projects',
  }

export default async function ProjectPage() {
    
    
    return (
        <div>
            <H1>Projects</H1>
            <div className="mb-8">Hello, this is the list of my projects</div>
            <ErrorBoundary fallback={<div>Cannot fectch projects currently</div>}>
                <Suspense fallback={<ProjectListLoading/>}>
                    <ProjectList/>

                </Suspense>

            </ErrorBoundary>
           

        </div>
    )
}