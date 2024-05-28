La siguiente tabla recoge los servicios que requiere la management tool para poder enviar la misión y comandar la misión a cada UAV.

| PATH                     | DATA          | TYPE                            | DESCRIPTION                                       |
| ------------------------ | ------------- | ------------------------------- | ------------------------------------------------- |
| uav_id/configure_mission | Load Mission  | aerialcore_common/ConfigMission | Envío de waypoint y atributos de la misión al UAV |
| uav_id/start_mission     | Start Mission | std_srvs/SetBool                | Señal de despegue de drone                        |
|                          |               |                                 |                                                   |

Mensaje customizado:

### aerialcore_common/ConfigMission

```jsx
string type
sensor_msgs/NavSatFix[] waypoint
float64 radius
float64 maxVel
float64 idleVel
std_msgs/Float64MultiArray yaw
int8 yawMode
int8 traceMode
int8 finishAction
---
bool success
```

| variable     | Type            | Description                                                                                                                                                                                    |
| ------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type         | String          |                                                                                                                                                                                                |
| waypoint     | Array NavSatFix | lista de puntos de la misión [latitud, longitud altura]                                                                                                                                        |
| radius       | float           |                                                                                                                                                                                                |
| maxVel       | float           | Velocidad máximo de vuelo en m/s                                                                                                                                                               |
| idleVel      | float           | Velocidad promedio a realizar la misión en m/s                                                                                                                                                 |
| yaw          | Array float     | Lista de valores de yaw para cada waypoint, tiene la misma longitud del mismo.                                                                                                                 |
| yawMode      | int             | Depende de cada drone                                                                                                                                                                          |
| TraceMode    | int             | Depende de cada drone                                                                                                                                                                          |
| FinishAction | int             | depende de cada drone , Acciones a realizar al final de la ruta: valor 0: sin accion valor 1: retornar a home valor 2: aterrizaje automatico valor 3: vuelve al punto 0 valor 4: modo infinito |
