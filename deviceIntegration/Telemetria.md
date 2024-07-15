# Integration of new devices to GCS

For add a new type of device in GCS is necesary get the basic data of the device, this can be using ROS and reading the publisher.

# Ros integration

In software level the Management Tool subscribe some topic of the UAV, its can do using rosMaster or [multimaster_fkie](http://wiki.ros.org/multimaster_fkie) and the topics must to have a namespace.

## Basic telemetry to get from devices.

The follow table indicate basic telementry from devices.

| PATH               | DATA               | TYPE                      | DESCRIPTION        |
| ------------------ | ------------------ | ------------------------- | ------------------ |
| uav_id/gps         | GPS                | sensor_msgs/NavSatFix     |                    |
| uav_id/velocity    | Velocity           | geometry_msg/TwistStamped |                    |
| uav_id/compass_hdg | heading            | std_msg/Float64           | Heading in degrees |
| uav_id/battery     | Pencentage battery | sensor_msg/BatteryState   |                    |

The path topic and the topic name can be change and can add more categories in devices_msg.yaml file.
