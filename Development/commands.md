- name: Commands_type_explain
  description: how send command the UAV using command/send post API

/loadmission:
post:
summary: Load Mission
description: explaint type command load mission
tags: - Commands_type_explain
requestBody:
content:
application/json:
schema:
$ref: "#/components/schemas/LoadMission"
required: true

      responses:
        "200":
          description: planned route

/commandmission:
post:
summary: Command Mission
description: explaint type command command mission
tags: - Commands_type_explain
requestBody:
content:
application/json:
schema:
$ref: "#/components/schemas/commandmission"
required: true

      responses:
        "200":
          description: planned route

/gimbal:
post:
summary: Command Gimbal
description: explaint type command Gimbal
tags: - Commands_type_explain
requestBody:
content:
application/json:
schema:
$ref: "#/components/schemas/Gimbal"
required: true

      responses:
        "200":
          description: planned route
