# Sending Commands

For send commands to devices the GCS uses ros services.

# Basic services of devices

The follow table have he basic services for management tool can loadmission and run mission to each UAV.

| PATH                     | DATA          | TYPE                            | DESCRIPTION                                       |
| ------------------------ | ------------- | ------------------------------- | ------------------------------------------------- |
| uav_id/configure_mission | Load Mission  | aerialcore_common/ConfigMission | Envío de waypoint y atributos de la misión al UAV |
| uav_id/start_mission     | Start Mission | std_srvs/SetBool                | Señal de despegue de drone                        |

### Mission srv msg => aerialcore_common/ConfigMission

This ros msg have all structure for command a mission with action to devices.

```jsx
string type
sensor_msgs/NavSatFix[] waypoint
float64 radius
float64 maxVel
float64 idleVel
std_msgs/Float64MultiArray yaw
std_msgs/Float64MultiArray gimbalPitch
std_msgs/Float64MultiArray speed
int8 yawMode
int8 traceMode
int8 gimbalPitchMode
int8 finishAction
std_msgs/Float64MultiArray commandList        # action id
std_msgs/Float64MultiArray commandParameter   # action value
---
bool success
```

| variable          | Type            | Description                                                                                                                                                                                 |
| ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type              | String          | if GPS or rkt                                                                                                                                                                               |
| waypoint          | Array NavSatFix | waypoint list [latitude, longitude ,altitude ]                                                                                                                                              |
| radius            | float           | radius in trace Mode                                                                                                                                                                        |
| maxVel            | float           | Max velocity in m/s                                                                                                                                                                         |
| idleVel           | float           | Cruising Speed in m/s                                                                                                                                                                       |
| yaw               | Array float     | list of yaw for each waypoint, value in degrees [-180, 180] with 0 in north.                                                                                                                |
| gimbalPitch       | Array float     | List of gimbal values for each waypoint , value in degrees [10,-180] with 0 see on front                                                                                                    |
| speed             | Array float     | List of speed to arrive to waypoint                                                                                                                                                         |
| yawMode           | int             | Depend of each device                                                                                                                                                                       |
| TraceMode         | int             | Depend of each device                                                                                                                                                                       |
| gimbalPitchMode   | int             | Depend of each device                                                                                                                                                                       |
| finishAction      | int             | Depend of each UAV                                                                                                                                                                          |
| CommandList       | Array float     | Depend of each UAV , Acciones a realizar al final de la ruta: valor 0: sin accion valor 1: retornar a home valor 2: aterrizaje automatico valor 3: vuelve al punto 0 valor 4: modo infinito |
| CommandParamenter | Array float     | Depend of each UAV , Acciones a realizar al final de la ruta: valor 0: sin accion valor 1: retornar a home valor 2: aterrizaje automatico valor 3: vuelve al punto 0 valor 4: modo infinito |

### mission config for DJI devices

here explain the custom configuration for DJI devices.

#### yawMode

| value | Name     | description                                         |
| ----- | -------- | --------------------------------------------------- |
| 0     | Auto     | point to next waypoint                              |
| 1     | Lock     | keep the initial value                              |
| 2     | RC       | Free mode, for actions and can be controller for RC |
| 3     | waypoint | point to next waypoint                              |

#### traceMode

| value | Name           | description                                                                                                             |
| ----- | -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 0     | point to point | point to point, after reaching the target waypoint hover, complete waypt action (if any), then fly to the next waypoint |
| 1     | smooth         | Coordinated turn mode, smooth transition between waypoints, no waypoints task                                           |

#### Finish action

| value | Name              | description            |
| ----- | ----------------- | ---------------------- |
| 0     | no action         | no action              |
| 1     | return to home    | return to home         |
| 2     | auto landing      | auto landing           |
| 3     | return to point 0 | return to point 0      |
| 4     | infinite mode     | infinite mode, no exit |

#### gimbalMode

| value | Name        | description                                              |
| ----- | ----------- | -------------------------------------------------------- |
| 0     | Gimbal free | free mode, no control on gimbal                          |
| 1     | Waypoint    | auto mode, Smooth transition between waypoints on gimbal |

### Command action and command parameter

This are a matrix with a row for each waypoint and the command action indicate the number of action to do and the command parameter the value of the action .

| actions | Name        | description      |
| ------- | ----------- | ---------------- |
| 0       | stay        | no action        |
| 1       | photo       | simple shot      |
| 2       | video start | record video     |
| 3       | video stop  | end record video |
| 4       | yaw         | craft yaw        |
| 5       | gimbal      | gimbal pitch     |
