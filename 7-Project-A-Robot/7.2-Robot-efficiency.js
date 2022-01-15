/* Can you write a robot that finishes the delivery task faster than
*  goalOrientedRobot? If you observe that robot's behavior, what obviously stupid
*  things does it do? How could those be improved?
*  If you solved the previous exercise, you might want to use your compareRobots
*  function to verify whether you improve the robot.
*
*  Hint: The main limitation of goalOrientedRobot is that it considers only one parcel
*  at a time. It will often walk back and forth across the village because the parcel
*  it happens to be looking at happens to be at the other side of the map, even if
*  there are others much closer.
*  One possible solution would be to compute routes for all packages and then take the
*  shortest one. Even better results can be obtained, if there are multiple shortest
*  routes, by preferring the ones that go to pick up a package instead of delivering a
*  package.
*/

// My solution

// Your code here

runRobotAnimation(VillageState.random(), yourRobot, memory);

// Solution from https://eloquentjavascript.net/code/#7.2
function lazyRobot({place, parcels}, route) {
    if (route.length == 0) {
        // Describe a route for every parcel
        let routes = parcels.map(parcel => {
            if (parcel.place != place) {
                return {route: findRoute(roadGraph, place, parcel.place),
                    pickUp: true};
            } else {
                return {route: findRoute(roadGraph, place, parcel.address),
                    pickUp: false};
            }
        });

        // This determines the precedence a route gets when choosing.
        // Route length counts negatively, routes that pick up a package
        // get a small bonus.
        function score({route, pickUp}) {
            return (pickUp ? 0.5 : 0) - route.length;
        }
        route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }

    return {direction: route[0], memory: route.slice(1)};
}

runRobotAnimation(VillageState.random(), lazyRobot, []);