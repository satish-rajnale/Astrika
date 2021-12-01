# MicroFrontEnds app

### Micro front end implementation using the latest template provided by : npx create-mf-app.
> Microfrontends are sections of your UI, often consisting of dozens of components, that use frameworks like React, Vue, and Angular to render their components. Each microfrontend can be managed by a different team and may be implemented using its own framework.


## Core Ideas behind Micro Frontends
1. **Be Technology Agnostic**
- Each team should be able to choose and upgrade their stack without having to coordinate with other teams. Custom Elements are a great way to hide implementation details while providing a neutral interface to others.

2. **Isolate Team Code**
- Don’t share a runtime, even if all teams use the same framework. Build independent apps that are self contained. Don’t rely on shared state or global variables.

3. **Establish Team Prefixes**
- Agree on naming conventions where isolation is not possible yet. Namespace CSS, Events, Local Storage and Cookies to avoid collisions and clarify ownership.
