# Video streaming

For a third party application can access to video streaming of devices, this have to know how the device is make the video steaming.
The devices have the next diferentes options:

- [WebRTC](#webrtc)
- [WebRTC_env](#webrtc_env)
- [Websocket](#websocket)

The kind of transmission of video can be fetched in the "/api/devices" in the camera array of each device, the property camera is an array that contains objects with properties type and source, one for each video streaming of each UAV. The property type could be Websocket, WebRTC, or WebRTC_env and the source is a string that and the source is text that specifies the address where the information is published.

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

**WebRTC** is used for large distances to transmission of video and all the video transmitted for the UAV is forwarded for the GCS in the mediamtx server in the GCS.(this will used for project RESISTO)

For access to the video of each UAV use the next `http://$(ip_server):8889/${uav_name}_${source}/ `

for example

```jsx
//http://$(ip_server):8889/${uav_name}_${source}/
http://localhost:8889/uav_2_main/
```

this url raises a web page where you can see the uav video transmission in real time and can be added to any page with an HTML IFRAME tag.This is how the GCS interface receives the streaming of video for each UAV.

```
//http://$(ip_uav):8889/${uav_name}_${source}/
<iframe src="http://GCS-ip:8889/${uav_name}_${source}/" scrolling="no"></iframe>
```

## WebRTC_env

**WebRTC_env** is used for large distances, and the video streaming is reading directly from the UAV.(this will used for project OMICRON)

For access to the video of each UAV use the next "http://$(ip_uav):8889/{source}/"

```jsx
//http://$(ip_uav):8889/{source}/
http://10.42.0.43:8889/main/
```

this url raises a web page where you can see the uav video transmission in real time and can be added to any page with an HTML IFRAME tag.This is how the GCS interface receives the streaming of video for each UAV.

```
//http://$(ip_uav):8889/{source}/
<iframe src="http://GCS-ip:8889/{source}/" scrolling="no"></iframe>
```

## Websocket

This is used for transmissions of video over short distances. In this case, the UAV sends images via ROS to GCS in jpg format, and the GCS forwards them to the web interface using web sockets.
