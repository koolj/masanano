# Miraway MASANANO v0.9

This project is offline lightweight DIY solution to monitor landscape. After installing this software on the specified hardware (Nvidia Jetson board + Pi webcam), you will be able to count people, cars, pedestrians, motorbikes from your webcam live stream.

## Table of content

Read the ReadMe_bk.md

## 💻 Hardware pre-requisite

- Nvidia Jetson Nano / TX2 / Xavier or any GNU/Linux x86_64 machine with a CUDA compatible GPU with [nvidia-docker v2.0](https://github.com/NVIDIA/nvidia-docker/wiki/Installation-(version-2.0)#prerequisites) (in the cloud or locally)
- Webcam Logitech C222, C270, C310, C920 / Rasberry Pi cam for Jetson nano / a Video file / IP camera
- A smartphone / tablet / laptop that you will use to operate the system

_If you have a Jetson Nano, [please read this specific documentation](documentation/jetson/JETSON_NANO.md)_

_Also see [In depth guide about compatible Cameras with Jetson](https://elinux.org/Jetson/Cameras)_


## 🚤 How fast is MASANANO ?

FPS depends on:

- which hardware your are running MASANANO on
- which YOLO weights you are using

We made the default settings to run at least at 10 FPS on any Jetson.

Learn more in the [Customize OpenDataCam documentation](documentation/CONFIG.md#Change-neural-network-weights)


## 🛠 Development notes

See [Development notes](documentation/DEVELOPMENT_NOTES.md)

Technical architecture overview:

![Technical architecture](https://user-images.githubusercontent.com/533590/60489282-3f2d1700-9ca4-11e9-932c-19bf84e04f9a.png)

## 💌 Acknowledgments

- OpenDataCam @Benedikt Groß : [https://github.com/opendatacam/opendatacam]
- Original darknet + YOLOv3 @pjreddie  : [https://pjreddie.com/darknet/](https://pjreddie.com/darknet/)
- Darknet fork by @alexeyab : [https://github.com/alexeyab/darknet](https://github.com/alexeyab/darknet)
- IOU / V-IOU Tracker by @bochinski : [https://github.com/bochinski/iou-tracker/](https://github.com/bochinski/iou-tracker/)
- Next.js by @zeit : [https://github.com/zeit/next.js](https://github.com/zeit/next.js)
