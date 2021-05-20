const notes = {
  title: "Implementing Cisco Networking Solutions",

  chapters: [
    {
      number: 1,
      name: "Network Building Essentials",
      learningObjectives: [
        "The need for networking and an intro to IT Networks",
        "Standard Reference Model for a network called: 'Open Systems Interconnection (OSI) model",
        "TCP/IP Protocol Stack",
        "Various stages in building a network"
      ],
      desc: "",
      sections: [
        {
          name: "introduction to networks",
          desc: "",
          notes: [
            "computers would not be as useful if they were 'egoist' or 'islands of excellence'"
          ],
          aspects: [
            {
              name: "early networks disperate protocols",
              desc: "early computer networks used mostly proprietary protocols",
              protocols: ["DECnet", "SNA", "IPX"],
              notes: [
                "limited interconnectivity due to proprietary network protocols"
              ]
            },
            {
              name: "TCP/IP",
              desc: "Protocol that 'won'; ARPANET's internet protocol",
              notes: ["changed computer networking"]
            }
          ]
        }, //end introduction to networks
        {
          name: "The OSI Model and the TCP/IP Stack",
          desc: "",
          notes: ["OSI is only a reference model  & does not define protocols"],
          aspects: [
            {
              name: "Basic Reference Model for Open Systems Interconnections",
              abbreviation: "OSI",
              desc:
                "The layered model promotes grouping similar functions within a single layer & provides standard interfaces allowing the layers to communicate to another.",
              notes: [""],
              developers: [
                {
                  name: "International Organization for Standardization",
                  abbreviation: "ISO"
                },
                {
                  name:
                    "International Telegraph and Telephone Consultative Committee",
                  abbreviation: "CCITT",
                  desc: "",
                  notes: [
                    "CCITT is abbreviated from the 'Comite Consultatif International Telephonique et Telegraphique' which later became the ITU-T",
                    ""
                  ]
                }
              ],
              layers: [
                {
                  number: 1,
                  name: "Physical Layer",
                  desc:
                    "convert the bit stream on to the physical medium; 1's & 0's on the computer, into the type of energy of the network medium in use.",
                  notes: [
                    "also provides hardware means to: Activate, maintain, and de-activate physical connections between data link entities. ",
                    "sequencing of the bit stream",
                    "channels of the underlying medium",
                    "multiplexing (optionally)"
                  ],
                  protocols: [
                    "Ethernet",
                    "G.703",
                    "FDDI",
                    "V.35",
                    "RJ45",
                    "RS232",
                    "SDH",
                    "DWDM",
                    "OTN"
                  ]
                },
                {
                  number: 2,
                  name: "Data Link",
                  desc: "Driver of the physical layer at the recieving node",
                  notes: [
                    "error detection & correction that may have occurred during transmission/reception at the physical medium.",
                    "flow control between the two nodes to avoid any buffer overruns on either side of the data link connection- this can happen using 'PAUSE' frames in 'Ethernet', not to be confused with 'flow control' in other layers."
                  ],
                  protocols: [
                    "LAPB",
                    "802.3 Ethernet",
                    "802.11 Wifi",
                    "802.15.4 ZigBee",
                    "X.25",
                    "Point to Point Protocol (PPP)",
                    "HDLC",
                    "SLIP",
                    "ATM",
                    "Frame Relay"
                  ]
                },
                {
                  number: 3,
                  name: "Network Layer",
                  desc:
                    "facilitate transparent transfer of datagrams between 'transport layers' at the two nodes",
                  notes: [
                    "finding the right intermediate nodes that may be required to send data to the destination node",
                    "breaks down datagrams into smaller fragments- if the underlying dataLink layer is not capable of handling the datagram that is offered to the network layer for transport on the network",
                    "connection-oriented, and ConnectionLess modes are used to describe the readiness of the communicating nodes before the process of the actual data transfer begins between 2 nodes.",
                    ""
                  ],
                  aspects: [
                    {
                      name: "connection-oriented",
                      desc:
                        "connection is established between the source and the destination, and a path is defined along the network through which data transfer would happen",
                      notes: [
                        "packets arrive in the same order they're sent since they follow the fixed path"
                      ],
                      examples: [
                        "telephone call; a connection must be established before 'talking' or 'transferring the data'."
                      ]
                    },
                    {
                      name: "connection-less",
                      desc:
                        "sends without first establishing a defined connection; data flows in a 'hop by hop' manner.",
                      notes: [
                        "no acknowledgement of reception",
                        "may reach the destination out of order due to following the best avenue on each transmission (hop by hop)"
                      ],
                      examples: ["walkie-talkie/Radio transmission"]
                    }
                  ],
                  protocols: ["AppleTalk", "DDP", "IP", "IPX", "CLNP", "IS-IS"]
                },
                {
                  number: 4,
                  name: "Transport Layer",
                  desc:
                    "facilitates the functional & procedural means of transferring 'variable-length' data sequences from a source to a destination host- via one or more networks.",
                  notes: [
                    "this layer has end-to-end significance and provides a connection-less or connection-oriented service to the 'session-layer'",
                    "responsible for connection: 'establishment', 'management', and 'release'.",
                    "controls the reliability of a given link through 'end-to-end' flow control, segmentation/de-segmentation, and error control",
                    "Multiplexing various data connections over a single network layer as well"
                  ],
                  protocols: ["TCP", "UDP", "SCTP", "NBF"]
                },
                {
                  number: 5,
                  name: "Session Layer",
                  desc:
                    "coordinate & synchronize the dialog between presentation layers at the two endpoints & manage data exchange.",
                  notes: [
                    "establishes, manages, and terminates connections between applications."
                  ],
                  protocols: ["NetBIOS", "SAP", "SOCKS", "RPC"]
                },
                {
                  number: 6,
                  name: "Presentation Layer",
                  desc:
                    "facilitates common representation of the data transferred between application entities; provides independence from differences in data representation/syntax.",
                  notes: [
                    "encryption & de-cryption falls under the purview for application data",
                    "Syntax Layer: somtimes referred to as the Syntax Layer. "
                  ],
                  protocols: [
                    "MIME",
                    "ASCII",
                    "GIF",
                    "JPEG",
                    "MPEG",
                    "MIDI",
                    "SSL"
                  ]
                },
                {
                  number: 7,
                  name: "Application Layer",
                  desc:
                    "applications interact with this layer of the OSI stack to engage in comms with other systems",
                  notes: [
                    "HTTP is an application layer protocol, Google Chrome is a software application that uses the application layer protocol HTTP",
                    "enables users & softApps to access the network & provides user interfaces & support for services such as 'email', 'remote file access and transfer', 'shared database management', and other distributed information services."
                  ],
                  protocols: [
                    "HTTP",
                    "SMTP",
                    "SNMP",
                    "FTP",
                    "DNS",
                    "LDAP",
                    "Telnet"
                  ]
                }
              ]
            }, //end Basic Reference Model, OSI 7-Layer Model
            {
              name: "ISO/IEC 7498-1 standard",
              desc: "",
              notes: [""],
              components: [
                {
                  name: "Seven Layer Model/Basic Reference Model",
                  desc: "an abstract model of networking "
                },
                {
                  name: "A Set of specific protocols defined by other specs",
                  desc: ""
                }
              ]
            }, //end ISO/IEC 7498-1 standard
            {
              name: "The TCP/IP Protocol",
              desc: "",
              notes: [
                "simplified model of the OSI Model & has only 4 broad layers (opposed to OSI's 7)"
              ],
              aspects: [
                {
                  name: "differences",
                  desc: "",
                  layers: [
                    {
                      name: "Application Layer",
                      osiLayers: ["application", "presentation", "session"]
                    },
                    {
                      name: "Transport Layer (Transmission Control Protocol",
                      osiLayers: [
                        "close/end-to-end connection setup",
                        "management",
                        "release"
                      ],
                      differences: [
                        "OSI Transport layer is connection oriented. Different protocols at the transport layer in the TCP/IP model provide different types of services; TCP is connection-oriented, while 'UDP' is connectionless"
                      ]
                    },
                    {
                      name: "Network Layer, Internet Protocol",
                      osiLayers: ["network layer"]
                    },
                    {
                      name: "Network Access Layer",
                      osiLayers: ["Data Link", "Physical"],
                      aspects: [
                        {
                          name: "Network Layer",
                          modes: ["connection-oriented", "connection-less"],
                          difference: "Internet Protocol (IP) is connectionless"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "",
                  desc: "",
                  notes: [""]
                },
                {
                  name: "Advanced Research Projects Agency Network",
                  abbreviation: "ARPANet",
                  desc:
                    "early 'packet-switching' network and the first network to implement the protocol suite 'TCP/IP",
                  notes: [
                    "initially funded by the US Department of Defense (DoD)",
                    "ARPANet was the incubator for the TCP/IP protocol suite"
                  ]
                }
              ]
            }, //end The TCP/IP Protocol
            {
              name: "Internet Protocol",
              abbreviation: "IP",
              desc:
                "Primary function of the IP is to transfer datagrams from 'source' to 'destination' & provide a network transport service.",
              notes: ["connectionless", "send and pray protocol", ""],
              aspects: [
                {
                  name: "IP Header",
                  desc: "",
                  aspects: [
                    {
                      name: "Version",
                      desc: "4-bit field used to decode the IP address version",
                      notes: ["4 is still most commonly used"]
                    },
                    {
                      name: "Header Length",
                      desc:
                        "encodes the length of the IP Header in 4-byte words",
                      notes: [
                        "if the IPv4 Header has NO options, the header would be 20bytes long; 5 4-byte words.",
                        "the value of the header length field in the IP Header would be '5'; first 20 bytes of the IPv4 Header are mandatory."
                      ]
                    },
                    {
                      name: "Differentiated Services Code Piont",
                      abbreviation: "DSCP",
                      desc:
                        "6-bit field in the IPv4 header and is used to encode the 'Quality of Service' required by the IP datagram on the network.",
                      notes: [
                        "this will define if the packet will be treated as a priority packet on the network, or should be discarded if there is congestion on the network.",
                        "this field was not in the original RFC for Internet Protocol (IP), but was added later by 'RFC 2474' to support differentiated models for QoS on IP networks. "
                      ]
                    },
                    {
                      name: "Explicit Congestion Notification",
                      abbreviation: "ECN",
                      bits: 2,
                      desc:
                        "used to explicitly notify the end-hosts if the intermediate devices have encountered congestion so that the end-devices can slow down the traffic being sent on the network- lowering the TCP Window.",
                      notes: [
                        "this helps managing congestion on the network even before the intermediate devices start to drop packets due to queue overruns"
                      ]
                    },
                    {
                      name: "Total Length",
                      desc:
                        "16-bit field that encodes the total length of the IP datagram in bytes.",
                      bits: 16,
                      notes: [
                        "total Length: Length of the TCP Segment, plus the length of the IP Header",
                        "total length of an IP datagram: '65,535', (216-1)",
                        "1500bytes is the most commonly used length for th IP datagram on the network."
                      ]
                    },
                    {
                      name: "Identification",
                      abbreviation: "ID",
                      bits: 16,
                      desc:
                        "uniquely identifies an IP datagram for a given resource address, destination address, and protocol- such that it doesn't repeat within the max-lifetime of the datagram, which is 2-minutes according to TCP RFC793.",
                      notes: [
                        "RFC6864 has made some changes to the original fields that are relevant only at high data rates, and in networks that undergo fragmentation."
                      ]
                    },
                    {
                      name: "Flags",
                      desc:
                        "3 different flags - 3 different bits- used when the IP layer needs to send a datagram of a length that cannot be handled by the underlying data link layer.",
                      notes: [""],
                      types: [
                        {
                          name: "Must Be Zero",
                          abbreviation: "MBZ",
                          desc:
                            "where bits are always send as Zero on the network",
                          notes: [""]
                        },
                        {
                          name: "Do Not Fragment",
                          abbreviation: "DF",
                          desc:
                            "if set to '1', means that this packet should not be fragmented by the intermediate nodes.",
                          notes: [
                            "Such packets are discarded by the intermediate nodes- if there is a need to fragment these packets- and an error message is sent to the transmitting node using the 'Internet Control Message Protocol' (ICMP)"
                          ]
                        },
                        {
                          name: "",
                          abbreviation: "",
                          desc: "",
                          notes: [""]
                        }
                      ]
                    }, //end flags
                    {
                      name: "Fragment Offset",
                      desc:
                        "only used by fragmented packets to denote where in the original datagram the fragment belongs",
                      bits: 13,
                      notes: [
                        "used only by the fragmented packets to denote where in the original datagram- the fragment belongs."
                      ]
                    },
                    {
                      name: "Time To Live",
                      abbreviation: "TTL",
                      bits: 8,
                      desc:
                        "denote the maximum number of intermediate nodes that can process the packet at the IP layer",
                      notes: [
                        "each intermediate node decrements the value by 1 to ensure that the IP packet doesn not get caught in an infinite routing loop; continually going back & forth between nodes",
                        "when the field reaches '0', it is discarded by the node & an error message is sent the source of the datagram as an ICMP message."
                      ]
                    },
                    {
                      name: "Protocol",
                      bits: 8,
                      desc:
                        "used to denote what upper layer protocol is being encapsulated in the IP Packet",
                      notes: [""]
                    }
                  ]
                },
                {
                  name: "",
                  desc: ""
                },
                {
                  name: "",
                  desc: ""
                }
              ]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 2,
      name: "Networks for Digital Enterprises",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 3,
      name: "Components of the Enterprise Network",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 4,
      name: "Understanding and Configuring Campus Network Technologies",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 5,
      name: "Understanding and Configuring Wireless Access Technologies",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 6,
      name: "Understanding and Configuring WAN Technologies",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 7,
      name: "Understanding and Configuring Data Center Technologies",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 8,
      name: "Understanding and Configuring Network Security",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 9,
      name: "Understanding and Configuring Quality of Service",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 10,
      name: "A Systematic Approach to Network Management",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    }, //end chapter
    {
      number: 11,
      name: "Basic Troubleshooting Skills and Techniques",
      learningObjectives: [""],
      desc: "",
      sections: [
        {
          name: "",
          desc: "",
          aspects: [
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            },
            {
              name: "",
              desc: "",
              notes: [""]
            }
          ]
        }
      ] //end sections of chapter
    } //end chapter
  ]
};

/*
        //section
        {
          name: "",
          desc: "",
          notes: [
            "",
          ],
          aspects: [
            {
              name: "",
              desc: "",
              notes: [
                "",
              ]
            },
          ]
        },

*/
