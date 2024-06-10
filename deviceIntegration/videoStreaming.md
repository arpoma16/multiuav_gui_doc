# Video streaming

In all uses case for transmision of video from UAV to GCS,we diferentes options:

- Websocket
- WebRTC
- WebRTC_env

The kind of video streaming have to inset when add the device to GCS or in file init devices.

Example GET http://localhost:4000/api/devices:

```json
[
  {
    "id": "0",
    "name": "uav_2",
    "category": "dji",
    "ip": "10.42.0.43",
    "camera": [
      {
        "type": "WebRTC",
        "source": "main"
      }
    ],
    "status": "offline",
    "lastUpdate": "2023-06-09 10:20:55"
  }
]
```

## WebRTC

this case is when mediametic server is run on the GCS this is ideal for use the GCS through internet.

### ros_rtsp

for this we use https://github.com/CircusMonkey/ros_rtsp and configure the configuration on the package for read the topic of video stream.

```
roslaunch ros_rtsp rtsp_streams.launch
```

## WebRTC_env

this case is when mediametix server is run on the device, and the interface for access to device use the ip of device.
and must run mediamtx device

```

docker run --rm -it --network=host  bluenviron/mediamtx
```

### USB camera

publish the camera in server

```
gst-launch-1.0 v4l2src device=/dev/main ! video/x-raw,width=640,height=480 ! videoconvert ! x264enc bframes=0 tune=zerolatency bitrate=500 speed-preset=superfast ! h264parse  ! rtspclientsink location=rtsp://0.0.0.0:8554/video0 rtpjpegpay name=pj
```

## Websocket

using the packege https://github.com/miggilcas/simple_vs and the node for compress camera
