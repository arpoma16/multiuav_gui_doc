# test GCS without devices

# telemetry

the information of devices can be get from a rosbag.

`rosbag play -l uav_2_2023_10_26_10_02.bag`

# video streaming

Remenber to add a device with ip of local machine.

## from file

```
gst-launch-1.0 filesrc location=test.mp4 ! decodebin ! x264enc tune=zerolatency ! h264parse ! rtspclientsink location=rtsp://0.0.0.0:8554/test rtpjpegpay

```

## from camera

```
gst-launch-1.0 v4l2src device=/dev/main ! video/x-raw,width=640,height=480 ! videoconvert ! x264enc bframes=0 tune=zerolatency bitrate=500 speed-preset=superfast ! h264parse  ! rtspclientsink location=rtsp://0.0.0.0:8554/video0 rtpjpegpay name=pj
```

## from rosbag

for this we use https://github.com/CircusMonkey/ros_rtsp and configure the configuration on the package for read the topic of video stream.

```
roslaunch ros_rtsp rtsp_streams.launch
```

# Get files from devices

you can use a sftp docker atmoz/sftp

```
docker run --rm -it --mount type=bind,source=/home/grvc/work/px4,destination=/home/one -p 21:22 atmoz/sftp one:1234:::upload

```

# run all flow

for test all flow with a device run the file /multiuav_gui/test/uavServices.py
