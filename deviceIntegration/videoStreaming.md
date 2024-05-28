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

## WebRTC_env

## Websocket
