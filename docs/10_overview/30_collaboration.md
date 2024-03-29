---
sidebar_position: 30
---

# 🫶 Collaboration

## Outline

This article outlines the modes of collaboration for AOH development.

![collabOverview](/img/collab.png)

AOH shall avail its packages (eg. NPM registries and container images) to developers.

The project shall setup and maintain the following repositories:

-   Infrastructure code repository `Project Infra Repo`. This contains the over-arching project deliverable setup, and serves as the gatekeeper to the project's deliverables.
-   **Each module/service** within the project having:
    -   source code repository `Dev Src Repo`
    -   infrastructure code repository `Dev Infra Repo`
    -   container image registry `Dev Container Registry`

The project shall exercise full control over their product's development and release processes.
The appropriate permissions can be governed via access control to the repositories.

Should the project engage external parties, these parties can have autonomy of their repositories/registries.

> NOTE: **external parties' access should be restricted to artifacts marked under `External` only**.

## Development

For services to be incorporated into AOH.
The following are generally required:

-   Source code
-   Infrastructure code
-   Hasura metadata + DB Initialization Scripts
    > includes service's schema and graphql references
