## ⚙️ Installation

1. To install MultiUAV-GUI need node 18 and npm and docker, I remend use nvm for use npm .

2. Clone the repository.

```ssh
git clone https://github.com/alvcaballero/multiuav_gui.git
cd multiuav_gui
```

3. Install the requirements of server.

```ssh
cd server
nvm use 18
npm install
```

3. Install Docker container and prepare the container

```ssh
cd docker
docker build -t muavgcs:noetic .
```

4. modify the docker/container_run.sh and change the PROJECT_DIR value and run

```
cd docker
./container_run.sh
```

5. put repos and in catkin

```
https://github.com/dji-sdk/Onboard-SDK-ROS.git
mkdir build
$cd build
$cmake..
$sudo make -j7 install
cd ..

mkdir catkin_ws && cd carkin_ws
mkdir src && cd src
// git clone --recurse-submodules -j8 https://github.com/alvcaballero/multiUAV_system.git
git clone https://github.com/alvcaballero/multiUAV_system.git
git clone https://github.com/alvcaballero/multiuav_gui.git
git clone https://github.com/dji-sdk/Onboard-SDK-ROS
// git clone https://github.com/grvcTeam/grvc-utils.git
// git clone https://github.com/CircusMonkey/ros_rtsp.git
// git clone https://github.com/miggilcas/simple_vs.git

cd ..
catkin_make
roslaunch aerialcore_gui connect_uas.launch

```
