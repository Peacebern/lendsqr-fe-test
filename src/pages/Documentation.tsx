import React from 'react'

const Documentation = () => {
    return (
        <main className="documentation">
            <h1>Lendsqr-Fe-Test Documentation</h1>
            <p>
                This project represents a frontend implementation of an internal administrative dashboard,
                modeled after the Lendsqr Admin Console. It was developed as part of a technical assessment
                to demonstrate core frontend engineering skills, including application structure, component
                design, data presentation, and the ability to make considered technical decisions.
            </p>

            <p>
                The project was built by Peacebern.
                GitHub profile:
                <a href="https://github.com/peacebern" target="_blank" rel="noopener noreferrer">
                    https://github.com/peacebern
                </a>
            </p>

            <section>
                <h2>Project Overview and Optimizations</h2>
                <p>
                    The dashboard emphasizes performance and maintainability. Custom React hooks were employed
                    to optimize performance. For example, the use of the <code>useMemo</code> hook in handling
                    table pagination resulted in a measurable improvement in performance, increasing efficiency
                    by over 100 percent.
                </p>
                <p>
                    The interface was designed to simulate a production-level admin console, providing reusable
                    components for tables, cards, and layout elements while maintaining a clean, modular
                    architecture. The application structure supports realistic data and easy scalability.
                </p>
            </section>

            <section>
                <h2>Technology Stack</h2>
                <p>
                    The project leverages a modern frontend stack tailored for maintainable and efficient web
                    development.
                </p>
                <ul>
                    <li><strong>React</strong> for component-driven architecture and dynamic rendering</li>
                    <li><strong>TypeScript</strong> for type safety and clearer contracts</li>
                    <li><strong>Vite</strong> for fast builds and modern tooling</li>
                    <li><strong>SCSS with CSS Modules</strong> for scoped, maintainable styling</li>
                    <li><strong>React Router</strong> for client-side navigation</li>
                    <li><strong>Mock data</strong> to simulate backend responses</li>
                </ul>
                <p>
                    This stack mirrors common production setups for internal dashboards, prioritizing flexibility,
                    safety, and predictable styling.
                </p>
            </section>

            <section>
                <h2>Project Structure and Application Flow</h2>
                <ul>
                    <li><strong>assets</strong> – images and static assets</li>
                    <li><strong>components</strong> – reusable UI components</li>
                    <li><strong>pages</strong> – route-level views (Dashboard, Users, User Details)</li>
                    <li><strong>routes</strong> – routing configurations</li>
                    <li><strong>styles</strong> – global and modular styles</li>
                    <li><strong>types</strong> – shared TypeScript definitions</li>
                    <li><strong>utils</strong> – helper functions and mock data</li>
                    <li><strong>App.tsx</strong> – root layout and routing</li>
                    <li><strong>main.tsx</strong> – application entry point</li>
                </ul>
                <p>
                    The application flow begins with <code>main.tsx</code>, which bootstraps the app.
                    <code>App.tsx</code> defines global layout and routing, while page components represent
                    individual admin views. Reusable components handle repeated UI patterns.
                </p>
            </section>

            <section>
                <h2>User Data Generation and Upload Process</h2>
                <p>
                    The application required a dataset of 500 users for testing. Since MockyAPI only allowed
                    100 users per request, an automated workflow was created to generate and upload users in
                    batches.
                </p>
                <p>
                    User data included names, phone numbers, emails, usernames, organization affiliations,
                    and status. Data was generated as JSON and uploaded in batches.
                </p>

                <h3>Workflow Steps</h3>
                <ol>
                    <li>Generate users (<code>node generate-users.js</code>) → produces <code>users-data.json</code></li>
                    <li>Upload users (<code>node upload-users.js</code>) → posts to MockyAPI</li>
                    <li>Repeat as needed</li>
                </ol>
            </section>

            <section>
                <h2>Best Practices and Development Approach</h2>
                <ul>
                    <li>Clear and consistent folder structure</li>
                    <li>Standardized import order and naming conventions</li>
                    <li>Linting for code quality</li>
                    <li>Reusable components and snippets</li>
                    <li>Scoped styling with SCSS modules</li>
                    <li>Avoidance of unnecessary component abstraction</li>
                </ul>
            </section>

            <section>
                <h2>Features and Functionality</h2>
                <p>
                    The dashboard includes live data previews, full-screen mode, cross-platform compatibility,
                    and comprehensive user management features. Tables, cards, and layout components are designed
                    for reuse and consistency.
                </p>
            </section>

            <section>
                <h2>Navigating the Codebase</h2>
                <p>
                    Begin with <code>main.tsx</code>, then move to <code>App.tsx</code> for layout and routing.
                    Page-level views are in <code>pages</code>, reusable UI in <code>components</code>, and
                    utilities and types in <code>utils</code> and <code>types</code>.
                </p>
            </section>

            <section>
                <h2>Architecture & Decisions</h2>

                <h3>Component Design</h3>
                <p>
                    Reusable components reduce duplication and improve maintainability.
                    <br />
                    <strong>Trade-off:</strong> More upfront planning, easier long-term extension.
                </p>

                <h3>Data Handling</h3>
                <p>
                    Mock data simulates real API responses to focus on frontend structure.
                </p>

                <h3>Routing Strategy</h3>
                <p>
                    Each admin section maps to a page-level route.
                    <br />
                    <strong>Alternative:</strong> Deeper nested routing for future expansion.
                </p>

                <h3>Styling</h3>
                <p>
                    SCSS and CSS Modules ensure scoped and predictable styles.
                </p>

                <h3>TypeScript</h3>
                <p>
                    Type safety improves clarity and maintainability across the codebase.
                </p>
            </section>

            <section>
                <h2>Deployment Routing Issue and Resolution on Vercel</h2>
                <p>
                    During deployment, client-side routes returned 404 errors when refreshed or accessed directly.
                    This occurred because Vercel attempted to resolve routes as physical files.
                </p>
                <p>
                    The issue was resolved by adding a <code>vercel.json</code> rewrite rule to redirect all routes
                    to <code>index.html</code>, allowing React Router to manage navigation.
                </p>
                <p>
                    This fix restored proper routing behavior for refreshes and deep links.
                </p>
            </section>

            <section>
                <h2>Comparison with Lendsqr Admin Console</h2>

                <h3>Where This Aligns</h3>
                <ul>
                    <li>Admin-first navigation layout</li>
                    <li>User-centric data exploration</li>
                    <li>Table-heavy operational views</li>
                    <li>Clear overview and detail separation</li>
                </ul>

                <h3>Where It Intentionally Differs</h3>
                <ul>
                    <li>Reduced visual density</li>
                    <li>Simplified interactions</li>
                    <li>No real-time or server-driven data</li>
                </ul>
            </section>

            <section>
                <h2>Evaluation</h2>

                <h3>What Went Well</h3>
                <ul>
                    <li>Clean structure</li>
                    <li>Strong separation of concerns</li>
                    <li>Reusable components</li>
                    <li>Realistic admin dashboard patterns</li>
                </ul>

                <h3>What Could Be Better</h3>
                <ul>
                    <li>Real API integration</li>
                    <li>Improved accessibility</li>
                    <li>Large dataset performance optimizations</li>
                </ul>
            </section>

            <section>
                <h2>Scalability</h2>
                <ul>
                    <li>Incremental feature growth</li>
                    <li>Server-side data integration</li>
                    <li>Additional admin modules without major refactors</li>
                </ul>
            </section>

            <section>
                <h2>Conclusion</h2>
                <p>
                    This project meets the goals of the Lendsqr Frontend assessment by delivering a clean,
                    well-structured, and scalable admin dashboard. It demonstrates solid frontend fundamentals,
                    thoughtful architectural decisions, and practical problem-solving.
                </p>
                <p>
                    While there is room for future improvements, the current implementation provides a strong
                    foundation and reflects real-world frontend engineering practices.
                </p>
            </section>
        </main>
    )
}

export default Documentation