const projects = [
  {
    id: "p-01",
    title: "Anechoic Chamber",
    category: "Lab Build",
    short: "Desinged and built an in-house anechoic chamber to test 80Ghz radar",
    description: "Due to the inaccessibility and price of professional Anechoic rooms, I designed and build a small scale (2x1x1m) chamber to perform bring up, tests and capability gauging chamber with a programmable 2 axis rotator for mm-wave radars.",
    image: "../anechoic%20chamber/photo_1.jpg",
    photos: [
      "../anechoic%20chamber/photo_1.jpg",
      "../anechoic%20chamber/photo_2.jpg",
      "../anechoic%20chamber/photo_3.jpg",
      "../anechoic%20chamber/photo_4.jpg",
      "../anechoic%20chamber/photo_5.jpg",
      "../anechoic%20chamber/photo_6.jpg"
    ]
  },
  {
    id: "p-02",
    title: "Military Surveillance System",
    category: "Field System",
    short: "Developed and implemented a full control, communcation and recognition framework for a military grade PTZ dual channel camera",
    description: "Converted a decomissioned dual sensor PTZ camera to a fully functional system by reverse engineering the internal system and building a complete framwork around it. Designed and developed the control dashboard, power solution, 3 working communcation solutions (4g, Long Range high power directional wifi, and tethered), and implemented AI target recognition. Developed the system to run on a NVIDIA Jetson Platform to allow edge computing and minimal equipment requirement to run the system.",
    image: "../Diana%20-%20Army%20Surveillance/photo_1.jpg",
    photos: [
      "../Diana%20-%20Army%20Surveillance/photo_1.jpg",
      "../Diana%20-%20Army%20Surveillance/photo_2.jpg",
      "../Diana%20-%20Army%20Surveillance/photo_3.jpg"
    ],
    videos: [
      "../Diana%20-%20Army%20Surveillance/video_1.mp4"
    ]
  },
  {
    id: "p-03",
    title: "eVoWay",
    category: "Product Hardware",
    short: "A micro-mobility solution of a surf like two-wheeler that folds and carries easily",
    description: "I helped design and build this project for years as a hobby, and led the attempt to take it to the market. Through many iterations, tests and rides, we've built a robust solution for the urban micro-mobility field. Won the first place in Maof's accelerator in Ashdod, and eventually laying this project to rest during the first months of Covid, this has been one of the most challenging and fun projects I took part in. I still use it and ride it to this day.",
    image: "../eVoway/photo_1.jpg",
    photos: [
      "../eVoway/photo_1.jpg",
      "../eVoway/photo_2.jpg",
      "../eVoway/photo_3.jpg",
      "../eVoway/photo_4.jpg",
      "../eVoway/photo_5.jpg",
      "../eVoway/photo_6.jpg",
      "../eVoway/photo_7.jpg",
      "../eVoway/photo_8.jpg"
    ],
    videos: [
      "../eVoway/video_1.mp4"
    ]
  },
  {
    id: "p-04",
    title: "Radar Car Mount",
    category: "Integration",
    short: "Vehicle-mounted radar fixtures with quick-adjust angles for drive testing.",
    description: "Design and deployment of exterior radar mounts, calibration aids, and rapid iteration parts for on-road experiments.",
    image: "../Radar%20Car%20Mount/photo_2025-12-10_10-23-56.jpg",
    photos: [
      "../Radar%20Car%20Mount/photo_2025-12-10_10-23-56.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-02.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-04.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-08.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-19.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-25.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-28.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-31.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-33.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-36.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-39.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-24-43.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-25-42.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-25-44.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-26-44.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-27-00.jpg",
      "../Radar%20Car%20Mount/photo_2025-12-10_10-27-05.jpg"
    ]
  },
  {
    id: "p-05",
    title: "RadSee - Testing Rigs",
    category: "Test Fixture",
    short: "Quick-build rigs for sensor alignment and calibration passes.",
    description: "Fixture layout that stabilizes radar units and lets operators swap parts quickly during lab and outdoor testing.",
    image: "../RadSee%20-%20Testing%20Rigs/photo_2025-12-10_10-22-07.jpg",
    photos: [
      "../RadSee%20-%20Testing%20Rigs/photo_2025-12-10_10-22-07.jpg",
      "../RadSee%20-%20Testing%20Rigs/photo_2025-12-10_10-23-46.jpg",
      "../RadSee%20-%20Testing%20Rigs/photo_2025-12-10_10-24-12.jpg"
    ]
  },
  {
    id: "p-06",
    title: "Sofia",
    category: "Prototype",
    short: "Compact payload integration with custom mechanical supports.",
    description: "Prototype harnessing and bracketry to stabilize sensors while keeping access to service connectors.",
    image: "../Sofia/photo_2025-12-10_10-27-10.jpg",
    photos: [
      "../Sofia/photo_2025-12-10_10-27-10.jpg",
      "../Sofia/photo_2025-12-10_10-27-15.jpg",
      "../Sofia/photo_2025-12-10_10-27-43.jpg"
    ]
  },
  {
    id: "p-07",
    title: "Strix",
    category: "Prototype",
    short: "Lightweight frame with routing for control electronics.",
    description: "Bracketed assemblies and enclosures tailored for an in-field electronics package.",
    image: "../Strix/photo_2025-12-10_10-25-48.jpg",
    photos: [
      "../Strix/photo_2025-12-10_10-25-48.jpg",
      "../Strix/photo_2025-12-10_10-26-09.jpg",
      "../Strix/photo_2025-12-10_10-26-12.jpg",
      "../Strix/photo_2025-12-10_10-26-16.jpg",
      "../Strix/photo_2025-12-10_10-26-19.jpg"
    ]
  }
];

const generalImages = [
  "../IMG_20190910_125710.jpg",
  "../photo_2025-12-10_10-25-39.jpg",
  "../photo_2025-12-10_10-27-49.jpg",
  "../photo_3_2025-12-10_10-22-54.jpg",
  "../photo_4_2025-12-10_10-22-54.jpg"
];

const projectSources = [
  {
    id: "p-01",
    folder: "../anechoic%20chamber/",
    json: "../anechoic%20chamber/project-template.json"
  },
  {
    id: "p-02",
    folder: "../Diana%20-%20Army%20Surveillance/",
    json: "../Diana%20-%20Army%20Surveillance/project-template.json"
  },
  {
    id: "p-03",
    folder: "../eVoway/",
    json: "../eVoway/project-template.json"
  }
];
