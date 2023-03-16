import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";


export class AppRouteReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // console.log('shouldDetach', route);
        return true;
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        // console.log('store', route, handle);
        if (route.data['routeKey'] && handle) {
            // console.log('stored!');
            AppRouteReuseStrategy.handlers[route.data['routeKey']] = handle;
        }
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // console.log('shouldAttach', route, !!route.routeConfig?.path && !!AppRouteReuseStrategy.handlers[route.routeConfig.path]);
        return (
            !!route.data['routeKey'] && !!AppRouteReuseStrategy.handlers[route.data['routeKey']]
        );
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        // console.log('retrieve', route);
        if (!route.data['routeKey']) {
            return null;
        }
        return AppRouteReuseStrategy.handlers[route.data['routeKey']];
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // console.log('shouldReuseRoute', future, curr);
        // console.log(future.data['routeKey'] === curr.data['routeKey']);
        return future.data['routeKey'] === curr.data['routeKey'];
    }

}