import {
  isRouteErrorResponse,
  useRouteError,
  type RouteObject,
} from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{(error as Error)?.message || (error as string)}</h1>
  );
}

// If you want to customize the component display name in React dev tools:
ErrorBoundary.displayName = "SampleErrorBoundary";

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTES = [
  {
    index: true,
    label: "Generator",
    async lazy() {
      const { Generator } = await import("./Generator");
      return { Component: Generator };
    },
  },
] as (RouteObject & { label: string })[];
