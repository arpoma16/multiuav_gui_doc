# Offline setup

this is when the you want to use the GCS in a place without internet, that is for interface.

## Install local map server

Follow the instruction of the next webpage

https://switch2osm.org/serving-tiles/using-a-docker-container/

For create the container with no cors

```
docker run -p 8080:80 -v osm-data:/data/database -e ALLOW_CORS=1 -d overv/openstreetmap-tile-server run
```

## Install local glyphy server

install the next glyphy server.
https://github.com/Geodan/glyphserver
