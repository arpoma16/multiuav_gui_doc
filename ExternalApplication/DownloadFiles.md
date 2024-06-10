# Download files from GCS

the donwload of files can be using the API or ftp, we recoment using the ftp in the case of big files.

For know the files to download you can cosult suing the

GET http://localhost:4000/api/files/listFiles

or list mission result

GET http://localhost:4000/api/files/get?missionId=72510181

all the files generated are save follow the route `mission_${mission_id}/${uav_name}/${file_name}`

# API donwload files

```
/// http://gsc-ip:4000/files/download/{file_route}
http://127.0.0.1:4000/files/download/mission_1241/uav_15/DJI_20231124132054_0002_WIDE.jpg
```

# FTP

The server ftp is mounted on port 22 and only allow the access to file where save the mission result and can access using the USER and PASSWORD given for the administrator. and you can download files using the routed give for the api.

The GCS use vsftpd with virtual users
https://github.com/dagwieers/vsftpd/tree/3.0.2/EXAMPLE/VIRTUAL_USERS
https://github.com/dagwieers/vsftpd/tree/3.0.2/EXAMPLE/VIRTUAL_USERS_2

For access to the server run

```
// ftp localhost 22

ftp ip 22

```
