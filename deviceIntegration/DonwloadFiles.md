For do that is necesary add the ip, user and password of the device.

For download the GCS use the library ssh2-sftp-client only allow conexion sftp.

for download files the GCS call to device node for donwload information from cameras to onboard computer. for the onboard computer can donwload files form autopilot, and this files is saves in the /home/user/uav_media folder, with the name of the mission of time send in service called. when this finish the device call service from GCS and GCS access to files through sftp.
